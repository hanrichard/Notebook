### ec2: elastic computing cloud

provisonal: 供应
thoughtout: 思虑周到的；经过仔细考虑的


- termination protecton: off by default
- root will be detelet if terminate
- root can be encrypted 
- additional volumn can be encrypted


### security group
- all inbound traffic is block by default, you can add rules
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


### ENI VS ENA VS EFA
- elastic network interface: basic networking- virtual network card -> low budget, HA solution -> multiple ENI for each network
- enhanced networking - high performance, lower cpu -> when you need 10gb/s to 100gb/s, reliable and high throughtput
- elastic fabric adapter - accelerate high performance computing (HPC), marchine learning - not support winodws, linux only || OS by-pass

- use case: choose ENA over VF, virtual function

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
- server message block: SMB - based file service
- designed for windows/ windows application

- amazon fsx for lustre: performance

### ec2 placement group
- cluster placement group - low network legency/high throughput - in same AZ and in same region
- spread placement group - individual critical ec2 instances - same region
- partition placement group - multiple ec2 instances - HDFs, Hbase and Cassandra - same region

- same type within group/ can not merge


### waf: web application firewall
- block : waf/Network ACLs
