
## Notification management

### How to retry notifications that failed

To retry notifications that failed, you need to send a new AMQP event with the same `regards.request.id` header.  
- If your event does not contain any body, it will retry the same event
- If you provides a body, it will be taken into account before retrying.
