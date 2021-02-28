### What are the advantages of React?
- Increases the application's performance with Virtual DOM.
- JSX makes code easy to read and write.
- It renders both on client and server side (SSR).
- Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.
- Easy to write unit and integration tests with tools such as Jest.

### What are the limitations of React?
- React is just a view library, not a full framework.
- There is a learning curve for beginners who are new to web development.
- Integrating React into a traditional MVC framework requires some additional configuration.
- The code complexity increases with inline templating and JSX.
- Too many smaller components leading to over engineering or boilerplate.

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

Elements are the fundamental building blocks of React, and describe what you want to see on the screen. They are just simple JS objects with props, key, ref, and type properties, whereas Components have a render method and optionally accept inputs.

The object representation of React Element would be as follows:
```
const element = React.createElement(
  'div',
  {id: 'login-btn'},
  'Login'
)
```
The above React.createElement() function returns an object:

```
{
  type: 'div',
  props: {
    children: 'Login',
    id: 'login-btn'
  }
}
```
And finally it renders to the DOM using ReactDOM.render():
```
<div id='login-btn'>Login</div>
```
Whereas a component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output:

```
const Button = ({ onLogin }) =>
  <div id={'login-btn'} onClick={onLogin}>Login</div>
```
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

### What are the limitations of React?
React is just a view library, not a full framework.
There is a learning curve for beginners who are new to web development.
Integrating React into a traditional MVC framework requires some additional configuration.
The code complexity increases with inline templating and JSX.
Too many smaller components leading to over engineering or boilerplate.

### What are error boundaries in React v16?
Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

### How to listen to state changes?
The following lifecycle methods will be called when state changes. You can compare provided state and props values with current state and props to determine if something meaningful changed.
```
componentWillUpdate(object nextProps, object nextState)
componentDidUpdate(object prevProps, object prevState)
```

### What is TestRenderer package in React?
This package provides a renderer that can be used to render components to pure JavaScript objects, without depending on the DOM or a native mobile environment. This package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a ReactDOM or React Native without using a browser or jsdom.

### What is the difference between React context and React Redux?
You can use Context in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for. Whereas Redux is much more powerful and provides a large number of features that the Context API doesn't provide. Also, React Redux uses context internally but it doesn't expose this fact in the public API.

### What is React memo function?
Class components can be restricted from rendering when their input props are the same using PureComponent or shouldComponentUpdate. Now you can do the same with function components by wrapping them in React.memo.
```
const MyComponent = React.memo(function MyComponent(props) {
 /* only rerenders if props change */
});
```


### What is the difference between try catch block and error boundaries?
Try catch block works with imperative code whereas error boundaries are meant for declarative code to render on the screen. For example, the try catch block used for below imperative code
```try {
  showButton();
} catch (error) {
  // ...
}```
Whereas error boundaries wrap declarative code as below,
```<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```
So if an error occurs in a componentDidUpdate method caused by a setState somewhere deep in the tree, it will still correctly propagate to the closest error boundary.

### What are the limitations with HOCs?
- Don’t Use HOCs Inside the render Method: It is not recommended to apply a HOC to a component within the render method of a component.

- Static Methods Must Be Copied Over: When you apply a HOC to a component the new component does not have any of the static methods of the original component

- Refs Aren’t Passed Through: For HOCs you need to pass through all props to the wrapped component but this does not work for refs. This is because ref is not really a prop similar to key. In this case you need to use the React.forwardRef API

### How to prevent a function from being called multiple times?
If you use an event handler such as onClick or onScroll and want to prevent the callback from being fired too quickly, then you can limit the rate at which callback is executed. This can be achieved in the below possible ways,
- Throttling: Changes based on a time based frequency. For example, it can be used using _.throttle lodash function
- Debouncing: Publish changes after a period of inactivity. For example, it can be used using _.debounce lodash function
- RequestAnimationFrame throttling: Changes based on requestAnimationFrame. For example, it can be used using raf-schd lodash function

### What are the benefits of using typescript with reactjs?
Below are some of the benefits of using typescript with Reactjs,
- It is possible to use latest JavaScript features
- Use of interfaces for complex type definitions
- IDEs such as VS Code was made for TypeScript
- Avoid bugs with the ease of readability and Validation

### What is the render method for?
To determine what should be rendered for a particular component. '

### What's the difference between a controlled component and an uncontrolled one in React?
A controlled component has its state completely driven by React, whereas uncontrolled components can maintain their own internal state. E.g., a textarea's value.

### What is the point of shouldComponentUpdate() method?
It's used for performance reasons, for example if the implementor of a component knows for sure that a particular property change does not necessitate a re-render, they could return false from this method and skip the re-render.


### Creating Refs
- they can be useful when you need a direct access to the DOM element or an instance of a component.

```
lass AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}
```

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  render() {
    return <div ref={this.myRef} />
  }
}
```
### getDerivedStateFromProps
getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.

### contextType
The contextType property on a class can be assigned a Context object created by React.createContext(). This lets you consume the nearest current value of that Context type using this.context. You can reference this in any of the lifecycle methods including the render function.

### HOC can be used for many use cases:
- Code reuse, logic and bootstrap abstraction.
- Render hijacking.
- State abstraction and manipulation.
- Props manipulation.

### When to Use Refs
There are a few good use cases for refs:
- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

### Name a few techniques to optimize React app performance.
- Using useMemo( ) - hooks
- Using React.PureComponent 
- Lazy Loading 

