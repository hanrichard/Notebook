### router
```
import {BrowserRouter as Router} from "react-router-dom"
const historty = createHistory()

<Router histroy={history}>
  <Switch>
    <Route = "/" activeStyle={{color: red}} exact component={bla}>
    <Route = "/test" render=((props)=> <Component {...props} />)>
    <Route component={Notfound} /> //not found
  </Switch>
</Router>

<Prompt 
  when={!this.state.loggedin}
  message={(location) => {
    return location.pathname.startsWith("/user")? "message 123" : true //true means do not prompt message
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

### router search query param
```
import queryString from "query-string"

const values = queryString(this.props.location.search)
console.log(values.sort) //?sort=123


import { compose } from "redux";
import { withRouter } from "react-router";

const Banner = ({ location }) => {
export default compose(withRouter)(Banner);
```

### compose
```

const mapStateToProps = createStructuredSelector({
  steps: state => state.data.data.questions.spa.steps,
  formValues: state => state.formEvents.formValue,
  router: state => state.router,
  campaignCodeData: state => state.quote.campaignCodeData
});

const mapDispatchToProps = dispatch => ({
  getCampaignCodeData: value => dispatch(getCampaignCode(value))
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CampaignBanner);
```

```
useRequestsParams()
```
