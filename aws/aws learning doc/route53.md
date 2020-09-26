### canonical name 权威的

- cname can not be http://test.com, must be A name or alias
- EBS: never have ipv4 address, but using dns name

- In active-active failover, all the records that have the same name, the same type (such as A or AAAA), and the same routing policy (such as weighted or latency) are active unless Route 53 considers them unhealthy. Route 53 can respond to a DNS query using any healthy record.

- Use an active-passive failover configuration when you want a primary resource or group of resources to be available the majority of the time and you want a secondary resource or group of resources to be on standby in case all the primary resources become unavailable.

### normally use alias record over cname

- SOA
- NS records
- A record
- CNAMES
- MX records - mail
- PTR record: opposite of A record

### alias records: 
it maps resource record sets in your hosted zone to EBS, cloudfront, s3 that are configured as website


### simple routing
- one record with multiple ips, and return random order -  no health check !!!


### weightened
- set traffic
- health check on individual record sets
- fail will remove from route 53 list and until pass the health check


### latency
- choose the latency


### failover
- active 
- passive
- for health check 
- elb

### geolocation

### geoproximity
- route 53 traffic flow

### multivalue answer

note:
- alongside all edge locations
- a host zone is a collection of records
- two type of zones
  - public zone - determines how internet traffic is routed on the internet
  - private zone - determins how internet traffic is routed in the vpc - vpc to true
  
- health check
  - endpoint
  - status of health check
  - status of cloud watch alarm
  
  
- cname to another domain name - not ip address
- cname CAN NOT do apex - awzon.com, alia CAN
- alias record can only point to s3 bucket as a static website, cloudfront distribution in the same host zone
- An A record simply points a name to an IP address.

### glocal acc
- improve performance of tcp/udp traffic
- two static ips in two networks zone
- multi edge locations
- targets can be ec2 or elb - alb or nlb

- You can use Route 53 to check the health of your resources and only return healthy resources in response to DNS queries. There are three types of DNS failover configurations:

- Active-passive: Route 53 actively returns a primary resource. In case of failure, Route 53 returns the backup resource. Configured using a failover policy.
- Active-active: Route 53 actively returns more than one resource. In case of failure, Route 53 fails back to the healthy resource. Configured using any routing policy besides failover.
- Combination: Multiple routing policies (such as latency-based, weighted, etc.) are combined into a tree to configure more complex DNS failover.

Alias records are used to map resource record sets in your hosted zone to Amazon Elastic Load Balancing load balancers, API Gateway custom regional APIs and edge-optimized APIs, CloudFront Distributions, AWS Elastic Beanstalk environments, Amazon S3 buckets that are configured as website endpoints, Amazon VPC interface endpoints, and to other records in the same Hosted Zone.

- INCORRECT: Use CloudTrail to capture all API calls made to the ALB"" is incorrect. CloudTrail captures API activity and would not include the requested information.


- Alias records are used to map resource record sets in your hosted zone to Amazon Elastic Load Balancing load balancers, API Gateway custom regional APIs and edge-optimized APIs, CloudFront Distributions, AWS Elastic Beanstalk environments, Amazon S3 buckets that are configured as website endpoints, Amazon VPC interface endpoints, and to other records in the same Hosted Zone.
