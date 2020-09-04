### ec2: elastic computing cloud

provisonal: 供应
thoughtout: 思虑周到的；经过仔细考虑的

### resered
- no upfront, partially, all

- termination protecton: off by default
- root will be detelet if terminate
- root can be encrypted 
- additional volumn can be encrypted


### security group
- all inbound traffic is block by default!!!!, you can add rules
- all outbound traffic is allowed
- change security group effect immediately
- any number of ec2 instance into security group
- ec2 instance can have multiple scurity group
- can NOT block ip by using securty group, but can block by "network access control list"
- set allow rules, but no deny rules

- security is stateful


### ebs
- virtual hard disk on cloud

types:
- general purpse ssd: most work - 1G - 16T - 16000 iops
- provisioned iops ssd - databases - 4G - 16T - 64000 iops
- throughput optimised hhd: big data & data warehouse 500G - 16T : 500 iops
- cold hhd: file server - 500g- 16T - 250iops
- ebs magnetic: infrequenctly access- 1g - 1t 40-200 iops


### ec2 mirgration

- move to new AZ: ec2/ebs snapshot -> create AMI image -> launch/create ec2 -> choose AZ -> done 
- move to new Regin: ec2/ebs snapshot -> create AMI image -> copy AMI to new region -> launch/create ec2 -> done


- action copy and choose AZ (new region)

- snap shot exist in s3
- ebs = vitual hard disk
- snapshot are incremental -> only last change will move to s3
- good: stop instance -> take snapshot
- volumn locates same with ec2

### AMI TYPES
- ebs volumns: the root device for an instance launched from AMI is AMAZON EBS volume created from !!!AMAZON EBS snapshot!!!
- instance store volumes: the root device for an instance launched from AMI EBS volume created from a template store in !!!AMAZON S3!!!

- instance store can NOT stop, fails = lose data
- ebs: can stop, and reboot, not lose data


- template: root volumn for instance
- launch permission that control aws account can use ami to launch
- a block device mapping , volumn to attach instance

- volumn attached, either ebs or instance store


- ami are regional, you can only launch from that region. but you can copy to other region, by command, console, api

### ENI VS ENA VS EFA
- elastic network interface: basic networking- virtual network card -> low budget, HA solution -> multiple ENI for each network
- enhanced networking - high performance, lower cpu -> when you need 10gb/s to 100gb/s, reliable and high throughtput - certain instance types - high bandwich - hvm limited types
- elastic fabric adapter - accelerate high performance computing (HPC), marchine learning - not support winodws, linux only || OS by-pass. - mpi -message passing interface,  - ml machine learning, NCCL - can scale thousands of gpu and cpu - tightly coupled

- use case: choose ENA over VF, virtual function


- eni is bound to AZ, you can specify which az/subnet

### encryptions 
- snapshot -> copy snapshot and enable encyption -> create ami from snapshot -> launch ami to lauch new cryption instances
- share snapshots, only UNencryption, can share with AWS acconts or public

### cloud watch/cloud trail
- cloud watch: monitor performance 
- cloud trail: monitor api calls in the aws platform/auditing

- alarm;
- event;
- dashboards
- logs


### role attached to ec2
- safer than store access/secret key on ec2
- easy to manage
- roles can be assigned to ec2 by console or cammnd line
- roles are universal- in any region


### ec2 metadata
- get information of instance
- curl http://blllb/latest/meta-data/
- curl http://blllb/latest/user-data/ - script data

### efs: elastic file system
- support network file system version 4 - protocal - NFSv4
- only pay storage we use
- data is store in multiple az in a region
- read after write consistency

### fsx
- server message block: SMB - based file service !!!! - windows - smb vs efs - linux unix - s3
- designed for windows/ windows application

- amazon fsx for lustre: performance
- distrubted file system - can store data on s3

### ec2 placement group
- cluster placement group - low network legency/high throughput - in same AZ and in same region - single az - does not span multi azs
- spread placement group - individual critical ec2 instances - same region - can span multi az - 7 instance max
- partition placement group - multiple ec2 instances - HDFs, Hbase and Cassandra - same region - can span mult az - 

