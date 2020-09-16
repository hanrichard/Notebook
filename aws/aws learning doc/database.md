### features

- auto scale: reboot required, downtime
- multi AZs: for diaster recover
- read replicas: for performance - 5 copies - !!! performance

+ oltp: online transition processing - one row - !!! transition
+ olap: online analysis processing - complex

### redshift: data warehouse - olap - analys - only ONE zone!!!!

### elastic cache - in memory cache - speed up existing !!! performance  -  good for OLAP
- memcached - simple - scale horizontally
- redis

- rds runs on virtual machine, you can not log into, amzon will patch
- rds is not serverless
- aurora is serverlss

### backups
- automated backup: 1 - 35 days
- database snapshort backup - manually

- whenever restore, the stored version will be a new rds instance with a new endpoint

### mulit az
- fallover, it will automatically connect 

- read replica has each own endpoints - BACKUP TURN ON

- encryption: kms: key management service

### dynamdb
- ssd
- spread three geographic distint data center
- evential consistency - best read performance - one second -  by defaukt
- strong consistency
- multi az - cross region relipca options
- data sync in 3 az in one region
-  3 copies in 3 region

### redshift
- single node - 160gb
- multi node
  - leader node: manage client and receive query
  - computing node: store data and query and communication , 128 nodes

- massive parallel processing: mpp

- 1- 35 day backup
- 3 backups, the orginal, replica on compute node, s3 

securty
- ssl transfer
- aes-256 encryption

currently avaiable in ONE zone

can async to replicate your snapshot to s3 in another region for disaster recover


### aurora
- can span mulit regions - aurora global database
- start 10gb, and increment 10gb, up to 64tb
- compute can upto 32vcpus and 244G of memory
- 2 copies in each AZ, and avaiable in 3 AZ, total 6 !!!
- good for infrequent database usage/new project
- 2 copies in each AZ, and avaiable in 3 AZ, total 6 !!!

- number of copies: aurora read replaca - 15 vs mysql - 5 
- replica location: aurora in ONE region vs mysql CROSS region
- aurora global database - can span regions

backup:
- snapshot, automate, shared to different aws account

use cases
- infrequent, intermittent, unpredictable workload, simple and cost-effective


###  Elasticache
redis: mulit AZ
can backup reids and restore of redis

### iops: Input/Output Operations Per Second


### note:
- encryption uses AWS KMS
- scale UP - computing and storage
- changing instance type - cause downtime
- rds - ebs volums for db and log storage
- multi az: span 2 AZs in one region
- aws recommond proiosn iops for multi az

-- mulit az:  sync - DR
-- read replic: asyc - ready only DR -  not for ms sql

- read replica -use  async replication


### redshilf - 3 copy - orignal, node, s3 
- retention 1 day upto 35 days



- AURORA serviceless: mysql and postsql compatible
- auto starts, down, up 

- Amazon Aurora Multi-Master adds the ability to scale out write performance across multiple Availability Zones and provides configurable read after write consistency.
- Aurora Global Database spans multiple regions for disaster recovery.
- Aurora Cross-Region Replicase scale read operations across regions.
- RDS Multi-AZ does provide automatic failover to a secondary database.

- serverless - used for simple, cost effective option for infrequenet, unpredictable workloads

### dax
- fully managed, high a, in memeory cache
- on demand
- pronvision capacity

### pitr - point in time recovery 
- incremental backup
- not enable by default
- last restore - 5 mins

### stream - shard - 24 hrs

### global tables - multi region replication
- globally distributed applicaiton
- based on dydb stream
- multi-region redundancy - dr and ha
- no write


### security
- encryption at rest using kms
- site to site vpn
- direct connect dx
- iam policy and roles
- vpc endpoints

### dms
- pre-create the target tables mannually
- aws schema convension tool -sct - do not need if same 

### caching capability
- cloudfront
- api gateway
- elastiche - memcached and redis
- dynamodb 

### emr - big data - achieve data to s3 every 5 min - first setup cluster
- data stores in maste node

### database mirgation
- homogeneous - oracle to oracle
- heterogeneous - oracle to aurora
- schema coversion tool 
- coninueuously replicated

