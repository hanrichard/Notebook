
### Styled-components 
is a JavaScript library for styling React applications. It removes the mapping between styles and components, and lets you write actual CSS augmented with JavaScript.

### What's the difference between an Element and a Component in React?
Elements are the fundamental building blocks of React, and describe what you want to see on the screen. They are just simple JS objects with props, key, ref, and type properties, whereas Components have a render method and optionally accept inputs.

### Test renderer
Essentially, this package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a React DOM or React Native component without using a browser

#### pros
- Jest Snapshot tests check if your component behaves correctly
- Jest snapshot allows conditional rendering tests

#### cons
- There are some problems with larger snapshots

### What is the difference between Element and Component?
An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.

The object representation of React Element would be as follows:
```
const element = React.createElement(
  'div',
  {id: 'login-btn'},
  'Login'
)```
The above React.createElement() function returns an object:
```
{
  type: 'div',
  props: {
    children: 'Login',
    id: 'login-btn'
  }
}```
And finally it renders to the DOM using ReactDOM.render():
```
<div id='login-btn'>Login</div>```
Whereas a component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output:
```
const Button = ({ onLogin }) =>
  <div id={'login-btn'} onClick={onLogin}>Login</div>```
Then JSX gets transpiled to a React.createElement() function tree:
```
const Button = ({ onLogin }) => React.createElement(
  'div',
  { id: 'login-btn', onClick: onLogin },
  'Login'
)
```
### What are Pure Components?
React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.

### What is the difference between HTML and React event handling?
In HTML, the event name should be in lowercase:
```<button onclick='activateLasers()'>```
Whereas in React it follows camelCase convention:
```<button onClick={activateLasers}>```

### What are synthetic events in React?
SyntheticEvent is a cross-browser wrapper around the browser's native event. It's API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.

### What is the purpose of using super constructor with props argument?
The main reason of passing props parameter to super() call is to access this.props in your child constructors.


### What is reconciliation?
When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation.
