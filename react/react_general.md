### disadvantages 
- React provides only the View part of the MVC model. Because of that, you will have to rely on other technologies, too.
- Development Pace
- Documentaion

### component will not re-render
```
shouldComponentUpdate
return false
```

```
componentWillReceiveProps(nextProps)
  this.setState({bla:nextProps})
```
### sessionStorage
```
sessionstorage.Setitem("abc", "blac")
sessionstorage.Getitem("abc")
sessionstorage.Removeitem("abc")

stringify from object to sring
JSON.parse()
```

### ref
```
// Import our hooks
import React, { useRef, useEffect } from 'react';
// create our ref
const myInput = useRef();
// This is equivalent to our componentDidMount, this will focus
useEffect(() => myInput.current && myInput.current.focus());
// Parse our ref to our textField
<Textfield inputRef={myInput} />
```

### connect withrouter withstyle
```
export default connect(mapStateToProps)(withStyles(ThemeStyles)(FormComponent))
```


### react optimise
- Use React.Fragments to Avoid Additional HTML Element Wrappers
- Spreading props on DOM elements
- Use Reselect in Redux to Avoid Frequent Re-render
- Memoize React Components
- Function/Stateless Components and React.PureComponent

Reference: https://www.codementor.io/blog/react-optimization-5wiwjnf9hj


### good react lib
- date-fns
- react-device-detect
- source-map-explorer
```
source map exploer file explore "build/static/js/*.js"
```



### replace parent class
```
const EL = cardVariant === 'pill' ? PillField : TileField

  const Element = ({option}) => {
    return <EL name={option.name}
    group={uniqueGroup}
    value={option.name}
    title={option.title}
    iconName={option.icon}
    helperText={option.description}
    onChange={handleChange}
    selected={value === option.name}
    type={"radio"}/>
  }
  
  return (
    <TileContainer>
      {options.map((option, index) => {
        const key = index;
        return <Element option={option} />
      })}
    </TileContainer>
  );
  ```
  
  

### dynamic import components
```
import * as Icons from '../icon';

const Test = Icons[name];

return <Test />

```

### hooks
```
setValues = ({...values, [event.target.name]: event.target.value})
```
