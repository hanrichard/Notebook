### waf - sql injection - layer 7

### nacl - block ip or arrnage ips - layer 4

- 1234 - nacl - alb (alb security group - terminate here)- ecs (security group)
- 1233 - waf - alb
- 1234 - nacl - nlb - ec2

### kms - regional key management  - encypt and decrypt upto 4 kb
- ideal for s3, database password, api keys
- cmk - customer master key 

- dek - data encryption ket: envlop key 

- symmetric 
  - same key used for encyption and decyption
  - aes-256
  - never leaves aws
  - generate data keys, data key pairs, and random byte sring
  - import your own key marterial
  
  


- asymmetric 
 - mathematically public/private key pair
 - rsa and ess
 - private key never leaves aws
 - must call the kms api to use private key
 - download the public key and use outside aws
 - aws services intergrated with kms do not support asymmetric cmks
 
 

### cloudHSM
- dedicated hardware security module
- fips 140-2 level3
- level 2 is kms 
- no access to the aws-managed component
- runs within a vpc in your account
- single tenant, dedicated hardware, multi-az cluster
- PKCS#11, JAVA cryptiograhp extension - jce - microsoft cryptoNG - cng
- keep key safe, irrectrievable if lost

### parameter store - component of aws system manager - ssm - 15 deep
- security serverless 
  - password, database connection string, license codes, api keys
  - values can be stored encrypted or plaintext
  - track version
  - set ttl to expire values - password



