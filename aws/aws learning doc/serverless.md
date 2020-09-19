### lambda
- scales out automately, sperate
- independent, 1 event = 1 function
- serverless
- lambda triggers other func
- aws x-ray = debug
- doing things globally, backup s3 to other s3 
- rds is not serverless, aurora is serverless

### Elastic Container Service = ecs


#### lambda triggered by event
- run things in VPC - REDSHIFT, ealstic cache,  rds instance
- run non aws service - ec2 instance
- max time out is 15 mins - default is 3 sec


api gateway
- https endpoints
- cloudfront as public endpoint of api gateway

Amazon API Gatewa: source mapping specified for integrating Amazon API Gateway with Lambda?

### choose ec2
- compliance requirements 
- require broder customzation
- require gpus


### fargate instance
- remove need to provision and manage servers
- ecs and eks
- serverless container engine
- isolation and security
- each workload runs in its own kernel

### ecr
- managed docker container registry
- store, manage and deploy images
- integrated with ecs and eks
- works with on-premisese deployments
- ha
- integrated with iam

### eks
- open source software let you deploy and manage containerized applicaton at scale
- same toolset on premises and in cloud
- containers are grouped in pods
- support both ec2 and fargate
- use eks?
 - already using k8s
 - want to mirgrate to aws
 
- AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet. Chef and Puppet are automation platforms that allow you to use code to automate the configurations of your servers. OpsWorks lets you use Chef and Puppet to automate how servers are configured, deployed, and managed across your Amazon EC2 instances or on-premises compute environments. OpsWorks has three offerings - AWS Opsworks for Chef Automate, AWS OpsWorks for Puppet Enterprise, and AWS OpsWorks Stacks.

- Explanation
With Elastic Beanstalk, you can quickly deploy and manage applications in the AWS Cloud without worrying about the infrastructure that runs those applications. AWS Elastic Beanstalk reduces management complexity without restricting choice or control. You simply upload your application, and Elastic Beanstalk automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring.

- Amazon CloudFront is incorrect because this is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds. It does not provide any deployment capability for your custom applications unlike Elastic Beanstalk.

- AWS CloudFormation is incorrect because although this service provides deployment capabilities, you will still have to design a custom template that contains the required AWS resources for your application needs. Hence, this will require more time to complete instead of just directly using Elastic Beanstalk.

- AWS CodeCommit is incorrect because although you can upload your NodeJS code in AWS CloudCommit, this service is just a fully-managed source control service that hosts secure Git-based repositiories and hence, it does not provide a way to deploy or manage your applications in AWS.


- SWF is incorrect because this is a fully-managed state tracker and task coordinator service. It does not provide serverless orchestration to multiple AWS resources.

- AWS Lambda is incorrect because although Lambda is used for serverless computing, it does not provide a direct way to coordinate multiple AWS services into serverless workflows.

- AWS Batch is incorrect because this is primarily used to efficiently run hundreds of thousands of batch computing jobs in AWS.

- AWS Step Functions provides serverless orchestration for modern applications. Orchestration centrally manages a workflow by breaking it into multiple steps, adding flow logic, and tracking the inputs and outputs between the steps. As your applications execute, Step Functions maintains application state, tracking exactly which workflow step your application is in, and stores an event log of data that is passed between application components. That means that if networks fail or components hang, your application can pick up right where it left off.
