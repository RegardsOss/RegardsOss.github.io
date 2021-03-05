### AMQP Feature requests

#### Feature creation request

:::note diclamer
No changes in amqp interfaces.
:::

#### Feature creation request by file reference

- Reference requests in previous version are renamed to "Extraction requests" in V1.4.0.
- New extraction requests has to be published on this exchange :
   - <b>regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionRequestEvent`</b>
- In previous version reference requests were sent to :
   - <b>regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureReferenceRequestEvent</b>

:::note diclamer
The requests body and header has not changed.
:::

#### Feature patch request

:::note diclamer
No changes in amqp interfaces.
:::

#### Feature deletion request

:::note diclamer
No changes in amqp interfaces.
:::

### AMQP monitoring API

#### Requests response

- In previuous version requests responses were all sent to : 
  - <b>regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent</b>
- In new version All Creation/Notification/Deletion/Update requests responses are sent to : 
  - <b>regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent</b>
- In new version All Extraction requests responses are sent to : 
  - <b>regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionResponseEvent</b>



