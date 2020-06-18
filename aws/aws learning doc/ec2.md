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

