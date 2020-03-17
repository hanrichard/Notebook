### router
```
import {BrowserRouter as Router} from "react-router-dom"
const historty = createHistory()

<Router histroy={history}>
  <Switch>
    <Route = "/" activeStyle={{color: red}} exact component={bla}>
    <Route = "/test" render=((props)=> <Component {...props} />)>
  </Switch>
</Router>

<Prompt 
  when={!this.state.loggedin}
  message={(location) => {
    return location.pathname.startWith("/user")? "message 123" : "message 456"
  }
>
```

```
 <Route = "/test" render=((props)=> {handleSomething(props); return <Callback />})>
```


### private route
```
const PrivateRoute = ({component:Component, auth}) => {
  <Route render=(props => auth.isAuthicated === true ?
    <Component auth={auth} {...props} />:
    <Redirect to="/"/>
  )
}

```

### routing 
withRouter with redirecting

```
{Redirect} from "react-router-dom"

state.isAuth ? <Redirect to="/"/>:<Login />
```

```
const ProtectRouter = ({component: Component, ...rest}) => {
  const { state } = useContext(context)
  return (
    <Router render = {
      props => {
        !state.isAuth ? <Redirect to ="/" /> : <Component {...props} />
      }
    }
  )
}


```
