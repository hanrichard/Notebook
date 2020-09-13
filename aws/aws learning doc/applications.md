### sqs - polls - decoupled  - redshift, dynamodb, ec2, ecs, rds, s3, lambda 
- !!!decouple!!!!! the components of an application, so they can run independantly, easing message management between components
- 256k message, if bigger store in s3
- standard queues -  delivery at least once - massive scalable, using HA - receive exact order but not guaranteed to sent
- fifo queues - 300 transaction per second
- sqs is pulled base, not push
- kept from 1 min - 14 days, default day is 4 day
- visiblity timeout period may deliver twice
- visiblity timeout max is 12hrs
- sqs guarantees will be processed at least once
- long poll timeout - reduce cost
- server side encryption - sse - using aws kms

- scaling - create more queues
- store within a single HA region with multi redundant azs

### aws mq - no need to rewrite code

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

### kinesis - shads
- collect, process, analyse real-time, straming data
- 24hrs - upto 7 days
- purchas from online store
- stock price
- gaming data
- social network data
- geospatial data - uber
- iot sensor data
- scale by adding shards

- Each shard can support up to 1000 PUT records per second.
- One shard provides a capacity of 1MB/sec data input and 2MB/sec data output. This is not the amount of PUT records supported.
- Kinesis supports 1000 PUT records per second.

### types 
- kinesis streams - consist of shads - data persist - 24 hrs - upto 7 days - stores data for later processing by application
- kinesis firehose - optional lambda functon -> s3 -> redshift -- no data persist/need to something with data - delivers data directly to aws service - no shards
- kinesis analytics -  analytics on the fly / analysis inside kinesis -> s3 redshift - run sql queries


### athena 
- interactive query service to analyze data in s3 using stanardard sql
- serverless
- use aws glue to store information
- uses presto with full standard sql support

### aws glue - ETL service - data preparation for analytics - aws glue data catalog
- work with data lakes s3, data warehouse, redshift, data stores, rds and ec2 databases

### cognito
- user pool - signup/signin/register - json web token - jwts - username password, etc
- identity pools - provide temporary aws credentials to access aws service, s3 or dynamodb - granting aws credentials - to access resouces

### amazon mq:
- it is a managed implementation of apache activeMQ

### test note:
- You can use a Lambda function to process Amazon Simple Notification Service notifications. Amazon SNS supports Lambda functions as a target for messages sent to a topic. This solution decouples the Amazon EC2 application from Lambda and ensures the Lambda function is invoked.

- Amazon Kinesis makes it easy to collect, process, and analyze real-time streaming data. With Amazon Kinesis Analytics, you can run standard SQL or build entire streaming applications using SQL

- Amazon EMR is a web service that enables businesses, researchers, data analysts, and developers to easily and cost-effectively process vast amounts of data. EMR utilizes a hosted Hadoop framework running on Amazon EC2 and Amazon S3.


- Amazon Kinesis Data Analytics is the easiest way to process and analyze real-time, streaming data. Kinesis Data Analytics can use standard SQL queries to process Kinesis data streams and can ingest data from Kinesis Streams and Kinesis Firehose.



- Kinesis Data Firehose is the easiest way to load streaming data into data stores and analytics tools. Firehose Destinations include: Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk.

- Amazon Redshift is a fast, fully managed data warehouse that makes it simple and cost-effective to analyze all your data using standard SQL and existing Business Intelligence (BI) tools.

- RDS is a transactional database and is not a supported Kinesis Firehose destination.

- Amazon Kinesis Data Firehose is the easiest way to load streaming data into data stores and analytics tools. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk, enabling near real-time analytics with existing business intelligence tools and dashboards you’re already using today.
