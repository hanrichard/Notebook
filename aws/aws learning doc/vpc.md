
- think vpc a datacenters in aws
- consist virtual gateway, route table, network access control list, subnets, securty group
- 1 subnet = 1 az
- security group = stateful
- network access conlist = stateless


### vpc gateway
- one per vpc
- security groups can't span vpcs


### nat instance
- it is a ec2 instance
- when creating a NAT instance, disable source/destination check on the instance
- NAT instance must be in a public subnet
- must be a route out of the private subnet to the NAT instance -  to work
- increase instance size
- behind a security group


### nat gateway
- redundant inside the AZ, one in one AZ
- starts at 5Gps and scale to 45Gps
- no need to patch
- not associate with secutiy group
- auto get a public ip
- update route table


### nacl
- it goes before security group
- auto comes with default NACL, and allow all inbound/outbound traffic
- custom NACL, but denies all inbound/outbound
- subnet goes with default NACL if not defined
- block ips by NACL, not security group
- NACL can have multi sub


### custom vpc vs elb
- at least TWO public subnet

### vpc flow logs
- vpc
- subnet
- network interface level

- can not change configuration, for example, can not associate a different IAM role with flow log
- not all IP traffic is monitored


### bastion:
- to securely administer EC2 instance(using ssh/rdp)
- not use nat gateway as bastion

### direct connect:
- connects your data center to aws
- high throughout workloads (lots of traffic)
- need stable and reliable secure connection


### global accelerator
- improve global and local performance
- two static ip
- control traffic dial

### vpc end points
- interface end point
- gateway end point: s3 and dynamodb


