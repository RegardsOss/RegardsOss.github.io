---
id: backend-file-catalog-restoration
title: REGARDS file catalog restoration
sidebar_label: Restoration
sidebar_position: 3
slug: /development/backend/services/file-catalog/restoration/
---

# Restoration file request

Since `file-catalog` has already the knowledge of the file location, on a file restoration request, the `file-catalog` 
service will:
- Handle restoration requests for files that are not available in online storage, coordinate with the file-cache 
service to restore files from nearline or offline storage.
- Once available, notify the requesting service of the file availability or non-availability if file cannot be restored.
- File already available in online storage will be immediately notified as available without any restoration 
  request.
- File request hold by unknown storage will be immediately notified as not available without any restoration request.
- File restoration requests are grouped by checksum to avoid multiple restoration requests for the same file. The group is identified by a unique groupId and can have multiple owners (requesting services) that will be notified of the file availability or non-availability.

## Lifecycle State Machine

```mermaid
---
config:
    theme: redux-color
    look: neo
    layout: elk
---
stateDiagram-v2
    direction TB
    state if_create <<choice>>
    [*] --> if_create : 
    if_create --> TO_DO: no existing request for same checksum
    if_create --> DELAYED: existing PENDING for same checksum
    TO_DO --> TO_DO: existing TO_DO for same checksum<br/>add groupId, max availability
    DELAYED --> DELAYED: existing DELAYED for same checksum<br/>add groupId, max availability

    state "Dispatch" as PIPELINE {
        TO_DO --> PENDING: dispatchRequest(TO_DO)
        DELAYED --> PENDING: dispatchRequest(DELAYED)
    }

    state "Restore response handling" as RESPONSE {
        PENDING --> ERROR: response.status = ERROR
        PENDING --> DONE: response.status = SUCCESS<br/>(request deleted)
    }
    
    state "Terminated" as TERMINATED {
        ERROR --> [*] : deleteRequest(groupId)
        DONE --> [*]
    }
```
## Activity Diagrams

### Restoration request handling

```mermaid
---
config:
    theme: redux-color
    look: neo
    layout: elk
---
flowchart TD
    %% Restoration request handling
    A>Receive FilesRestorationRequestEvent] --> B[Create/mark request group as granted]
    B --> C[Search FileReferences by checksums]
    C --> D[Partition by storage priority and type]

    D --> E{Storage category}
    E -->|ONLINE| Online[Generate download URL]
    Online --> Online1[/Publish available FileRequestEvent event with download location/]
    Online1 --> Online2[/Broadcast available FileAvailableEvent event/]
    Online2 --> Online3[Mark group request success]

    E -->|UNKNOWN| Unknown1[/Publish not available FileRequestEvent/]
    Unknown1 --> Unknown2[/Broadcast not available FileAvailableEvent event/]
    Unknown2 --> Unknown3[Mak group request error]
    E -->|NEARLINE or OFFLINE| Nearline[Create or update FileCacheRequest]
    
    Nearline --> Status{Existing request status?}
    Status -->|TO_DO or DELAYED exists| Update[Merge groupId and availability]
    Status -->|PENDING exists| Delayed[Create DELAYED request]
    Status -->|No matching active request| Todo[Create TO_DO request]
    Update --> Persist[Persist request]
    Delayed --> Persist
    Todo --> Persist
    Persist --> Metric[Increment restoration request metric]
```

### Dispatching restoration requests to file-cache

```mermaid
---
config:
    theme: redux-color
    look: neo
    layout: elk
---
flowchart TD

    %% Scheduler/dispatch (to file-cache) loop
    Scheduler(Scheduler tick<br/>with distributed lock) --> Dispatcher[Dispatch TO_DO requests<br/>by storage/page]
    Dispatcher--> Repo[Set request status to PENDING]
    Repo --> Publisher[Publish RestoreRequestFromCatalogEvent to file-cache]
```

### Receiving restoration responses from file-cache

```mermaid
---
config:
    theme: redux-color
    look: neo
    layout: elk
---
flowchart TD

    %% Response (from file-cache) handling
    A[Receive RestoreResponseFromCacheEvent list] --> Group[Group responses by requestId and load requests]
    Group --> Response{Response status selected per requestId}
    
    Response -->|SUCCESS| Success[Delete request if still exists]
    Success --> S1[/Publish available event FileReferenceEvent with cache location/]
    S1 --> S2[/Broadcast available event FileAvailableEvent/]
    S2 --> S3[Notify availability success to the matching group request]
    S3 --> S4[Increment success metric]
    
    Response -->|ERROR| Error[Update request: status ERROR + cause]
    Error --> E1[/Publish not available event FileReferenceEvent with error cause/]
    E1 --> E2[/Broadcast not available event FileAvailableEvent/]
    E2 --> E3[Notify availability error to the matching group request]
    E3 --> E4[Increment error metric]
    
    %% Multi-response policy note
    Group --> G1[If multiple responses for same requestId: prefer ERROR when statuses differ, else first status]
    G1 --> Response
```

