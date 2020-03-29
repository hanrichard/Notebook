```
shouldComponentUpdate
return false
```
will not update, if props updates

```
componentWillReceiveProps(nextProps)
  this.setState({bla:nextProps})
```
