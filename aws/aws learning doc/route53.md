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

### simple routing
- one record with multiple ips, and return random order


### weightened
- set traffic
- health check on individual record sets
- fail will remove from route 53 list and until pass the health check


### latency
- choose the latency


### failover
- active 
- passive

### geolocation

### geoproximity
- route 53 traffic flow

### multivalue answer
