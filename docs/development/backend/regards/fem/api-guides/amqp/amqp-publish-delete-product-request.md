---
id: backend-amqp-publish-deletion-request
title: Publish a deletion request event
sidebar_label: Publish deletion request
slug: /development/backend/services/fem/guides/amqp/publish-a-deletion-request
---

### Feature deletion request

Request has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureDeletionRequestEvent`

|Property|Type|
|----|-----------|
|priority|(look at [description above](#metadatappt))|
|urn|Unique identifier of the feature|


With following headers:

|Header|Value|
|----|-----------|
|regards.tenant| The tenant|
|regards.request.id| String of max 36 characters long|
|regards.request.date| ISO 8601 date|
|regards.request.owner| String of max 128 characters long|

#### Example

```properties
# Headers
regards.tenant=project1
regards.request.id=78938463-023a-4488-b58c-52af3f7e9446
regards.request.owner=owner
regards.request.date=2020-03-17T12:24:05.995Z
```

```json
{
    "priority": "NORMAL",
    "urn": "URN:FEATURE:DATA:tenant:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1"
}
```