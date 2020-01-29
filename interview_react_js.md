
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
