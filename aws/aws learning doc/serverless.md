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
 
