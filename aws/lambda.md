### lambda common pattern

```
let data = await dynamodb.delete({
  TableName: tablename,
  key: {
    userid: userid
  }
}).promose()

```
