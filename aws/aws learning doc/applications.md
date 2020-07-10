### sqs - polls - decoupled  - redshift, dynamodb, ec2, ecs, rds, s3, lambda
- !!!decouple!!! the components of an application, so they can run independantly, easing message management between components
- 256k message, if bigger store in s3

- standard queues
- fifo queues - 300 transaction per second

- sqs is pulled base, not push
- kept from 1 min - 14 days, default day is 4 day
- visiblity timeout period may deliver twice
- visiblity timeout max is 12hrs
- sqs guarantees will be processed at least once
- long poll timeout - reduce cost

### swf - simple work flow service - manual - human enabled workflow, like order fulfilment 
- combine digial and human action
- swf vs sqs: 
  - retenion period upto 14 days - offer a message-oriented api - you need to hanle duplicated message and may need to ensure message is proceed only once - you need to implement your own appication-level tracking
  - workflow execution can last up 1 year - presents a task-orented api - only once, never duplicated - keeps tracking tasks and events

- workflow starter

- decider - decide to do what next

- activity workers - carry out the activity tasks


### sns
- push notification, instantaneous, push based delivery (no polling)
- across multiple AZs
- subcriber: http, https, email, email json, sqs, application, lambda

### sns vs sqs
both message services in aws


### elastic transcoder
- media transcoder in the cloud - convet media file to different formats - pay by timne and resolution

### api gateway
- api caching - to increase performance
- low cost, scale automatically
- throttle api gateway to prevent attacks
- log results to cloudwatch
- cors enable, enforceable by browser

### kinesis
- purchas from online store
- stock price
- gaming data
- social network data
- geospatial data - uber
- iot sensor data

### types 
- kinesis streams - consist of shads - data persist - 24 hrs - upto 7 days
- kinesis firehose - optional lambda functon -> s3 -> redshift -- no data persist/need to something with data
- kinesis analytics -  analytics on the fly / analysis inside kinesis -> s3 redshift

### cognito
- user pool - signup/signin/register - json web token - jwts - username password, etc
- identity pools - provide temporary aws credentials to access aws service, s3 or dynamodb - granting aws credentials - to access resouces













