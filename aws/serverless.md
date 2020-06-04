### serverless
The Serverless Framework gives you everything you need to develop, deploy, monitor and secure serverless applications on any cloud.


- config or -c Name of your configuration file, if other than serverless.yml|.yaml|.js|.json.
- stage or -s The stage in your service that you want to deploy to.
- region or -r The region in that stage that you want to deploy to.
- package or -p path to a pre-packaged directory and skip packaging step.
- verbose or -v Shows all stack events during deployment, and display any Stack Output.
- force Forces a deployment to take place.
- function or -f Invoke deploy function (see above). Convenience shortcut - cannot be used with --package.
- conceal Hides secrets from the output (e.g. API Gateway key values).
- aws-s3-accelerate Enables S3 Transfer Acceleration making uploading artifacts much faster. You can read more about it here. It requires additional s3:PutAccelerateConfiguration permissions. Note: When using Transfer Acceleration, additional data transfer charges may apply.
- no-aws-s3-accelerate Explicitly disables S3 Transfer Acceleration. It also requires additional s3:PutAccelerateConfiguration permissions.


### sam vs serverless
- SAM is the Serverless Application Model. It’s an AWS abstraction over AWS CloudFormation that makes common serverless architectures easier to define.
- The Serverless Framework is an open-source project maintained by Serverless that not only makes it easier to define but also deploy serverless.

### commands
```
http://localhost:3000/dev/users/create
sls offline
sls deploy
```
