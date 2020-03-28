```
shouldComponentUpdate
return false
```
will not update, if props udpates

```
componentWillReceiveProps(nextProps)
  this.setState({bla:nextProps})
```
