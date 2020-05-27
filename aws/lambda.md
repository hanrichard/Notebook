### lambda common pattern

```
let userid = event.pathParameters.userid
let data = await dynamodb.put({
  TableName: tablename,
  Item: item
}).promose()


let data = await dynamodb.get({
  TableName: tablename,
  key: {
    userid: userid
  }
}).promose()



let data = await dynamodb.delete({
  TableName: tablename,
  key: {
    userid: userid
  }
}).promose()

```