- same type within group/ can not merge


### waf: web application firewall
- block : waf/Network ACLs


### iam 
- more secure
- attach/modife anytime
- only one attach to instance
- are unvisal and can be use in any region
- system status need aws fix
- instance status need you fix

### nat gateway than nat instance
- nat instance by you - can use a bastion host - need to assign a secure group - no ha - use elastic ip or public ip
- nat gateway by aws - can not ssh - no secure group - automatic ha - choose elastic ip with when create


### ebs note
- can not attach one ebs to many - use elastic file system
- replicated accross multi servers in a az
- must be in the same az as instance they are attached to
- root ebs are deleted on termination by default
- you cannot attach an EBS volume to an instance in a different AZ.


### ebs instance - high performance - temporary storage - eg: load balanced pool
- instance store can not be stopped
- instance store volume root device are created from AMI templates stored on s3
- ebs can be stopped, detached and reattached, launched from ami that bakced by ebs snapshots

###  snap shots - migrate a system to a new az or region
- convert a unencrypted volume to a encypted volume
- stores on s3
- can access es2 api
- !!! ebs volumes are az specific but snapshots are region specific


### efs
- file storage not block storage
- multi az metadata and datastorage
- connect 1 to 1000 of ec2, from multi azs in one region
- read after write consistency 
- access control using IAM
- access to files and dir with user and group level permissions
- efs security groups act as a firewall, and the rules you add define the traffic flow
- encryptions - kms !!!!

### fsx
- fsx provides you with native compatibility of 3rd partu file system with feature of workload, as window based storage, HA, machine learning, and electronic design automation - eda

- types:
 - fsx for window file server - support for smb protocal, windows ntfs, and microsoft active directory (ad) - ssd
 - fsx for lustre for compute-intensive workload - mahine learning, high perfomace computing, video processin, financial modelling, electroic design automation
 
 
 ### file gateway
 - offers smb or nfs based access to data in s3 with local caching
 - supports s3 standard, s3 standard ia, s3 one zone IA !!!
 - file block
 
 ### volume gateway 
 - block based
 - type:
  - cached volume mode: entire file on s3, and cached on-site
  - stored volume mode: entire dataset is stored on-site, and async bakc to s3
  
 ### tape gateway
 - used for backup
 
 
 ### note:
 - encrypted using - ssl
 - encrypted server side with s3 managed encryption keys - sse-s3
 
How can you control access to files and directories in Amazon EFS filesystems?
- 1 is incorrect. IAM can be used to control who can administer the file system but not control the access to files and directories.
- 2 is incorrect. EFS security groups control network traffic that is allowed to reach the filesystem.
- 3 is incorrect. Network ACLs are not used for file and directory permissions, they restrict traffic into and out of subnets.
- 4 is correct. You can control access to files and directories with POSIX-compliant user and group-level permissions.


### ec2 hibernate - store ram into ebs - less than 60 days - on demand and reserved

### spot
- flexible application
- spot block - 1-6 hours
- not good for databases

### spot fleet
- capicty optimized
- lowest
- diversifed
- instancepoolto use count


### efa - not support windows, only linux

### hpc
- aws batch
- aws parrallcluster

### secruti group
- inbound traffic is blocked
- outbound traffic is allowed


### 
- general purpose - most workloads
- provisioned iops - database
- throughtput optimised hdd - big data and datawarehouse
- cold hdd - file server
- ebs magitic - infrequent 

### cloudwatch - performance
### cloudtrail - auditing


### each ec2 has private and public ip

### LINUX - NFS VS WINDOWS - SMB - file mode
### VOLUM GATEWAY - iscsi - block mode
### tape gateway - s3 glacier, s3 glacier deep archinve - eject and stored, s3 standard - when writing to tapes


### • Must stop the instance to create a consistent image and then create the AMI.

### ebs
- ebs backed - root volume is ebs volume
- instance backed - root volume is instance store


### note
- AWS Batch eliminates the need to operate third-party commercial or open source batch processing solutions. There is no batch software or servers to install or manage. AWS Batch manages all the infrastructure for you, avoiding the complexities of provisioning, managing, monitoring, and scaling your batch computing jobs. 

