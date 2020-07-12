- collect and track metrics
- monitor 
  - ec2 instance
  - dynamodb instance
  - rds db instance
  - custom metrics
  - monitor operational health
  - it is accessed via API, CLI, AWS SDKs, console
  
 ### cloudtrail 
 - cloudtrail logs can be sent to cloudwatch logs 
 - api activity
 - logs api calls via
  - console
  - aws sdks
  - command line tools
  - cloudformation
  
- can be enabled per region and applied to all regions
- encypted using s3 sse

### aws config
- records poin-in-time configuration details for you aws resouces as configurion items
- what did my aws resouces look like at a point in time
