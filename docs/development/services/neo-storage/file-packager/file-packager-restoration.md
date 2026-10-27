---
id: backend-file-packager-restoration
title: REGARDS file packager restoration
sidebar_label: Restoration
sidebar_position: 3
slug: /development/backend/services/file-packager/restoration/
---

# Restoration file request

Restoration concerned only "small" files that have been aggregated into packages (also known as archive) by the 
`file-packager` microservice.

On reception of a `RestorePackageRequestEvent` from the `file-cache` microservice:
- if the package is already STORED in nearline storage, 
  the `file-packager` microservice forwards the request as a `RestoreRequestEvent` to the `file-access` 
  microservice to restore files from nearline storage to online storage only .
- if the package is not yet STORED the `file-packager` microservice persists a `CopyFileToCache` entity 
  and will try to copy the file from its own workspace to the cache 
  and publish a `RestorePackageResponseEvent` with the restoration status (ERROR or SUCCESS) to the `file-catalog` microservice.
- Copy that fails once will be retried once on next scheduling until the copy is successful or definitively failed.


## Request status of `CopyFileToCache` entity

#### Statuses of `CopyFileToCache` entity.

Note: ERROR and SUCCESS exist in CopyFileStatus, 
but in current CopyFileToCache flow the entity is typically deleted after final outcome 
rather than persisted in those statuses.

| Status         | Description                                                          |
|----------------|----------------------------------------------------------------------|
| `TO_BE_COPIED` | The copy is pending.                                                 |
| `COPYING`      | The copy is being copied.                                            |
| `TO_BE_RETRIED`| The copy failed a first time and will be retried on next scheduling. |
| `RETRYING`     | The copy is being retried.                                           |
| `ERROR`        | The copy definitively failed.                                        |
| `SUCCESS`      | The copy is successful.                                              |


#### State diagram of `CopyFileToCache` entity.

```mermaid
---
config:
    theme: redux-color
    look: neo
    layout: elk
---
stateDiagram-v2
    [*] --> TO_BE_COPIED : request created<br/>(createFileCopyToCacheRequest)

    TO_BE_COPIED --> COPYING : scheduleCopyFileToCache<br/>(job queued + DB status update)

    COPYING --> TO_BE_RETRIED : copy attempt fails (IOException)<br/>first failure on COPYING
    TO_BE_RETRIED --> RETRYING : scheduleRetryCopyFileToCache<br/>(retry job queued + DB status update)

    COPYING --> SUCCESS : copy succeeds
    RETRYING --> SUCCESS : retry succeeds

    RETRYING --> ERROR  : retry fails (IOException)

    COPYING --> REMOVED : package status becomes STORED<br/>(forward RestoreRequestEvent to file-access + delete row)
    RETRYING --> REMOVED : package status becomes STORED<br/>(forward RestoreRequestEvent to file-access + delete row)

    COPYING --> ERROR : file not found in building package
    RETRYING --> ERROR : file not found in building package

    TO_BE_COPIED --> ERROR : job aborted/crashed event
    TO_BE_RETRIED --> ERROR : job aborted/crashed event
    COPYING --> ERROR : job aborted/crashed event
    RETRYING --> ERROR : job aborted/crashed event
    
    ERROR --> REMOVED : publish ERROR response RestorePackageResponseEvent to file-catalog + delete row
    SUCCESS --> REMOVED : publish SUCCESS response RestorePackageResponseEvent to file-catalog + delete row
 
    REMOVED --> [*]
```


### Handling of `RestorePackageRequestEvent` events

The handler subscribes once to `RestorePackageRequestEvent` when application is ready
then on reception of that event processes batches of requests by delegating it to the `FilePackagerCopyService`.

For each request, it checks the package status and either forwards the request to `file-access` or persists a copy
request `CopyFileToCache` for later processing.


#### Sequence diagram of restoration request handling

