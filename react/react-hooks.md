### https://react-redux.js.org/api/hooks

### reasons to use hooks
- It’s hard to reuse stateful logic between components
- Complex components become hard to understand
- Classes confuse both people and machines

### advantages
- Improving Readability of Component Tree
- Encapsulating Side effects
- Composable, Reusable Logic

### Rules of Hooks
- Only Call Hooks at the Top Level
- Only Call Hooks from React Functions


https://reactjs.org/docs/hooks-reference.html#usereducer



### useContext and useReducer

```
import {createContext} from react
const context = createContext({
  current: null
})
```

```
const initState = useContext(context)
const [state, dispatch] = useReducer(reducer, initState)

<Context.provider value=({state, dispatch})>
```


```
import context from ....
const {dispatch} = userContext(context)

dispatch({type: "LOGIN_USER", payload: date})
```

https://codesandbox.io/s/usewindowresize-nsd3k


### index.js
```
import { useState, useEffect } from "react";

export function useWindowResize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const listener = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return {
    width,
    height
  };
}
```

### useWindowResize.js

```
import React from "react";
import ReactDOM from "react-dom";
import { useWindowResize } from "./useWindowResize";

import "./styles.css";

function App() {
  const { width, height } = useWindowResize();
  return (
    <div>
      <h1>
        <span role="img" aria-label="Left Right Arrow">
          ↔️
        </span>{" "}
        width: {width}px
      </h1>
      <h1>
        <span role="img" aria-label="Up Down Arrow">
          ↕️
        </span>{" "}
        height: {height}px
      </h1>
      <p>Resize the window to update the values</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### useLocation, useHistroy, useContext
