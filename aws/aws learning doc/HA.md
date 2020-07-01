### ELB
- application load - load balance of http/https, operate at layer 7 - request level - path base host base, query string - support lambda, container ip address as targets

- network load - fix ip - TCP traffic, operate at layer 4 - extreme performance TLC - connection level - support udp static ip - offloading

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

### advanced
- sticky session: if all goes to one ec2, disable sticky session
  - sticky to same ec2 instance, can be useful if you are storing information locally to that instance
- cross zone load balancing: evenly balance
  - enables your load balance accross multiple AZ
- path patterns: 
  - www.url.com - one zone
  - www.url.com/images - other zone
  
### auto scaling
- scaling options: maintain current instance levels at all time, scale manually, based on a schedule, on demand, predictive scaling


### HA
- use multiple az's and multiple regions 
- multi az for recover, read replicas for RDS, perfomnace
- scale out - number
- scale up, increase size

### cloudformation
- a way of completely scripting your cloud env

### elastic beanstalk


