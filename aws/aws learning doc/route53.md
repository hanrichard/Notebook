### canonical name 权威的

- cname can not be http://test.com, must be A name or alias
- EBS: never have ipv4 address, but using dns name

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
- one record with multiple ips, and return random order -  no health check


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


### glocal acc
- improve performance of tcp/udp traffic