```mermaid
---
config:
    theme: redux-color
    look: neo
    layout: elk
---
sequenceDiagram
  autonumber
  participant App as Spring Boot
  participant Handler as FileCopyToCacheEventHandler
  participant Subscriber as ISubscriber
  participant Service as FilePackagerCopyService
  participant PackageRepo as FileInBuildingPackageRepository
  participant CopyRepo as CopyFileToCacheRepository
  participant Publisher as IPublisher

  App->>Handler: onApplicationEvent(ApplicationReadyEvent)
  Handler->>Subscriber: subscribeTo(RestorePackageRequestEvent.class, this)
  
  Note over Subscriber,Handler: Later, a batch of RestorePackageRequestEvent is received
  Subscriber->>Handler: handleBatch(messages)
  Handler->>Handler: log DEBUG + start timer
  Handler->>Service: createFileCopyToCacheRequest(messages)
  
  loop for each message
      Service->>PackageRepo: findByStorageAndChecksum(storage, checksum)
      PackageRepo-->>Service: package status or empty
  end
  
  Service->>Service: group requests by package status
  
  alt some requests have no package status (not found)
    Service->>Service: build failure responses (FILE_NOT_FOUND)
    Service->>Publisher: publish(List<RestorePackageResponseEvent ERROR>)  
  
  else some requests have package status is BUILDING / TO_STORE / STORE_IN_PROGRESS / STORE_ERROR
      Service->>Service: map DTO -> CopyFileToCache (status=TO_BE_COPIED)
      Service->>CopyRepo: saveAll(copy requests)
  
  else some requests have package status STORED
      loop each STORED request
          Service->>PackageRepo: findByStorageAndChecksum(...)
          PackageRepo-->>Service: FileInBuildingPackage
          Service->>Service: build RestoreRequestEvent with final file URL
      end
      Service->>Publisher: publish(List<RestoreRequestEvent>) forwarded to file-access
  end
  
  Service-->>Handler: return
  Handler->>Handler: log INFO elapsed time
```


#### Activity diagram of restoration request handling

```mermaid
---
config:
    theme: redux-color
    look: neo
    layout: elk
---
flowchart TD
%% =========================
%% ENTRYPOINT (handler)
%% =========================
A([ApplicationReadyEvent]) --> B["subscribeTo(RestorePackageRequestEvent, handler)"]
B --> C[[Batch of RestorePackageRequestEvent received]]
C --> D["handleBatch(messages)"]
D --> E["filePackagerCopyService.createFileCopyToCacheRequest(messages)"]

%% =========================
%% createFileCopyToCacheRequest
%% =========================
E --> F[For each message:<br/>resolve package status from storage+checksum]
F --> G{status found?}

G -- No --> H[Build ERROR response RestorePackageResponseEvent:<br/>FILE_NOT_FOUND]
H --> I[publish ERROR RestorePackageResponseEvent:<br/>FILE_NOT_FOUND]
I --> J([End batch])

G -- Yes --> K[Group requests by package status]
K --> L[Keep acceptable statuses:<br/>BUILDING, TO_STORE,<br/>STORE_IN_PROGRESS, STORE_ERROR]
L --> M["Map DTO to entity CopyFileToCache<br/>(status=TO_BE_COPIED)"]
M --> N["saveAll(CopyFileToCache request entities)"]

K --> O{Any STORED requests?}
O -- Yes --> P[Build RestoreRequestEvent<br/>with final archive URL]
P --> Q[publish RestoreRequestEvent to file-access]
Q --> J
O -- No --> J
```

### Scheduling copy jobs and handling job failure or abortion events

Regularly, the `FileCopyToCacheScheduler` and `RetryFileCopyToCacheScheduler` schedule `CopyFileFromBuildingPackageJob` jobs for all pending requests in the database.

- `FileCopyToCacheScheduler` schedules copy jobs for all requests with the pending status `TO_BE_COPIED`.
- `RetryFileCopyToCacheScheduler` schedules copy jobs for all requests with the pending status `TO_BE_RETRIED`.

When a job execution fails or is aborted a JobEvent is handled by the AbortedOrFailedJobEventHandler.
In the case the job is a `CopyFileFromBuildingPackageJob` job, an ERROR 
`RestorePackageResponseEvent` to notify `file-catalog` is published.

