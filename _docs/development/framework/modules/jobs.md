---
layout: classic-docs
title: Jobs
short-title:
---

{% include toc.md %}


Jobs module allows to execute tasks in parallel on several microservices.

Jobs module can be used by any microservice. When used, `t_job_info` and `t_job_parameters` tables are created into the microservice database/schema.

The daemon `JobService` is launched to manage jobs, it permanently searches for jobs to execute following a priority provided by job submitter.

To submit a job, it is necessary to create a `JobInfo` object containing informations about the job (ie. job parameters, job instantiation class, ...).
`Job` instantiation class must implement `IJob` interface or better, inherit `AbstractJob` class.

`Job` object is never manipulated by developers, only `JobInfo` is available. `JobInfo` contains job status and job informations
such as percent completion, start and end dates...  

## Job creation

To create a job, developers must create a `JobInfo` object by providing following attributes :  

| Name | Type | Description |
| :--: | :--: |:---------- |
| locked | `Boolean` | `false` means your job will be cleaned by an automatic cleaning process |  
| priority | `Integer` | Job priority |  
| parameters | `Set<JobParameter>` | Job parameters |  
| owner | `String` | The email of the job owner |  
| className | `String` | Job class name to execute |  
| expirationDate | `OffsetDateTime` _optional_ | When provided and reached, `JobInfoService` will mark the job as `FAILED` |  
{: .table .table-striped}

Two methods permits `JobInfo` creation :

- `JobInfoService.createAsPending`
- `JobInfoService.createAsQueued`

There is two job statuses :

- `PENDING` means `JobInfo` is only created in database, and will need another manual state change to `QUEUED` to be taken in account by `JobService`.
- `QUEUED` means `JobInfo` is created in database and will be taken into account by JobService as soon as possible (ie. `JobService` will soon create a `Job` from this `JobInfo` and will execute it).

Every instance of the same microservice will contains a `JobService` that fills its thread pool with jobs from all tenants. If the pool contains an empty slot, it searches for the next tenant having job to do with the highest priority and so on.  

To sum up, here is an example of Job creation :

```java
Set<JobParameter> parameters = Sets.newHashSet();
parameters.add(new JobParameter(<your job>.SOME_PARAMETER_NAME, "42"));
JobInfo jobInfo = new JobInfo(false, 0, parameters, authResolver.getUser(), <your job>.class.getName())
jobInfo.setExpirationDate(OffsetDateTime.now().plusDays(40));
jobInfoService.createAsQueued(jobInfo);
LOGGER.debug("New job scheduled uuid={}", jobInfo.getId().toString());
```

## Job life cycle

### Statuses

Once the `JobService` chooses a `QUEUED` `JobInfo`, its status becomes `TO_BE_RUN`.  
Then the `JobService` will prepare the `Job` by setting its parameters and eventually creating its workspace, if that's needed. Once finished, the job status becomes `RUNNING` and the Job is executed by the `JobService` thread pool.  
If it fails, its status is set to `FAILED` and stacktrace is saved in the `JobInfo` database object.  
If it succeeds, its status is set to `SUCCEEDED`.  

It is possible to ask for stopping a job with method `JobInfoService.stopJob`. This method is asynchronous and may be inefficient if job cannot be cancelled or if job has already finished.  
In case job is cancelled, its status is changed to `ABORTED`.  
In case the expiration date, when provided, has been reached whereas job is still in `QUEUED` state, its status becomes `FAILED` (provided stacktrace used to indicate JobInfo failed error is then used to indicate expiration date has been reached).  

### AMQP events

Some (important) status changes are notified with an AMQP broadcast event (`JobEvent`) :
`ABORTED`, `FAILED`, `RUNNING`, `SUCCEEDED`.

## Completion

Most of jobs will take a long time to finish, so when that's possible, you should implement the job progression.

To do so, it is necessary to inherit `AbstractJob` (which is a good idea in all cases by the way).
Then, it is necessary to implement method `getCompletionCount` giving a total _tick_ count.
Finally, during job execution ie into `run` method, it is necessary to call method `advanceCompletion` the same number
as `getCompletionCount` returned one.
Thanks to that, at any time during job execution, it is possible to know progression percentage.
This is said, to avoid database saturation, this value is updated into database only one time per second (this value is configurable with _regards.jobs.completion.update.rate.ms_ property).  

## Tasks

In order to chain jobs, to execute _Job1_ only when _Job2_ and _Job3_ are finished for example, reliant tasks exists.

### Principle

The principle of reliant tasks is to provide all complex chain management into objects from rs-microservice and let 
user just define its specific microservice behavior in its own entities (which inherit provided ones).

### Conception

`AbstractReliantTask` is an abstract parameterized entity (mapped on `t_task` table with a _JOINED_ inheritance strategy) having :

- an optional **OneToOne** relation to a `JobInfo` (mapped with association table `t_task_job_info`),
- a **ManyToMany** relation to several parameterized `AbstractReliantTask` (mapped with association table `ta_tasks_reliant_tasks`), to specify the dependency between others tasks and the current one.

Of course, this is implementing a tree structure that needs to be stopped. `LeafTask` inherits `AbstractReliantTask` to
specify a task without reliant tasks.

### Specific microservice implementation

Here is _rs-order_ example :

![](/assets/images/core/OrderMapping.png)

An order contains one task per dataset, each of that contains several files tasks. A files task is a task responsible of retrieving several files from _rs_storage_. This retrieval is done thanks to a job.

In this case, `AbstractReliantTask` is responsible to provide progress advancement and dependencies between dataset tasks and files tasks, user doesn't need to think about this.

In term of mapping, `DatasetTask` is mapped to `t_dataset_task` and `FilesTask` to `t_files_tasks`, these two tables are joined to `t_task` with a foreign key.
This allows to add specific properties to these 2 entities being completely independent to ones defined into _rs_microservice_.

Finally, _rs-order_, which is the root entity, is mapped to `t_order` table and defines following `NamedEntityGraph` :

```java
@NamedEntityGraph(name = "graph.order",
    attributeNodes = @NamedAttributeNode(value = "datasetTasks", subgraph = "graph.order.datasetTasks"),
    subgraphs = { @NamedSubgraph(name = "graph.order.datasetTasks",
            attributeNodes = @NamedAttributeNode(value = "reliantTasks")) })
```

sub graph depth is only 1 because tree has a depth of one and thanks to the use of LeafTask which avoids trying to 
access reliantTask lazy persistent set (which is empty but throws a lazy exception when accessed).
Please, keep that in mind when creating your own entity structure.

Simple `IOrderRepository` example (to avoid multiple **select** and load entire tree with one request) :

```java
public interface IOrderRepository extends JpaRepository<Order, Long> {
    @EntityGraph("graph.order")
    Order findOneById(Long id);
}
```
