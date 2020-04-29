const URLParameterList = URLParameter.substr(1).split('&')


### array to object
```
const array = [
  { key: "abc", data: 123 },
  { key: "xyz", data: 789 }
];

const object = array.reduce((result, item) => {
  const { key, ...objectWithoutKey } = item;
  return { ...result, [key]: objectWithoutKey };
}, {});

document.write("<pre>"+JSON.stringify(object,null,4)+"</pre>")
```

# remove key
```
    delete insureListValue[SITE_CORE_IDS.INSURED_PERSON_FIRST_NAME];

```
