- Amazon EMR is a web service that enables businesses, researchers, data analysts, and developers to easily and cost-effectively process vast amounts of data. 
- EMR utilizes a hosted Hadoop framework running on Amazon EC2 and Amazon S3.

- A multi-site solution runs on AWS as well as on your existing on-site infrastructure in an active- active configuration. The data replication method that you employ will be determined by the recovery point that you choose. This is either Recovery Time Objective (the maximum allowable downtime before degraded operations are restored) or Recovery Point Objective (the maximum allowable time window whereby you will accept the loss of transactions during the DR process).

- The term warm standby is used to describe a DR scenario in which a scaled-down version of a fully functional environment is always running in the cloud. A warm standby solution extends the pilot light elements and preparation. It further decreases the recovery time because some services are always running. By identifying your business-critical systems, you can fully duplicate these systems on AWS and have them always on.

-In this DR approach, you simply replicate part of your IT structure for a limited set of core services so that the AWS cloud environment seamlessly takes over in the event of a disaster. A small part of your infrastructure is always running simultaneously syncing mutable data (as databases or documents), while other parts of your infrastructure are switched off and used only during testing. Unlike a backup and recovery approach, you must ensure that your most critical core elements are already configured and running in AWS (the pilot light). When the time comes for recovery, you can rapidly provision a full-scale production environment around the critical core.

- DMS is used for smaller, simpler conversions and also supports MongoDB and DynamoDB.
- SCT is used for larger, more complex datasets like data warehouses.
- DMS has replication functions for on-premise to AWS or to Snowball or S3.


Canary: Traffic is shifted in two increments. You can choose from predefined canary options that specify the percentage of traffic shifted to your updated Lambda function version in the first increment and the interval, in minutes, before the remaining traffic is shifted in the second increment.

Linear: Traffic is shifted in equal increments with an equal number of minutes between each increment. You can choose from predefined linear options that specify the percentage of traffic shifted in each increment and the number of minutes between each increment.

All-at-once: All traffic is shifted from the original Lambda function to the updated Lambda function version at once.

Blue/Green is incorrect because this is not a valid predefined deployment type configuration for an AWS Lambda Compute Platform. You can only choose between Canary, Linear, and All-at-once deployment configuration types to specify how the incoming traffic will be shifted from your original AWS Lambda function version to your new AWS Lambda function version.

Linear is incorrect because this type of deployment shifts the traffic in equal increments with an equal number of minutes between each increment. You can't specify the percentage of traffic shifted to your updated Lambda function version before the remaining traffic is shifted in the second increment, unlike Canary.

All-at-once is incorrect because there are no increments for this type of deployment. All traffic is shifted from the original Lambda function to the updated Lambda function version at once.
