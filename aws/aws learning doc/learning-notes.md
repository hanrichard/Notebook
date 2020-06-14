### role
one service can use other service, ec2 can use s3

### s3
read after write consistency
eventual consistency put and delete files
11 9s

classes:
s3 standard: million seconds
s3 ia: infrequent accessed: charge to retrieve: million seconds
s3 one zone ia: million seconds
s3 intelligent tiering: machine learnng: million seconds
glacier: configure retrive time minute - hours: 1 min - 12 hours
glacier deep: retrive 12 hours 

file size: 0-5TB

bucket: acl ( access control lists )/ bucket policy

encryption: 
ssl: Secure Sockets Layer 
tls: Transport Layer Security

sse-s3: s3 manages keys
sse-kms: s3 + customer
sse-c: customer
client side

life cycle: transition -> expire (current and previous version)

scp: service control policies

bucket share:
- use bucket policy and IAM
- bucket ACL and IAM
- cross-account IAM

### replication
- versioning enable
- delete/ delete marker not replicated 

edge location: read and write

### snowball
- 50tb
- 100tb, computing, lambda
- import and export s3

### gateway ???
- file gateway: nfs & smb - flat files
- volumn gateway: isci
  - stored volumns: entire dataset and asyc back on s3
  - cached volumns: entire dataset and frequent accessed data cache on site
- tape gateway

### athene
sql s3 as database

pii: personal identificable information

### macie
use ai to analyse pii
