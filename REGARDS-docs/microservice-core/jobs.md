---
layout: classic-docs
title: Jobs
short-title: Jobs
categories:
  - microservice-core
---

# Jobs

Jobs module permits executing tasks in parallel.

Jobs module can be used in any microservice. In this case, _t_job_info_ and _t_job_parameters_ tables are created 
into the microservice database/schema.

A daemon is launched (**JobService**) to manage jobs, it permanently search for jobs to execute following a priority 
provided by job submitter.

To submit a job, it is necessary to create a **JobInfo** object containing informations about the job (ie. job 
parameters, job instantiation class, ...).
Job instantiation class must implement **IJob** interface or better, inherit **AbstractJob** class.

Job object is never manipulated by the user, only JobInfo is available. JobInfo contains job status and job informations
such as percent completion, start and end dates, etc... 

## Creating a job ##
 
To create a job, user must create a JobInfo object providing only following attributes : 
- priority,
- description,
- expiration date,
- result class name,
- parameters,
- job class name (to permit JobService instantiate job).

Two methods permits JobInfo creation :
- `JobInfoService.createAsPending`
- `JobInfoService.createAsQueued`

_PENDING_ and _QUEUED_ are two statuses of a job.
_PENDING_ means jobInfo is only created in database without any involvement of nobody (ie a waiting state).
_QUEUED_ means JobInfo is created in database and will be taken into account by JobService as soon as possible (ie. 
JobService will soon create a Job from this JobInfo and will execute it).

JobService choose which jobs to execute depending on tenants using the microservice, jobs priorities (for a tenant), 
pool capacity (one pool per microservice instance) and pool availability. 

## Life cycle of a job ##

### Statuses ###

Once job service choose a _QUEUED_ JobInfo, its status becomes _TO_BE_RUN_.
Once job service has instantiate JobInfo associated Job, set its parameters, eventually created its workspace ie once 
Job is ready to be executed, its status becomes _RUNNING_. Job is then executed by thread pool.
If it fails, its status is set to _FAILED_ and stacktrace is provided to JobInfo object in database. 
If it succeeds, its status is set to _SUCCEEDED_. 

It is possible to ask for stopping a job with method `JobInfoService.stopJob`. This method is asynchronous and may be
inefficient if job cannot be cancelled or if job has already finished.
In case job is cancelled, its status is then _ABORTED_.
In case expiration date (if one is provided) has been reached when job is chosen to be taken into account, its status 
becomes _FAILED_ (provided stacktrace used to indicate JobInfo failed error is then used to indicate expiration date has
 been reached). 

### Events ###

Some (important) status changes are notified with an AMQP broadcast event (`JobEvent`) :
_ABORTED_, _FAILED_, _RUNNING_, _SUCCEEDED_.


## Completion ##

In order to follow completion progress of a job (in case its execution may take some time), it is possible, while 
implementing a Job, to indicate progression. 

First, it is necessary to inherit `AbstractJob` (which is a good idea in all cases by the way).
Then, it is necessary to implement method `getCompletionCount` giving a total _tick_ count.
Finally, during job execution ie into `run` method, it is necessary to call method `advanceCompletion` the same number
as `getCompletionCount` returned one.
Thanks to that, at any time during job execution, it is possible to know progression percentage.
This is said, to avoid database saturation, this value is updated into database only one time per second (this value is
configurable with _regards.jobs.completion.update.rate.ms_ property). 

# Tasks #

In order to chain jobs, to execute Job1 only when Job2 and Job3 are finished for example, reliant tasks exists.

## Principle ##

The principle of reliant tasks is to provide all complex chain management into objects from rs-microservice and let 
user just define its specific microservice behavior  in its own entities (which inherit provided ones).

## Conception ##

`AbstractReliantTask` is an abstract parameterized entity (mapped on _t_task_ table with a _JOINED_ inheritance strategy) 
having :
    - an optional **OneToOne** relation to a `JobInfo` (mapped with association table _t_task_job_info_),
    - a **ManyToMany** relation to  several parameterized `AbstractReliantTask` (mapped with association table 
    _ta_tasks_reliant_tasks_) (this specifies the dependence between these tasks and the current one).
    
Of course, this is implementing a tree structure that needs to stopped. `LeafTask` inherits `AbstractReliantTask` to
specify a task without reliant tasks.

## Specific microservice implementation ##

Here is Order example :

![](/assets/images/core/OrderMapping.png)

An order contains one task per dataset, each of that contains several files tasks. A files task is a task responsible of
retrieving several files from rs_storage. This retrieval is done thanks to a job.

In this case, `AbstractReliantTask` is responsible to provide progress advancement and dependencies between dataset 
tasks and files tasks, user doesn't need to think about this.

In term of mapping, `DatasetTask` is mapped to _t_dataset_task_ and `FilesTask` to _t_files_tasks_, these two tables are 
joined to _t_task_ with a foreign key.
This permit to add specific properties to these 2 entities being completely independent to ones defined into 
rs_microservice.

Finally, `Order`, which is the root entity, is mapped to _t_order_ table and defines following `NamedEntityGraph` :
```@NamedEntityGraph(name = "graph.order",
           attributeNodes = @NamedAttributeNode(value = "datasetTasks", subgraph = "graph.order.datasetTasks"),
           subgraphs = { @NamedSubgraph(name = "graph.order.datasetTasks",
                   attributeNodes = @NamedAttributeNode(value = "reliantTasks")) })
```
sub graph depth is only 1 because tree has a depth of one and thanks to the use of LeafTask which avoids trying to 
access reliantTask lazy persistent set (which is empty but throws a lazy exception when accessed).
Please, keep that in mind when creating your own entity structure.

Simple `IOrderRepository` example (to avoid multiple **select** and load entire tree with one request) :
```public interface IOrderRepository extends JpaRepository<Order, Long> {
       @EntityGraph("graph.order")
       Order findOneById(Long id);
   }
```

