https://aws.amazon.com/premiumsupport/knowledge-center/model-api-gateway/

### model example
```
{
  "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "User",
    "type": "object",
    "properties": {
        "UserID": {
            "type": "string"
        },
        "Name": {
            "type": "string"
        },
        "Age": {
            "description": "Age in years",
            "type": "integer",
            "minimum": 18
        }
    },
    "required": ["UserID", "Name"]
}
```
