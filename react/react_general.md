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
