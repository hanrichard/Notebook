### efs vs s3

- Amazon EFS provides high-performance, secure access for thousands of connections to a shared file system using a traditional file permissions model, file locking, and hierarchical directory structure via the NFSv4 protocol.
It allows you to simultaneously share files between multiple Amazon EC2 instances across multiple AZs, regions, VPCs, and accounts as well as on-premises servers via AWS Direct Connect or AWS VPN.
This is ideal for your business applications that need to share a common data source. For application workloads with many instances accessing the same set of files, Amazon EFS provides strong data consistency helping to ensure that any file read will reflect the last write of the file.

- Amazon S3 does not support a hierarchical structure. Though you can create folders within buckets, these are actually just pointers to groups of objects. The structure is flat in Amazon S3. Also, the consistency model of Amazon S3 is read-after-write for PUTS of new objects, but only eventual consistency for overwrite PUTS and DELETES. This does not support the requirement for strong consistency.

### file gate way vs volume gateway vs tape gateway
- The File Gateway enables you to store and retrieve objects in Amazon S3 using file protocols such as Network File System (NFS) and Server Message Block (SMB). Objects written through File Gateway can be directly accessed in S3.

- The Volume Gateway provides block storage to your on-premises applications using iSCSI connectivity. Data on the volumes is stored in Amazon S3 and you can take point in time copies of volumes which are stored in AWS as Amazon EBS snapshots. You can also take copies of volumes and manage their retention using AWS Backup. You can restore EBS snapshots to a Volume Gateway volume or an EBS volume.

- The Tape Gateway provides your backup application with an iSCSI virtual tape library (VTL) interface, consisting of a virtual media changer, virtual tape drives, and virtual tapes. Virtual tapes are stored in Amazon S3 and can be archived to Amazon S3 Glacier or Amazon S3 Glacier Deep Archive.

### AWS DataSync vs File Gateway
- Use AWS DataSync to migrate existing data to Amazon S3, and then use the File Gateway configuration of AWS Storage Gateway to retain access to the migrated data and for ongoing updates from your on-premises file-based applications.

- You can use a combination of DataSync and File Gateway to minimize your on-premises infrastructure while seamlessly connecting on-premises applications to your cloud storage. AWS DataSync enables you to automate and accelerate online data transfers to AWS storage services. File Gateway then provides your on-premises applications with low latency access to the migrated data.  
