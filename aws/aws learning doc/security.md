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

###
- AWS recommend that you use the AWS SDKs to make programmatic API calls to IAM. However, you can also use the IAM Query API to make direct calls to the IAM web service. An access key ID and secret access key must be used for authentication when using the Query API.

- The aim of this solution is to create a single sign-on solution that enables users signed in to the organization’s Active Directory service to be able to connect to AWS resources. When developing a custom identity broker you use the AWS STS service.

- The AWS Security Token Service (STS) is a web service that enables you to request temporary, limited-privilege credentials for IAM users or for users that you authenticate (federated users). The steps performed by the custom identity broker to sign users into the AWS management console are:

 - Verify that the user is authenticated by your local identity system
 - Call the AWS Security Token Service (AWS STS) AssumeRole or GetFederationToken API operations to obtain temporary security credentials for the user
 - Call the AWS federation endpoint and supply the temporary security credentials to request a sign-in token
 - Construct a URL for the console that includes the token
 - Give the URL to the user or invoke the URL on the user’s behalf

- Federation (typically Active Directory) uses SAML 2.0 for authentication and grants temporary access based on the users AD credentials. The user does not need to be a user in IAM.

- AWS customers are welcome to carry out security assessments or penetration tests against their AWS infrastructure without prior approval for 8 services. Please check the AWS link below for the latest information.

- With an identity pool, users can obtain temporary AWS credentials to access AWS services, such as Amazon S3 and DynamoDB.


- AWS customers are welcome to carry out security assessments or penetration tests against their AWS infrastructure without prior approval for 8 services. Please check the AWS link below for the latest information.

An IAM group is a collection of IAM users. Groups let you specify permissions for multiple users, which can make it easier to manage the permissions for those users.

The following facts apply to IAM Groups:

- Groups are collections of users and have policies attached to them.
- A group is not an identity and cannot be identified as a principal in an IAM policy.
- Use groups to assign permissions to users.
- IAM groups cannot be used to group EC2 instances.
- Only users and services can assume a role to take on permissions (not groups).

AWS recommend that you use the AWS SDKs to make programmatic API calls to IAM. However, you can also use the IAM Query API to make direct calls to the IAM web service. An access key ID and secret access key must be used for authentication when using the Query API.

CORRECT: "Query API" is a correct answer.
CORRECT: "Access key ID and secret access key" is also a correct answer.
INCORRECT: "OpenID Connect" is incorrect. OpenID Connect is a provider for connecting external directories.
INCORRECT: "API Gateway" is incorrect. API gateway is a separate service for accepting and processing API calls.
INCORRECT: "IAM role" is incorrect. An IAM role is not used for authentication to the Query API.


- Server-side encryption protects data at rest.
- Systems Manager Parameter Store doesn't rotate its parameters by default.
