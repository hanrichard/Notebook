```
shouldComponentUpdate
return false
```
will not update, if props updates

```
componentWillReceiveProps(nextProps)
  this.setState({bla:nextProps})
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