#### Activity diagrams of scheduled copy jobs and handling job failure or abortion events

```mermaid
---
config:
    theme: redux-color
    look: neo
    layout: elk
---
flowchart TD
 
  %% =========================
  %% SCHEDULING (periodic)
  %% =========================
  R([FileCopyToCacheScheduler tick]) --> S["scheduleCopyFileToCache()"]
  S --> T["findAllByStatus(TO_BE_COPIED, paged)"]
  T --> U[create one job CopyFileFromBuildingPackageJob per row]
  U --> V[batch update status:<br/>TO_BE_COPIED -> COPYING]
  V --> CopyingDone([End Batch])
  
  W([RetryFileCopyToCacheScheduler tick]) --> X["scheduleRetryCopyFileToCache()"]
  X --> Y["findAllByStatus(TO_BE_RETRIED, paged)"]
  Y --> Z[create one retry CopyFileFromBuildingPackageJob job per row]
  Z --> AA[batch update status:<br/>TO_BE_RETRIED -> RETRYING]
  AA --> RetryingDone([End Batch])

  %% =========================
  %% JOB FAILED / ABORTED EVENT
  %% =========================
  XX([JobEvent FAILED/ABORTED for copy job]) --> YY["jobAbortedOrCrashed(copyFileToCache)"]
  YY --> ZZ[publish ERROR RestorePackageResponseEvent:<br />Copy job aborted or crashed]
  ZZ --> QQ[delete copy request]
  QQ --> UU([Done])
```

#### Sequence diagram of the 'FileCopyToCacheScheduler'

```mermaid
---
config:
    theme: redux-color
    look: neo
    layout: elk
---
sequenceDiagram
  autonumber
  participant Scheduler as FileCopyToCacheScheduler
  participant L as AbstractLockTaskScheduler
  participant CopyService as FilePackagerCopyService
  participant Auth as IAuthenticationResolver
  participant CopyRepo as CopyFileToCacheRepository
  participant JobInfoService as JobInfoService

  Note over Scheduler,L: Periodic scheduling (fixed delay)
  Scheduler->>L: scheduleWithLock(scheduleCopyFileTask)
  L->>CopyService: scheduleRetryCopyFileTask()

  CopyService->>Auth: getUser()
  loop each page
    CopyService->>CopyRepo: findAllByStatus(TO_BE_COPIED, page)
    alt page has requests
      loop each CopyFileToCache
        CopyService->>JobInfoService: createAsQueued(JobInfo for CopyFileFromBuildingPackageJob)
      end
      CopyService->>CopyRepo: updateAllStatusByIdIn(ids, COPYING)
    else no request
      Note over CopyService,CopyRepo: nothing scheduled
    end
  end
```

#### Sequence diagram of the 'RetryFileCopyToCacheScheduler'

```mermaid
---
config:
    theme: redux-color
    look: neo
    layout: elk
---
sequenceDiagram
  autonumber
  participant Scheduler as RetryFileCopyToCacheScheduler
  participant L as AbstractLockTaskScheduler
  participant CopyService as FilePackagerCopyService
  participant Auth as IAuthenticationResolver
  participant CopyRepo as CopyFileToCacheRepository
  participant JobInfoService as JobInfoService

  Note over Scheduler,L: Periodic scheduling (fixed delay)
  Scheduler->>L: scheduleWithLock(scheduleCopyFileTask)
  L->>CopyService: scheduleRetryCopyFileTask()

  CopyService->>Auth: getUser()
  loop each page
    CopyService->>CopyRepo: findAllByStatus(TO_BE_RETRIED, page)
    alt page has requests
      loop each CopyFileToCache
        CopyService->>JobInfoService: createAsQueued(JobInfo for CopyFileFromBuildingPackageJob)
      end
      CopyService->>CopyRepo: updateAllStatusByIdIn(ids, RETRYING)
    else no request
      Note over CopyService,CopyRepo: nothing scheduled
    end
  end
```

### Job execution of `CopyFileFromBuildingPackageJob`

