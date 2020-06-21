
- think vpc a datacenters in aws
- consist virtual gateway, route table, network access control list, subnets, securty group
- 1 subnet = 1 az
- security group = stateful
- network access conlist = stateless


### vpc gateway
- one per vpc
- security groups can't span vpcs


### nat instance
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
