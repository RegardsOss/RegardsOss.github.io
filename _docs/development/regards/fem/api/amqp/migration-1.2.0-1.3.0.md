#### V1.1.0 to V1.2.0 migration

Removed properties (replaced by headers):

|Property|Type|
|----|-----------|
|requestId| String of max 36 characters long|
|requestOwner| String of max 128 characters long|
|requestDate| ISO 8601 date|
{:.table.table-striped}


Removed headers:

|Header|Value|
|----|-----------|
|regards.converter| GSON|
|regards.type|fr.cnes.regards.modules.feature.dto.event.in.FeatureCreationRequestEvent|
{:.table.table-striped}

New headers:

|Header|Value|
|----|-----------|
|regards.request.id| String of max 36 characters long|
|regards.request.date| ISO 8601 date|
|regards.request.owner| String of max 128 characters long|
{:.table.table-striped}