## Sequence Diagrams

### Reception of restoration requests

```mermaid
---
config:
  theme: redux-color
  look: neo
  layout: elk
---
sequenceDiagram
    autonumber
    participant Handler@{ "type" : "boundary" }  as FilesRestorationRequestHandler
    participant RequestService as FileCacheRequestService
    participant GroupService as RequestsGroupService
    participant ReferenceService as FileReferenceService
    participant LocationService as StorageLocationService
    participant Repo as IFileCacheRequestRepository
    participant Publisher as FileReferenceEventPublisher
    participant Metric as StorageMetricService

    Handler->>RequestService: makeAvailable(events)
    loop each restoration event
        RequestService->>GroupService: granted(groupId, AVAILABILITY, count, expiration)
        RequestService->>ReferenceService: search(checksums)
        RequestService->>LocationService: searchActiveHigherPriority(storages) (loop by priority)

        alt file is ONLINE
            RequestService->>Publisher: available(fileReferenceDto, message, null)
            RequestService->>GroupService: requestSuccess(...)
        else file is NEARLINE/OFFLINE
            RequestService->>Repo: findByChecksum(checksum)
            alt existing TO_DO/DELAYED request
                RequestService->>Repo: save(updated request with groupId/hours)
            else existing PENDING request
                RequestService->>Repo: save(new request, status=DELAYED)
            else no usable existing request
                RequestService->>Repo: save(new request, status=TO_DO)
            end
            RequestService->>Metric: incrementRestorationRequests(storage, tenant)
        else file unknown
            RequestService->>Publisher: notAvailable(checksum,...)
            RequestService->>GroupService: requestError(...)
        end
    end
```

### Dispatching restoration request to file-cache:

```mermaid
---
config:
    theme: redux-color
    look: neo
    layout: elk
---
sequenceDiagram
    autonumber
    participant Scheduler@{ "type" : "control" } as FileCacheRequestScheduler
    participant RequestService as FileCacheRequestService
    participant Repo as IFileCacheRequestRepository
    participant Dispatcher as FileCacheRequestDispatcherService
    participant Publisher as "IPublisher (AMQP)"
    participant Cache@{ "type" : "boundary" } as "File-Cache"
    
    Note over Scheduler,RequestService: "Scheduled every fixed delay with distributed lock"
    Scheduler->>RequestService: dispatchRequest(TO_DO)
    RequestService->>Repo: findStoragesByStatus(TO_DO)
    loop each storage
        loop pages (id asc, size=nbRequestsPerJob)
            RequestService->>Repo: findAllByStorageAndStatusAndIdGreaterThan(...)
            RequestService->>Dispatcher: dispatchByStorage(storage, requests)
            Dispatcher->>Repo: updateStatusByIds(PENDING, requestIds)
            Dispatcher->>Publisher: publish(RestoreRequestFromCatalogEvent[])
            Publisher-->>Cache: restore request events
        end
    end
```

### Reception of restoration response from file-cache:

```mermaid
---
config:
    theme: redux-color
    look: neo
    layout: elk
---
sequenceDiagram
    autonumber
    participant Cache@{ "type" : "boundary" }  as RestoreResponseEventHandler
    participant ResponseService as FileCacheResponseService
    participant Repo as IFileCacheRequestRepository
    participant Publisher as FileReferenceEventPublisher
    participant GroupService as RequestsGroupService
    participant Metric as StorageMetricService

    Cache-->>ResponseService: handleRestoreResponses(RestoreResponseFromCacheDto[])
    ResponseService->>Repo: findAllById(requestIds)

    loop each found requestId
        alt response status = SUCCESS
            ResponseService->>Repo: "existsById + deleteById(requestId)"
            ResponseService->>Publisher: "available(fileReferenceDto, successMessage, expirationDate)"
            ResponseService->>GroupService: "availabilityRequestSuccess(groupId, checksum, owners)"
            ResponseService->>Metric: "incrementRestorationRequestSuccess(storage, tenant)"
        else response status = ERROR
            ResponseService->>Repo: "findById + save(status=ERROR, errorCause)"
            ResponseService->>Publisher: "notAvailable(checksum, storage, cause, groupIds)"
            ResponseService->>GroupService: "requestError(...)"
            ResponseService->>Metric: "incrementRestorationRequestError(storage, tenant)"
        end
    end

    Note over ResponseService: "If multiple responses for same requestId:<br/>prefer ERROR when statuses differ otherwise first response."
```
