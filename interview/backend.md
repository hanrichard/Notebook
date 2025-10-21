🧠 1. Core Backend Concepts
Q1. What is the difference between monolithic and microservices architecture?
Feature	Monolithic	Microservices
Structure	All components in one codebase	Each service is independent
Deployment	Single deployment	Independent deployment
Scalability	Scale whole app	Scale individual services
Communication	In-process	Over the network (API, message queue)

✅ Example Answer:

“In a monolith, all logic is tightly coupled, which can cause scalability issues.
In microservices, each module — like user service or order service — can scale and deploy independently, improving fault isolation.”

Q2. Explain the client-server architecture.

The client sends a request (HTTP/HTTPS) to the server, which processes data and sends back a response.
This model separates presentation (frontend) from business logic (backend).

Q3. What are HTTP methods and their purposes?
Method	Use
GET	Retrieve data
POST	Create new data
PUT	Update/replace data
PATCH	Update partially
DELETE	Remove data
Q4. What are HTTP status codes?
Code	Meaning
200	OK
201	Created
400	Bad Request
401	Unauthorized
403	Forbidden
404	Not Found
500	Server Error
Q5. Explain REST API principles

REST (Representational State Transfer) uses stateless, client-server, and cacheable architecture.
Each resource is accessed via a unique URL and represented using JSON or XML.

Example:

GET /api/users
POST /api/orders

Q6. What is the difference between REST and GraphQL?
Feature	REST	GraphQL
Data Fetching	Multiple endpoints	Single endpoint
Data Size	Over-fetching / under-fetching	Exact data requested
Query Language	None	GraphQL schema
Versioning	Versioned endpoints	Versionless
⚙️ 2. Database & Storage
Q7. Difference between SQL and NoSQL databases
Type	SQL	NoSQL
Structure	Tables, rows	Documents, key-value, graph
Schema	Fixed	Flexible
Scalability	Vertical	Horizontal
Example	MySQL, PostgreSQL	MongoDB, Redis
Q8. What is database indexing and why is it used?

Indexing improves query performance by creating a lookup table for faster data retrieval.

❌ Trade-off: slows down write operations and consumes extra space.

Q9. What is normalization and denormalization?

Normalization → reduce redundancy (split tables)

Denormalization → improve read performance (combine data)

Q10. Explain transactions and ACID properties
Property	Description
A - Atomicity	All or nothing
C - Consistency	Maintain valid state
I - Isolation	Concurrent transactions don’t interfere
D - Durability	Data persists after commit
🔒 3. Security & Authentication
Q11. How does authentication differ from authorization?
Term	Description
Authentication	Verifying user identity (login)
Authorization	Granting permissions (access control)
Q12. What is JWT (JSON Web Token)?

A compact token used for stateless authentication between client and server.

Structure:

Header.Payload.Signature


✅ Used to avoid storing sessions on the server.

Q13. How to secure backend APIs?

Use HTTPS

Validate and sanitize input (prevent XSS/SQL injection)

Use JWT or OAuth

Implement rate limiting

Store passwords using bcrypt hashing

Q14. Explain CORS

Cross-Origin Resource Sharing allows browsers to request resources from different origins safely using HTTP headers.

Example header:

Access-Control-Allow-Origin: *

🧩 4. System Design & Scalability
Q15. How do you scale a backend system?

Vertical scaling: more CPU/RAM per server

Horizontal scaling: add more servers

Use:

Load balancers

Caching (Redis, Memcached)

Message queues (RabbitMQ, Kafka)

Database replication/sharding

Q16. What is load balancing?

Distributes incoming requests across multiple servers to improve performance and reliability.

Example tools: Nginx, HAProxy, AWS ELB

Q17. What is caching and how does it improve performance?

Temporarily stores frequently accessed data in memory to reduce DB calls.

Types:

Client-side (browser cache)

Server-side (Redis, CDN)

Q18. What are message queues and why are they used?

Message queues (RabbitMQ, Kafka, SQS) decouple services for asynchronous processing (e.g., sending emails, logs, background tasks).

Q19. What is rate limiting and throttling?

Controls number of requests a user can make to prevent abuse or DDoS.

Example:

“Max 100 requests/min per user”

🧠 5. Advanced Backend Topics
Q20. What is middleware?

Middleware functions intercept requests/responses to perform actions like authentication, logging, or error handling.

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

Q21. How does session management work?

A session is created on login and stored (server memory, Redis, or DB).
Client gets a session ID (usually via cookies) for subsequent requests.

Q22. What is a reverse proxy?

A server (like Nginx) that sits in front of backend servers to handle:

Load balancing

SSL termination

Caching

Security filtering

Q23. How do microservices communicate?

Synchronous: REST, gRPC

Asynchronous: message queues (Kafka, RabbitMQ)

Q24. How do you handle errors in backend APIs?

Use proper status codes

Return error messages in JSON format

Log errors (Winston, Morgan)

Implement global error handlers

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

Q25. What is containerization (Docker)?

Docker packages your app and its dependencies into containers for consistent deployment across environments.
