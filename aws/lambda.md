### lambda event
event: input data or input parameters

### lambda common pattern

```
let userid = event.pathParameters.userid
```

### put 
```
let data = await dynamodb.put({
  TableName: tablename,
  Item: item
}).promose()
```

### get
```
let data = await dynamodb.get({
  TableName: tablename,
  key: {
    userid: userid
  }
}).promose()
```
### delete
```
let data = await dynamodb.delete({
  TableName: tablename,
  key: {
    userid: userid
  }
}).promose()

```
