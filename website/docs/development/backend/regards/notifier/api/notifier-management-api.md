
## Notification management

### How to retry notifications that have failed

To retry notifications that have failed, you just need to send a new AMQP event with the same `regards.request.id` header. This is a retry method, so event if you fix whatever problem the notification could have contained, by modifying its content, it will be taken into account.
