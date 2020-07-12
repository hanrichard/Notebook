- identity-based policy - attached to an IAM identity (user, group of users, role)
- resouseces-based policy- grant permission to the principal (account, user, role)

### cognito
- user pools - user directories that provide signup and signin options for you app users

- identity pools - grant your users access to other aws services

### aws kms
- provide a highly available key storage, management  and auditing solution 

### aws cloudhsm
- dedicated hardware security module instance

### waf & shield
- waf is integated with cloudfront and alb - rules run in all aws edge locations
- shield is a DDoS protection service runing on aws

### aws single sign on - sso
- directory service - aws-managed full mcirosoft ad runing on windows service - enterprises want hosted microsolft ad 

- ad connector - allow on premises users to log into aws service with their existing ad credentials - single sign on for on premisises employees and for adding ec2 instance to the domain

- simple ad - low scale, low cost, ad implememntion based on samba - simple user directory
