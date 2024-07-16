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
An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated. They are just simple JS objects with props, key, ref, and type properties, whereas Components have a render method and optionally accept inputs.

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
- Using useMemo() - hooks
- Using React.PureComponent 
- Lazy Loading 


### class component vs hooks
The idea behind introducing Hooks and other features like React.memo and React.lazy is to help reduce the code that one has to write,

problems
- It’s hard to reuse stateful logic between components 
- Complex components become hard to understand
- Classes confuse both people and machines

benefits
-  Hooks can cover all use cases for classes while providing more flexibility in extracting, testing, and reusing code.
-  hooks greatly reduce the amount of code you need to write and increase its readability.


### reducer vs context
- Context API was originally designed for high amount of read, low amount of write operations (like changing the theme between light and dark)
- Context will cause reloading of the pages, this will be identified if we look into the profiler provided by react dev tools, where as redux won't do that

redcuer
- If you need to use middleware for various purposes. For example logging actions, error reporting, dispatching other requests depending on the server’s response, etc.
- When data coming from multiple endpoints influence single component/view.
- When you want to have greater control over actions in your applications. Redux enables tracking actions and data change, it greatly simplifies debugging.
- If you don’t want server response to directly change the state of your application. Redux adds a layer, where you can decide how, when and if this data should be applied. The observer pattern. Instead of creating multiple publishers and subscribers across the whole app, you just connect components to Redux store.

### 60. How do you handle optimization in a large React application?

There are several techniques that can be used to optimize a large React application:

- Use the React Developer Tools to identify and fix performance bottlenecks. The React Developer Tools allow you to track the performance of individual components and identify which components are causing the most re-renders.
- Use PureComponent and memo instead of Components. These are more efficient alternatives to React.Component that only re-render when props or state have changed.
- Use the useEffect hook to handle side effects. This hook allows you to run side effects, such as network requests, after a component has rendered.
- Use the useMemo hook to memoize expensive calculations. This hook allows you to cache the results of expensive calculations and only recalculate them when the inputs have changed.
- Lazy loading: Lazy loading is a technique where you only load the components that are needed for the current view. This can greatly improve the performance of your application.
- Code splitting: Code splitting is a technique where you split your application into smaller chunks of code that are loaded on demand. This can greatly improve the performance of your application.
- Optimize the loading time of your application by using techniques like code minification, compression, and caching.


### 
- useMemo is to memoize a calculation result between a function's calls and between renders
- useCallback is to memoize a callback itself (referential equality) between renders
- useRef is to keep data between renders (updating does not fire re-rendering)
- useState is to keep data between renders (updating will fire re-rendering)

### redux vs context
React Context API is a simpler solution that is suitable for small to medium-sized applications with simple state management requirements, while Redux is a more powerful and predictable solution that is suitable for large and complex applications with complex state management requirements.

When choosing between React Context API and Redux, it’s important to consider the specific needs and constraints of your project. React Context API is more suitable for scenarios where state updates are infrequent or simple, and centralized state management is not critical. On the other hand, Redux is more suitable for scenarios where state updates are frequent or complex, and centralized state management is critical.


### performance
- usecallback
- usememo
- suspence and lazyload
- depandancy load bundle size - lodash
- avoid unnessary re-render
- use cdn
- 

### useLayoutEffect
It fires synchronously after all DOM mutations but before Paint phase. Use this to read layout(styles or layout information) from the DOM and then perform blocking custom DOM mutations based on layout.

### useEffect
It runs after the render is committed to the screen i.e. after Layout and Paint phase. Use this whenever possible to avoid blocking visual updates.


### Why choose useEffect hook?
useEffect hook is used to handle side effects in functional components, such as fetching data, updating the DOM, and setting up subscriptions or timers. It is used to mimic the lifecycle methods of class-based components. The motivation behind the introduction of useEffect Hook is to eliminate the side effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can lead to unwarranted side effects. Since the render method is too quick to produce a side-effect, one needs to use life cycle methods to observe the side effects. 


### What is React?
React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach.

The important features of React are:

- It supports server-side rendering.
- It will make use of the virtual DOM rather than real DOM (Data Object Model) as RealDOM manipulations are expensive.
- It follows unidirectional data binding or data flow.
- It uses reusable or composable UI components for developing the view.

### What is virtual DOM?
Virtual DOM provides an abstraction of the actual HTML DOM. It is a lightweight copy or representation of the real DOM, maintained by React, which allows for efficient updates and rendering of components.

### How the Virtual DOM works in React:
React update the state changes in Virtual DOM first and then it syncs with Real DOM. Virtual DOM is just like a blueprint of a machine, can do changes in the blueprint but those changes will not directly apply to the machine.

- React creates a lightweight copy of the actual HTML DOM called the Virtual DOM.
- When a component is rendered, React creates a corresponding Virtual DOM representation in memory.
- When state or props change, React creates a new Virtual DOM representation.
- React compares the new Virtual DOM with the previous one to determine the differences or updates that need to be made.
- By identifying the minimal set of changes, React optimizes performance by minimizing unnecessary updates to the actual DOM.
- React updates the real DOM with the minimal modifications required to reflect the new Virtual DOM.

### How VDOM improves performance compared to directly manipulating the real DOM?
- React batches multiple updates together before applying them to the real DOM, reducing unnecessary re-renders.
- It only updates the specific components or elements that have changed, minimizing DOM manipulations.
- React’s efficient diffing algorithm identifies the minimal set of changes needed between the previous and new Virtual DOM representations.
- React’s reconciliation process optimizes updates by reusing existing DOM elements when possible.

### What is JSX?
JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).

As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function.


### component

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.


### reason to useeffect
The motivation behind the introduction of useEffect Hook is to eliminate the side effects of using class-based components. 

### useEffect
The useEffect Hook allows you to perform side effects in your components.

### how it works
- You call useEffect with a callback function that contains the side effect logic.
- By default, this function runs after every render of the component.
- You can optionally provide a dependency array as the second argument.
- The effect will only run again if any of the values in the dependency array change.


### What is the significance of keys in React?
Keys are used for identifying unique Virtual DOM Elements with their corresponding data driving the UI. They help React to optimize the rendering by recycling all the existing elements in the DOM. These keys must be a unique number or string, using which React just reorders the elements instead of re-rendering them. This leads to increase in application’s performance.

### event bubbling
Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

stopPropagation and preventDefault

### falsy values
- false: The boolean value false.
- 0: The number zero.
- "" or '' or ``: An empty string.
- null: The null keyword, representing the absence of any object value.
- undefined: The undefined keyword, representing an uninitialized value.
- NaN: Stands for "Not a Number". It represents a special value returned from an operation that should return a numeric value but doesn't.


### Es6 features
let and const Keywords
Arrow Functions
Multi-line Strings
Default Parameters
Template Literals
Destructuring Assignment
Enhanced Object Literals
Promises
Classes
Modules

### Css box modal


### Accessibility ->  chrome Vox 
- semantic 
- Color contract
- Radio 
- Audio
- Alt tag
- Navigate skip
- Aria-role

### Webpack
At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.


### Testing

Functional Testing: It is a process of testing where each and every component of the module is tested. Eg: If a web page contains text field, radio botton, Buttons and Drop down etc components needed to be checked.

Integration Testing: Process where the dataflow among modules are checked.

End-to-end testing is a methodology used to test whether the flow of an application is performing as designed from start to finish. 
