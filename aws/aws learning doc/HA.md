### ELB
- application load - load balance of http/https, operate at layer 7 - request level - path base host base, query string - support lambda, container ip address as targets - good for application -  alb attach waf - web application firewall

- network load - fix ip - TCP traffic, operate at layer 4 - extreme performance TLC - connection level - support udp static ip - offloading - video game

- classic load - x-forwad and sticky session - 504 timeout error - web server or database error - layer 4 and 7 - old generation not recommond

- x-forward for  -> pass user ip address -> ec2

- instance monitered by ELB are reported as inservice or outofservice
- health checks check the instance health by talking to them
- load balancer have their DNS name, no ip address


- elb has public ips
- need one public ip each az when elb defines

- access log disable by default
- cloud trail - catch api calls
- stored in s3

!!! at least in TWO As
!!! can not go cross regions, create one per region
!!! EBS volumes are AZ specific but snapshots are region specific.

### advanced
- sticky session: if all goes to one ec2, disable sticky session - attach to alb or clb
  - sticky to same ec2 instance, can be useful if you are storing information locally to that instance
- cross zone load balancing: evenly balance
  - enables your load balance accross multiple AZ
- path patterns: 
  - www.url.com - one zone
  - www.url.com/images - other zone
  
### auto scaling
- scaling options: 
    - maintain current instance levels at all time, 
    - scale manually, 
    - based on a schedule, 
    - on demand, 
    - predictive scaling
- !!! region services
- !!! can span with in azs widthin same aws region
- !!! elb must in the same region
- !!! can change once it's defined - clone or create a new one  - manually update


### HA
- use multiple az's and multiple regions 
- multi az for recover, read replicas for RDS, perfomnace
- scale out - number
- scale up, increase size

### cloudformation
- a way of completely scripting your cloud env

### elastic beanstalk


## note:
- target tracking policy -  maintain 70% cpu
- simple - erratic 
- launch first and termate
- ec2 status heath check
- when launch configuration is created by console - basic mornitoring is enable by defatul
- when launch configuration is created by cli - detail mornitoring is enable by defatul


- This scaling policy adds or removes capacity as required to keep the metric at, or close to, the specified target value.

- The simple scaling policy makes scaling adjustments when metrics are reached but it’s not used for maintaining a specific target value.

- The step scaling policy , new verson of simple scale and allow you to create steps


### cloudformation:
- infrastuctre

### elstic beanstalk is more on deploying applications on ec2
- allow full control of underlying resouces - ssh
- data stores in s3

### ha bastions
- two host in two seperate az, using nbl with static ip and health check - failover to other host - on layer 4
- one host in one az behind an auto scaling group with health checks and a fixed eip. if fails -> provision a new ec2 in a seperate az, use user data script to provision the same eip to new host - cheapest but downtime


### on premises services with aws
- database migration services - dms
- server migration service - sms
- aws application discovery service
- vm import export - migrate existing appliation to ec2