- An Interface endpoint uses AWS PrivateLink and is an elastic network interface (ENI) with a private IP address that serves as an entry point for traffic destined to a supported service. Using PrivateLink you can connect your VPC to supported AWS services, services hosted by other AWS accounts (VPC endpoint services), and supported AWS Marketplace partner services.

- The cooldown period is a configurable setting for your Auto Scaling group that helps to ensure that it doesn’t launch or terminate additional instances before the previous scaling activity takes effect so this would help. After the Auto Scaling group dynamically scales using a simple scaling policy, it waits for the cooldown period to complete before resuming scaling activities.

- You can only apply one IAM role to a Task Definition so you must create a separate Task Definition. A Task Definition is required to run Docker containers in Amazon ECS and you can specify the IAM role (Task Role) that the task should use for permissions.
 - EC2 launch type you can apply IAM roles at the container and task level
 - Fargate you can only apply at the task level
 
- The following are a few reasons why an instance might immediately terminate:
 – You’ve reached your EBS volume limit.
 – An EBS snapshot is corrupt.
 – The root EBS volume is encrypted and you do not have permissions to access the KMS key for decryption.
 – The instance store-backed AMI that you used to launch the instance is missing a required part (an image.part.xx file).
 
- AWS Step Functions orchestrates serverless workflows including coordination, state, and function chaining as well as combining long-running executions not supported within Lambda execution limits by breaking into multiple steps or by calling workers running on Amazon Elastic Compute Cloud (Amazon EC2) instances or on-premises.

- Auto Scaling Groups can be edited once created (however launch configurations cannot be edited).

Troubleshooting steps for containers include:
- Verify that the Docker daemon is running on the container instance.
- Verify that the Docker Container daemon is running on the container instance.
- Verify that the container agent is running on the container instance.
- Verify that the IAM instance profile has the necessary permissions.

- An Interface endpoint uses AWS PrivateLink and is an elastic network interface (ENI) with a private IP address that serves as an entry point for traffic destined to a supported service. Using PrivateLink you can connect your VPC to supported AWS services, services hosted by other AWS accounts (VPC endpoint services), and supported AWS Marketplace partner services.

- INCORRECT: “Add the API gateway to the subnet the EC2 instances are located in” is incorrect. You cannot add API Gateway to the subnet the EC2 instances are in, it is a public service with a public endpoint.

- Public subnets are subnets that have:
 - “Auto-assign public IPv4 address” set to “Yes”.
 - The subnet route table has an attached Internet Gateway.
 
 - Lambda tracks the number of requests, the latency per request, and the number of requests resulting in an error.
 
 - Run Command is designed to support a wide range of enterprise scenarios including installing software, running ad hoc scripts or Microsoft PowerShell commands, configuring Windows Update settings, and more.

- Run Command can be used to implement configuration changes across Windows instances on a consistent yet ad hoc basis and is accessible from the AWS Management Console, the AWS Command Line Interface (CLI), the AWS Tools for Windows PowerShell, and the AWS SDKs.

- AWS Batch eliminates the need to operate third-party commercial or open source batch processing solutions. There is no batch software or servers to install or manage. AWS Batch manages all the infrastructure for you, avoiding the complexities of provisioning, managing, monitoring, and scaling your batch computing jobs.

- AWS Batch Multi-node parallel jobs enable you to run single jobs that span multiple Amazon EC2 instances. With AWS Batch multi-node parallel jobs, you can run large-scale, tightly coupled, high performance computing applications and distributed GPU model training without the need to launch, configure, and manage Amazon EC2 resources directly.

- An AWS Batch multi-node parallel job is compatible with any framework that supports IP-based, internode communication, such as Apache MXNet, TensorFlow, Caffe2, or Message Passing Interface (MPI) !!!!.

- To specify permissions for a specific task on Amazon ECS you should use IAM Roles for Tasks. The permissions policy can be applied to tasks when creating the task definition, or by using an IAM task role override using the AWS CLI or SDKs. The taskRoleArn parameter is used to specify the policy.

-  Note you can choose min, max, or desired for a scheduled action.
