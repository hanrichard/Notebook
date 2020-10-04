- load balancer  - dns not ips
- EMR - Big data processing
- s3 -> sns, sqs, lambda
- hdd - infrequent vs Throughput Optimized HDD frequent
- ssd - most work, database, big data and data warehouse, file server
- default nacl - allow inbound and outbound
- custom nacl - deny inbound and outbound
- elb - at least 2 public !!! subnets
- vpc endpoint interface: connect ec2 with eni + priviate ip
- managent event/data event
- cloudwatch: agent install memory usage and disk size
- aurora dynamdb :fully managed nosql
- ebs root vol snapshot - stop before sanpshot - root delete when ternation
- efs - nfs v4 protocol
- file gateway - let s3 as local file system, nfs smb

- Elastic Map Reduce for Big Data Processing OpsWorks
- Orchestration Service that uses Chef
- Look for the term chef, recipes, cookbook and think OpsWorks EBS Backed vs Instance Store

- Amazon EMR is a web service that enables businesses, researchers, data analysts, and developers to easily and cost-effectively process vast amounts of data. 
- EMR utilizes a hosted Hadoop framework running on Amazon EC2 and Amazon S3.

- A multi-site solution runs on AWS as well as on your existing on-site infrastructure in an active- active configuration. The data replication method that you employ will be determined by the recovery point that you choose. This is either Recovery Time Objective (the maximum allowable downtime before degraded operations are restored) or Recovery Point Objective (the maximum allowable time window whereby you will accept the loss of transactions during the DR process).

- The term warm standby is used to describe a DR scenario in which a scaled-down version of a fully functional environment is always running in the cloud. A warm standby solution extends the pilot light elements and preparation. It further decreases the recovery time because some services are always running. By identifying your business-critical systems, you can fully duplicate these systems on AWS and have them always on.

-In this DR approach, you simply replicate part of your IT structure for a limited set of core services so that the AWS cloud environment seamlessly takes over in the event of a disaster. A small part of your infrastructure is always running simultaneously syncing mutable data (as databases or documents), while other parts of your infrastructure are switched off and used only during testing. Unlike a backup and recovery approach, you must ensure that your most critical core elements are already configured and running in AWS (the pilot light). When the time comes for recovery, you can rapidly provision a full-scale production environment around the critical core.

- DMS is used for smaller, simpler conversions and also supports MongoDB and DynamoDB.
- SCT is used for larger, more complex datasets like data warehouses.
- DMS has replication functions for on-premise to AWS or to Snowball or S3.


Canary: Traffic is shifted in two increments. You can choose from predefined canary options that specify the percentage of traffic shifted to your updated Lambda function version in the first increment and the interval, in minutes, before the remaining traffic is shifted in the second increment.

Linear: Traffic is shifted in equal increments with an equal number of minutes between each increment. You can choose from predefined linear options that specify the percentage of traffic shifted in each increment and the number of minutes between each increment.

All-at-once: All traffic is shifted from the original Lambda function to the updated Lambda function version at once.

Blue/Green is incorrect because this is not a valid predefined deployment type configuration for an AWS Lambda Compute Platform. You can only choose between Canary, Linear, and All-at-once deployment configuration types to specify how the incoming traffic will be shifted from your original AWS Lambda function version to your new AWS Lambda function version.

Linear is incorrect because this type of deployment shifts the traffic in equal increments with an equal number of minutes between each increment. You can't specify the percentage of traffic shifted to your updated Lambda function version before the remaining traffic is shifted in the second increment, unlike Canary.

All-at-once is incorrect because there are no increments for this type of deployment. All traffic is shifted from the original Lambda function to the updated Lambda function version at once.

- The option that says: Store the database credentials, API keys, and other secrets to Systems Manager Parameter Store each with a SecureString data type. The credentials are automatically rotated by default is incorrect because Systems Manager Parameter Store doesn't rotate its parameters by default.

- API Gateway + Lambda, CloudFront + ALB + ASG, CloudFront + S3, ALB + ASG with Multi-AZ (which is always the case except for HPC when it's single AZ and Cluster placement), KMS is often the preferred encryption method, Apply the principle of least privilege access, RDS Read Replicas to offload workload to the primary DB/reduce read latency, any service fully managed by AWS is usually the one to use.

- data sync - connect to NAS storage system - sync into s3, efc, fsx

- Run Command is designed to support a wide range of enterprise scenarios including installing software, running ad hoc scripts or Microsoft PowerShell commands, configuring Windows Update settings, and more.

- Run Command can be used to implement configuration changes across Windows instances on a consistent yet ad hoc basis and is accessible from the AWS Management Console, the AWS Command Line Interface (CLI), the AWS Tools for Windows PowerShell, and the AWS SDKs.

- Performing in-place queries on a data lake allows you to run sophisticated analytics queries directly on the data in S3 without having to load it into a data warehouse.

- You can use both Athena and Redshift Spectrum against the same data assets. You would typically use Athena for ad hoc data discovery and SQL querying, and then use Redshift Spectrum for more complex queries and scenarios where a large number of data lake users want to run concurrent BI and reporting workloads.

- “Amazon OpsWorks” is incorrect as this service is used for configuration management of systems using Chef or Puppet.
- Amazon FSx for Lustre provides a high-performance file system optimized for fast processing of workloads such as machine learning, high performance computing (HPC), video processing, financial modeling, and electronic design automation (EDA). Amazon FSx works natively with Amazon S3, letting you transparently access your S3 objects as files on Amazon FSx to run analyses for hours to months.

- A Read Replica of an Amazon RDS encrypted instance is also encrypted using the same key as the master instance when both are in the same Region. When in different Regions, a different key can be used.

- Does it have an EIP or public IP address?

- Is the route table properly configured?

- Elastic Fabric Adapter (EFA) are not supported on Windows instances.

- RedShift uses EC2 instances as well, so you need to choose your instance type/size for scaling compute vertically, but you can also scale horizontally by adding more nodes to the cluster.

- An !!!authentication token!!!! is a unique string of characters that Amazon RDS generates on request. Authentication tokens are generated using AWS Signature Version 4. Each token has a lifetime of 15 minutes. You don't need to store user credentials in the database, because authentication is managed externally using IAM. You can also still use standard database authentication.


- The option that says: Use AWS Transit Gateway to route all access in S3 and DynamoDB to a public endpoint is incorrect because a Transit Gateway simply connects your VPC and on-premises networks through a central hub. It acts as a cloud router that allows you to integrate multiple networks.

The option that says: Use AWS Direct Connect to route all access to S3 and DynamoDB via private endpoints is incorrect because AWS Direct Connect is primarily used to establish a dedicated network connection from your premises to AWS. The scenario didn't say that the company is using its on-premises server or has a hybrid cloud architecture.

The option that says: Use AWS VPN CloudHub to route all access in S3 and DynamoDB to a private endpoint is incorrect because AWS VPN CloudHub is mainly used to provide secure communication between remote sites and not for creating a private endpoint to access Amazon S3 and DynamoDB within the Amazon network.


- Amazon DynamoDB global tables provide a fully managed solution for deploying a multi-region, multi-master database. This is the only solution presented that provides an active-active configuration where reads and writes can take place in multiple regions with full bi-directional synchronization.
