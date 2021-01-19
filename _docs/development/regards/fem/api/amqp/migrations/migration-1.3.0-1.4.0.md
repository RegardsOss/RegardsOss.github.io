# V1.2.1 to V1.4.0 migration

## AMQP Feature requests

### Feature creation request

No changes in amqp interfaces.

### Feature creation request by file reference

Reference requests in previous version are renamed to "Extraction requests" in V1.4.0.

New extraction requests has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionRequestEvent` 
In previous version reference request was sent to : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureReferenceRequestEvent`

The requests body and header has not changed.

### Feature patch request

No changes in amqp interfaces.

### Feature deletion request

No changes in amqp interfaces.

## AMQP monitoring API

### Requests response

In previuous version requests responses were all sent to : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent`

In new version :
 - All Creation/Notification/Deletion/Update requests responses are sent to : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent`
 - Extraction requests responses are sent to : `regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionResponseEvent`



