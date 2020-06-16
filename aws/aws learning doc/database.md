### features
- multi AZs: for diaster recover
- read replicas: for performance - 5 copies - !!! performance

+ oltp: online transition processing - one row
+ olap: online analysis processing - complex

### redshift: data warehouse - olap - analys


### elastic cache - in memory cache - speed up existing !!! performance 
- memcached - simple
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
- evential consistency - best read performance - one second
- strong consistency

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
- start 10gb, and increment 10gb, up to 64tb
- compute can upto 32vcpus and 244 of memory
- 2 copies in each AZ, and avaiable in 3 AZ, total 6

- number of copies: aurora replaca - 15 vs mysql - 5 
- replica location: aurora in one region vs mysql cross region

backup:
- snapshot, automate, shared to different aws account

use cases
- infrequent, intermittent, unpredictable workload, simple and cost-effective


###  Elasticache
redis: mulit AZ
can backup reids and restore of redis

### iops: Input/Output Operations Per Second
