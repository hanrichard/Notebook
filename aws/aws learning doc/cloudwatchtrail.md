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


### test 
- AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet. AWS OpsWorks for Chef Automate is a fully-managed configuration management service that hosts Chef Automate, a suite of automation tools from Chef for configuration management, compliance and security, and continuous deployment. OpsWorks for Chef Automate is completely compatible with tooling and cookbooks from the Chef community and automatically registers new nodes with your Chef server.

- Trails can be configured to log Data events and management events

- Data events: These events provide insight into the resource operations performed on or within a resource. These are also known as data plane operations

- Management events: Management events provide insight into management operations that are performed on resources in your AWS account. These are also known as control plane operations. Management events can also include non-API events that occur in your account

- Trusted Advisor is an online resource to help you reduce cost, increase performance, and improve security by optimizing your AWS environment. Trusted Advisor provides real time guidance to help you provision your resources following AWS best practices.

- AWS Trusted Advisor offers a Service Limits check (in the Performance category) that displays your usage and limits for some aspects of some services.


Amazon CloudTrail can be used to log activity on the reports. The key difference between the two answers that include CloudTrail is that one references data events whereas the other references management events.

Data events provide visibility into the resource operations performed on or within a resource. These are also known as data plane operations. Data events are often high-volume activities.

- Example data events include:

Amazon S3 object-level API activity (for example, GetObject, DeleteObject, and PutObject API operations).
 - AWS Lambda function execution activity (the Invoke API).
 - Management events provide visibility into management operations that are performed on resources in your AWS account. These are also known as control plane operations. 

- Example management events include:

 - Configuring security (for example, IAM AttachRolePolicy API operations)
 - Registering devices (for example, Amazon EC2 CreateDefaultVpc API operations).
Therefore, to log data about access to the S3 objects the solutions architect should log read and write data events.
