### sqs
- !!!decouple!!! the components of an application, so they can run independantly, easing message management between components
- 256k message

- standard queues
- fifo queues - 300 transaction per second

- sqs is pulled base, not push
- kept from 1 min - 14 days, default day is 4 day
- visiblity timeout period may deliver twice
- visiblity timeout max is 12hrs
- sqs guarantees will be processed at least once
- long poll timeout

### swf - simple work flow service - manual 
- combine digial and human action
- swf vs sqs: 
  - retenion period upto 14 days - offer a message-oriented api - you need to hanle duplicated message and may need to ensure message is proceed only once - you need to implement your own appication-level tracking
  - workflow execution can last up 1 year - presents a task-orented api - only once, never duplicated - keeps tracking tasks and events

- workflow starter

- decider - decide to do what next

- activity workers - carry out the activity tasks
