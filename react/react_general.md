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

### analyze 
```
source map exploer file explore "build/static/js/*.js"
```

### react optimise
- Use React.Fragments to Avoid Additional HTML Element Wrappers
- Spreading props on DOM elements
- Use Reselect in Redux to Avoid Frequent Re-render
- Memoize React Components
- Function/Stateless Components and React.PureComponent

Reference: https://www.codementor.io/blog/react-optimization-5wiwjnf9hj


### date-fns
