### difference
- Amazon DynamoDB 
	Hosted, scalable database service by Amazon with the data stored in Amazons cloud


- MongoDB
  One of the most popular document stores available both as a fully managed cloud service and for deployment on self-managed infrastructure


### What is DynamoDB?
DynamoDB is a proprietary NoSQL database service built by Amazon and offered as part of the Amazon Web Services (AWS) portfolio.

The name comes from Dynamo, a highly available key-value store developed in response to holiday outages on the Amazon e-commerce platform in 2004. Initially, however, few teams within Amazon adopted Dynamo due to its high operational complexity and the trade-offs that needed to be made between performance, reliability, query flexibility, and data consistency.

Around the same time, Amazon found that its developers enjoyed using SimpleDB, its primary NoSQL database service at the time which allowed users to offload database administration work. But SimpleDB, which is no longer being updated by Amazon, had severe limitations when it came to scale; its strict storage limitation of 10 GB and the limited number of operations it could support per second made it only viable for small workloads.

DynamoDB, which was launched as a database service on AWS in 2012, was built to address the limitations of both SimpleDB and Dynamo.

### What is MongoDB?
MongoDB is an open, non-tabular database built by MongoDB, Inc. The company was established in 2007 by former executives and engineers from DoubleClick, which Google acquired and now uses as the backbone of its advertising products. The founders originally focused on building a platform as a service using entirely open source components, but when they struggled to find an existing database that could meet their requirements for building a service in the cloud, they began work on their own database system. After realizing the potential of the database software on its own, the team shifted their focus to what is now MongoDB. The company released MongoDB in 2009.

MongoDB was designed to create a technology foundation that enables development teams through:

The document data model – presenting them the best way to work with data.

A distributed systems design – allowing them to intelligently put data where they want it.

A unified experience that gives them the freedom to run anywhere – allowing them to future-proof their work and eliminate vendor lock-in.

MongoDB stores data in flexible, JSON-like records called documents, meaning fields can vary from document to document and data structure can be changed over time. This model maps to objects in application code, making data easy to work with for developers. Related information is typically stored together for fast query access through the MongoDB query language. MongoDB uses dynamic schemas, allowing users to create records without first defining the structure, such as the fields or the types of their values. Users can change the structure of documents simply by adding new fields or deleting existing ones. This flexible data model makes it easy for developers to represent hierarchical relationships and other more complex structures. Documents in a collection need not have an identical set of fields and denormalization of data is common.

In summer of 2016, MongoDB Atlas, the MongoDB fully managed cloud database service, was announced. Atlas offers genuine MongoDB under the hood, allowing users to offload operational tasks and featuring built-in best practices for running the database with all the power and freedom developers are used to with MongoDB.
