### features
- multi AZs: for diaster recover
- read replicas: for performance - 5 copies - !!! performance

+ oltp: online transition processing - one row
+ olap: online analysis processing - complex

### redshift: data warehouse - olap - analys


### elastic cache - in memory cache - speed up existing !!! performance 
- memcached
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
