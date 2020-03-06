### reasons to use hooks
- It’s hard to reuse stateful logic between components
- Complex components become hard to understand
- Classes confuse both people and machines


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

