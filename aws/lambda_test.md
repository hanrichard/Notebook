### get id
```
'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "ap-southeast-2"});

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "ap-southeast-2"});

  const params = {
    TableName: "Users",
    Key: {
      id: "12345"
    }
  }

  try {
    const data = await documentClient.get(params);
    console.log("xx", data);
  } catch (err) {
    console.log(err);
  }
}
```

### put id

```
'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "ap-southeast-2"});

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "ap-southeast-2"});

  const params = {
    TableName: "Users",
    Item: {
      id: "123",
      firstname: "Bob",
      lastname: "Johnson"
    }
  }

  try {
    const data = await documentClient.put(params).promise();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

### get items
```
'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;

  const params = {
    TableName: "Products"
  };

  try {
    const data = await documentClient.scan(params).promise();
    responseBody = JSON.stringify(data.Items);
    statusCode = 200;
  } catch(err) {
    responseBody = `Unable to get products: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json"
    },
    body: responseBody
  };

  return response;
};
```