### server migration services - sms
- agentless service
- aws server migration service connector installed on the source platform
- saved as ami and launched as ec2 instance

### data sync
- software agent connects to on-premises nas storage systems
- the nas uses nfs or smb protocal
- destination - s3, efs, fsx for windows file server


### summary
- RedShift nodes run on EC2 instances, so for infrequent queries this will not minimize infrastructure costs.
- Amazon DynamoDB is integrated with AWS Lambda so that you can create triggers—pieces of code that automatically respond to events in DynamoDB Streams.
- If you enable DynamoDB Streams on a table, you can associate the stream ARN with a Lambda function that you write.
- For items larger than 4KB, DynamoDB consumes additional read capacity units.
- When a request is throttled it fails with an HTTP 400 code (Bad Request) and a ProvisionedThroughputExceeded exception.
- DynamoDB can throttle requests that exceed the provisioned throughput for a table.
- DynamoDB can also throttle read requests for an Index to prevent your application from consuming too many capacity units.


### test:
- Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance, improvement from milliseconds to microseconds – even at millions of requests per second. You can enable DAX for a DynamoDB database with a few clicks.

- A Read Replica of an Amazon RDS encrypted instance is also encrypted using the same key as the master instance when both are in the same Region. When in different Regions, a different key can be used.

- INCORRECT: “Vertical scaling for read and write by using Transfer Acceleration” is incorrect. Transfer Acceleration is a feature of S3 for fast uploads of objects.

- You can create a read replica as a Multi-AZ DB instance. Amazon RDS creates a standby of your replica in another Availability Zone for failover support for the replica. Creating your read replica as a Multi-AZ DB instance is independent of whether the source database is a Multi-AZ DB instance.

- The requests will be throttled, and fail with an HTTP 400 code (Bad Request) and a ProvisionedThroughputExceededException

- Maintenance windows are configured to allow DB instance modifications to take place such as scaling and software patching. Some operations require the DB instance to be taken offline briefly and this includes security patching

- Amazon Aurora Global Database is designed for globally distributed applications, allowing a single Amazon Aurora database to span multiple AWS regions. It replicates your data with no impact on database performance, enables fast local reads with low latency in each region, and provides disaster recovery from region-wide outages.

- INCORRECT: “Enable Multi-AZ for the Aurora DB” is incorrect. Enabling Multi-AZ for the Aurora DB would provide AZ-level resiliency within the region not across regions.

- INCORRECT: “Asynchronous replication” is incorrect. Asynchronous replication is used by RDS for Read Replicas.

- Multi-AZ RDS creates a replica in another AZ and synchronously replicates to it (DR only). Multi-AZ deployments for the MySQL, MariaDB, Oracle and PostgreSQL engines utilize synchronous physical replication. Multi-AZ deployments for the SQL Server engine use synchronous logical replication (SQL Server-native Mirroring technology).

- Using Amazon Redshift Spectrum, you can efficiently query and retrieve structured and semistructured data from files in Amazon S3 without having to load the data into Amazon Redshift tables. Redshift Spectrum queries employ massive parallelism to execute very fast against large datasets.

- Amazon ElastiCache with the Memcached engine is an in-memory database that can be used as a database caching layer. The memached engine supports multiple cores and threads and large nodes.

- INCORRECT: “Deploy MySQL instances in each Region. Deploy an Application Load Balancer in front of MySQL to reduce the load on the primary instance” is incorrect as you can only put ALBs in front of the web tier, not the DB tier.


- The requests will be throttled, and fail with an HTTP 400 code (Bad Request) and a ProvisionedThroughputExceededException

- Multi-AZ RDS creates a replica in another AZ and !!!! synchronously replicates to it (DR only). Multi-AZ deployments for the MySQL, MariaDB, Oracle and PostgreSQL engines utilize synchronous physical replication. Multi-AZ deployments for the SQL Server engine use synchronous logical replication (SQL Server-native Mirroring technology).

- An authentication token is a unique string of characters that Amazon RDS generates on request. Authentication tokens are generated using AWS Signature Version 4. Each token has a lifetime of 15 minutes. You don't need to store user credentials in the database, because authentication is managed externally using IAM. You can also still use standard database authentication.

- ElastiCache improves the performance of your database through caching query results.