Depending on the status of the package, the job either forwards the request to `file-access` or tries to copy the file from its own workspace to the cache.
If the copy fails once, the request is marked `TO_BE_RETRIED` and will be retried on next scheduling.


#### Activity diagram of the job execution `CopyFileFromBuildingPackageJob`

```mermaid
---
config:
    theme: redux-color
    look: neo
    layout: elk
---
flowchart TD
  %% =========================
  %% JOB EXECUTION
  %% =========================
  BB([CopyFileFromBuildingPackageJob.run]) --> CC["copyFileToCache(copyId)"]
  CC --> DD{copy request exists?}
  DD -- No --> EE[nothing to do]
  EE --> JJ([Done])
  
  DD -- Yes --> FF[find FileInBuildingPackage<br/>by storage+checksum]
  FF --> GG{file found?}
  GG -- No --> HH[publish ERROR response RestorePackageResponseEvent:<br/>FILE_NOT_FOUND]
  HH --> II[delete copy request]
  II --> JJ
  
  GG -- Yes --> KK{package status}
  KK -- STORED --> LL[publish RestoreRequestEvent to file-access]
  LL --> II
  
  KK -- BUILDING / TO_STORE / STORE_IN_PROGRESS / STORE_ERROR --> NN[try copy from workspace source to target cache]
  
  NN --> OO{copy success?}
  OO -- Yes --> PP[publish SUCCESS response RestorePackageResponseEvent]
  PP --> II
  
  OO -- No --> RR{current copy status}
  RR -- COPYING --> SS["set status TO_BE_RETRIED<br/>save request (no response yet)"]
  SS --> JJ
  
  RR -- RETRYING --> TT["publish ERROR response RestorePackageResponseEvent:<br/>(definitive failure no more retries)"]
  TT --> II
  
  RR -- other --> VV[publish ERROR response RestorePackageResponseEvent:<br/>unexpected status]
  VV --> II
```

#### Sequence diagram of the job execution of `CopyFileFromBuildingPackageJob`

```mermaid
---
config:
    theme: redux-color
    look: neo
    layout: elk
---
sequenceDiagram
  autonumber
  participant Job as CopyFileFromBuildingPackageJob
  participant Service as FilePackagerCopyService
  participant CopyRepo as CopyFileToCacheRepository
  participant FileRepo as FileInBuildingPackageRepository
  participant FS as FileSystem
  participant Pub as IPublisher

  Note over Job,Service: Later, queued job execution
  Job->>Service: copyFileToCache(copyId)
  Service->>CopyRepo: findById(copyId)

  alt copy request missing
    Note over Service,CopyRepo: stop (no-op)
  else copy request found
    Service->>FileRepo: findByStorageAndChecksum(storage, checksum)

    alt file not found in building package
      Service->>Pub: publish(RestorePackageResponseEvent ERROR: FILE_NOT_FOUND)
      Service->>CopyRepo: deleteById(copyId)

    else file found
      alt package status == STORED
        Service->>Pub: publish(RestoreRequestEvent to file-access)
        Service->>CopyRepo: deleteById(copyId)

      else package status in BUILDING/TO_STORE/STORE_IN_PROGRESS/STORE_ERROR
        Service->>FS: createDirectories(target parent)
        Service->>FS: copy(source, target, REPLACE_EXISTING)

        alt copy succeeds
          Service->>Pub: publish(RestorePackageResponseEvent SUCCESS)
          Service->>CopyRepo: deleteById(copyId)

        else IOException
          alt current status == COPYING
            Service->>CopyRepo: save(status=TO_BE_RETRIED)
            Note over Service,CopyRepo: no response now (retry later)
          else current status == RETRYING
            Service->>Pub: publish(RestorePackageResponseEvent ERROR)
            Service->>CopyRepo: deleteById(copyId)
          else unexpected status
            Service->>Pub: publish(RestorePackageResponseEvent ERROR unexpected status)
            Service->>CopyRepo: deleteById(copyId)
          end
        end
      end
    end
  end
```

