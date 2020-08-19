
- think vpc a datacenters in aws
- consist virtual gateway, route table, network access control list, subnets, securty group
- 1 subnet = 1 az
- security group = stateful
- network access conlist = stateless
- NO transitive peering
- only one internet gateway per vpc
- security group can not span vpcs !!!

### vpc gateway
- one per vpc
- security groups can't span vpcs !!!!

### nat instance
- it is a ec2 instance
- when creating a NAT instance, disable source/destination check on the instance
- NAT instance must be in a public!!!! subnet
- must be a route out of the private subnet to the NAT instance -  to work
- increase instance size
- behind a security group


### nat gateway
- redundant inside the AZ, one in one AZ
- starts at 5Gps and scale to 45Gps
- no need to patch
- not associate with secutiy group
- auto assign a public ip - elastic ip 
- update route table !!!!


### nacl
- it goes before security group
- auto comes with default NACL, and it allows all inbound/outbound traffic !!!
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
- gateway end point: only support - s3 and dynamodb !!!

IGW is horizontally scaled, redundant and HA.
IGW performs NAT between private and public IPv4 addresses.
IGW supports IPv4 and IPv6.
IGWs must be detached before they can be deleted.
Can only attach 1 IGW to a VPC at a time.

### note:
- by default new subnets are associated with the default route table. You need to assign the new route table in order for the instances to see the route to the NAT gateway.
- An availability zone exists within a region and a VPC can span subnets attached to all AZs in the region.
- vpc are region wide
- auto assign public ipv4 address to yes
- subnet route table has a internet gateway
- instance has public and private ip
- subnet to a single az

- vpc router perfoms routing between azs within fregion
- each subnet has a router table the router uses to forward traffic within the vpc
- new subnets are alwasys associatd with default route table
- securty group - only assign permit rule - stateful


### nacl
- subnet level - permit and deny rules - stateless
- default allows all traffic
- custom nacl deny all traffic
- nacl first then security group
- gateway endpoint: s3, and dynamodb - vpc endpoint policies
- interface endpoint: api gateway,  cloudformation, cloudwatch - secury group - elastic network interface with a privagte ip


### vpn hub
- if you have multi site, each site has vpn connecton, you can have cloud hub to connect those site togeter
- hub and spoke model
- it operates over public internet

### transite gateway
- work on hub and spoke model
- allow you transitive peering bewtween thousands of vpc and data center
- work on regional basis and it can work cross regions
- accross multi aws account, by RAM resouce access manager
- direct connect and vpn connectons
- support ip multicast

### priviate link
- a service to ten, hundred, etc vpcs
- do not require vpn peer
- requires a load balancer on service VPC and ENI on custom vpc

- In a custom VPC with new subnets in each AZ, there is a route that supports communication across all subnets/AZs. Plus a default SG with an allow rule 'All traffic, all protocols, all ports, from anything using this default SG'.

- When I create a new security group, all outbound traffic is allowed by default.

### 
• Attach an Internet Gateway to your VPC.
• Ensure that your subnet’s route table points to the Internet Gateway (see below).
• Ensure that instances in your subnet have a globally unique IP address (public IPv4 address, Elastic IP address, or IPv6 address).
• Ensure that your network access control and security group rules allow the relevant traffic to flow to and from your instance.


