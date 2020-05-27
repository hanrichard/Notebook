### lambda common pattern

```
let userid = event.pathParameters.userid
let data = await dynamodb.delete({
  TableName: tablename,
  key: {
    userid: userid
  }
}).promose()

```
