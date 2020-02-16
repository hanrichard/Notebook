## iteration object
```
for (let key in yourobject) {
  console.log(key, yourobject[key]);
}

for (let [key, value] of Object.entries(yourobject)) {
    console.log(key, value);
}
```
```
const object1 = {
  a: 'somestring',
  b: 42
};

for(let [key, value] of Object.entries(object1)){
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

Object.entries(object1).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

## iteration array
```
const arr = [1, 2, 3, 5]
arr.forEach(item=> {
  console.log(item)
})
```


## styled-components
Automatic critical CSS
No class name bugs - styled-components generates unique class names for your styles
Automatic vendor prefixing

## react profermance:
userhoooks
profiler - react memo

https://medium.com/@rossbulat/test-driven-development-in-react-with-jest-and-enzyme-2a6cf2cc3071



https://dev.to/theactualgivens/testing-react-hook-state-changes-2oga


https://codesandbox.io/s/my-code-9t63c



```

var homes = [
    {"id": 111, "city":"Dallas", "state":"aTX","zip":"75201","price":11162500},
    {"id": 4,"city":"Bevery Hills", "state":"bCA", "zip":"90210", "price":319250},
    {"id": 6, "city":"Dallas", "state":"zTX", "zip":"75000", "price":556699},
    {"id": 6, "city":"New York", "state":"yNY", "zip":"00010", "price":962500},
    {"id": 7, "city":"New York", "state":"dYY", "zip":"00011", "price":962500}
    ];

let test = homes.sort(fieldSorter(['+id', '-price']));


function fieldSorter(fields) {
    return function (a, b) {
        return fields
            .map(function (o) {
                var dir = 1;
          
                if (o[0] === '-') {
                   dir = -1;
                   o=o.substring(1);
                }

                if (o[0] === '=') {
                   dir = 0;
                   o=o.substring(1);
                }
          
                if (o[0] === '+') {
                   dir = 1;
                   o=o.substring(1);
                }
          
          
                if (a[o] > b[o]) return dir;
                if (a[o] < b[o]) return -(dir);
                if (a[o] = b[o]) return 0;
            })
            .reduce( (p,n) => {
                console.log("p n:", p + " - "+ n)
                return p ? p : n;
            }, 0);
    };
}

console.log(test)
```

### react hook
```
const onchange = e => setFormdata({...formdata, [e.target.name]: e.target.value});
```
```
const onsubmit = async e => {
  blabla
}
```

### redux action
```
export const setAlert = (msg, action)=>(dispatch)=> {
  dispatch({
    type: action,
    payload: msg
  })
  setTimeout(()=> dispatch({type: REMOVE, payload: id}), 2000)
}

```

```
const handleChange = input => e => {
  this.setState({ [input]: e.target.value})
}
```


```
const dashboard = ({auth, profile: {loading}}) => {}
```
### routing 
withRouter with redirecting

### send data
```
const config = {
  header: {"Content-type": "application/json"}
}
try {
await axios.post('/post/', data, config)
} catch(err) {
}
```
### localstorage
```
localStorage.setItem("test", JSON.stringfy({test:"name"}))
JSON.parse(localStorage.getItem("test"))

```
