##### Notification sent by RabbitMQSender plugin

Notification format using **RabbitMQSender** plugin has been updated between version 1.4 and 1.5:
1. `element` has been renamed to `payload`
1. `action` has been moved into objet `metadata` and is now located at `$.metadata.action` instead of `$.action`
