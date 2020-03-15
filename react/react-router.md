### router
```
const historty = createHistory()


<Router histroy={history}>
  <Switch>
    <Route = "/" exact component={bla}>
    <Route = "/test" render=((props)=> <Component {...props} />)>
  </Switch>
</Router>
```

```
 <Route = "/test" render=((props)=> {handleSomething(props); return <Callback />})>
```


### private route
```
const PrivateRoute = () => {
  <Route render=(props => auth.isAuthicated === true ?
    <Component auth={auth} {...props} />:
    <Redirect to="/"/>
  )
}

```
