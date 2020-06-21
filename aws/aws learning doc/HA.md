### elb
- application load - load balance of http/https, operate at layer 7

- network load - fix ip - tcp traffic, operate at layer 4 - extreme performance

- classic load - x-forwad and sticky session - 504 timeout error - web server or database error

- x-forward for  -> pass user ip address -> ec2

- instance monitered by ELB are reported as inservice or outofservice
- health checks check the instance health by talking to them
- load balancer have their DNS name, no ip address
