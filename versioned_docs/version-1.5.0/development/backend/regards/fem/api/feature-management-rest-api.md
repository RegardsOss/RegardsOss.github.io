---
id: backend-fem-rest-api
title: Feature Manager REST API
sidebar_label: Feature Manager REST
slug: /development/backend/services/fem/api/rest/
---


{@import feature-management-intro.md}

## REST API

For creation and update requests, REST API is expected a GeoJSON collection extended with specific metadata.

The structure is as follows :

* Required `metadata` that apply to **all features**,
* A required `type` with value `FeatureCollection`,
* Required `features` containing a set of [GeoJson feature](#payloadppt).

Example of feature creation collection:

```json
{
    "metadata": {
        "session": "session",
        "sessionOwner": "owner",
        "storages": [
            {
                "pluginBusinessId": "disk"
            }
        ],
        "priority": "NORMAL"
    },
    "requestOwner": "owner",
    "features": [{}, {}, {}],
    "type": "FeatureCollection"
}
```

Example of feature update collection:

```json
{
    "metadata": {
        "storages": [
            {
                "pluginBusinessId": "disk"
            }
        ],
        "priority": "NORMAL"
    },
    "features": [{}, {}, {}],
    "type": "FeatureCollection"
}
```

:::danger
Session & session owner are not supported in update metadata!
:::

### Feature Creation request example

{@import generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/http-request.md}

{@import generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-body.md}

{@import generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/http-response.md}

API return maps of granted and denied requests :

* Granted property maps feature id to its related request id and allows the producer to optionnaly monitor request lifecycle listening to request event.
* Denied property maps feature id to a list of rejection causes.

### Feature Patch request example

{@import generated-snippets/FeatureControllerIT/testCreateValidFeatureUpdateRequest/http-request.md}

{@import generated-snippets/FeatureControllerIT/testCreateValidFeatureUpdateRequest/request-body.md}

{@import generated-snippets/FeatureControllerIT/testCreateValidFeatureUpdateRequest/http-response.md}


API return maps of granted and denied requests :

* Granted property maps feature urn to its related request id and allows the producer to optionnaly monitor request lifecycle listening to request event.
* Denied property maps feature urn to a list of rejection causes.
