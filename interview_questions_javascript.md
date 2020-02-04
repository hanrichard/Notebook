https://medium.com/@rossbulat/test-driven-development-in-react-with-jest-and-enzyme-2a6cf2cc3071


https://dev.to/theactualgivens/testing-react-hook-state-changes-2oga

https://www.edureka.co/blog/interview-questions/javascript-interview-questions/



### hoist
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting,

const and let are not hoisting

#### Prototype chaining 
it is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. The prototype on object instance is available through Object.getPrototypeOf(object) or proto property whereas prototype on constructors function is available through object.prototype.


### undecleared, undefined and null
- undeclear- you forget something
- undefined - you declear it, but no value / do not assigned value
- null - not a value, nothing value

### event delegation
It allows us to add an event listener to one parent, and avoid to add many event listeners to specific nodes. 
 
 
### event bublling
When inner elements' X event fired then its listener listens and executes its handler method, then event bubbled up and its outer/parent element’s X event fired then listener listen and execute its handlers.
event.stopPropagation().

### What is event capturing
Event bubbling is a type of event propagation where the event is first captured by the outermost element and , and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the inner DOM element.

### target vs currentTarget
The currentTarget refers to the element that the event listener directly attached to while the target still refers to the specific <a> we clicked.

### What is scope in javascript?
Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.


### Cookies - 4kb - value key pairs
Stores data that has to be sent back to the server with subsequent requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side (normally from server-side).
Cookies are primarily for server-side reading (can also be read on client-side), localStorage and sessionStorage can only be read on client-side.
Size must be less than 4KB.
Cookies can be made secure by setting the httpOnly flag as true for that cookie. This prevents client-side access to that cookie

### localStorage - 5mb
Stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data
Storage limit is the maximum amongst the three

### sessionStorage > 5mb
The sessionStorage object stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
Data is never transferred to the server.
Storage limit is larger than a cookie (at least 5MB).

### Cookie, localStorage, and sessionStorage 
are all the simple data storage ways for client-side storage. Cookie is more like an old school way to handle the simple data stored on the client-side. In HTML5, web storage, such as localStorage or sessionStorage is introduced and it’s also easier to use.

### What are the scopes of a variable in JavaScript?
The scope of a variable is the region of your program in which it is defined. JavaScript variable will have only two scopes.

• Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code. A variable is said to be globally scoped if it is visible from all other scopes.
• Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

### What is the purpose of ‘This’ operator in JavaScript?
The JavaScript this keyword refers to the object it belongs to. This has different values depending on where it is used. In a method, this refers to the owner object and in a function, this refers to the global object.

### What is Callback?
A callback is a plain JavaScript function passed to some method as an argument or option. It is a function that is to be executed after another function has finished executing, hence the name ‘call back‘. In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions.

### What is a callback function?
A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action. Let's take a simple example of how to use callback function
```
function callbackFunction(name) {
  console.log('Hello ' + name);
}

function outerFunction(callback) {
  let name = prompt('Please enter your name.');
  callback(name);
}

outerFunction(callbackFunction);
```

### What is Closure? Give an example.
Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope. It gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created. To use a closure, simply define a function inside another function and expose it.

### What are the ways to define a variable in JavaScript?
Var – The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable. Example: var a =10; Variable declarations are processed before the execution of the code.
Const – The idea of const functions is not allow them to modify the object on which they are called. When a function is declared as const, it can be called on any type of object.
Let – It is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in.

### What is an event bubbling in JavaScript?
Event bubbling is a way of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements. The execution starts from that event and goes to its parent element. Then the execution passes to its parent element and so on till the body element.

### promise
A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending. The syntax of promise would be as below
```
const promise = new Promise(function(resolve, reject) {
  // promise description
})
```

### We use promises for handling asynchronous interactions in a sequential manner. 
They are especially useful when we need to do an async operation and THEN do another async operation based on the results of the first one. For example, if you want to request the list of all flights and then for each flight you want to request some details about it. The promise represents the future value. It has an internal state (pending, fulfilled and rejected) and works like a state machine.

A promise object has then method, where you can specify what to do when the promise is fulfilled or rejected.

You can chain then() blocks, thus avoiding the callback hell. You can handle errors in the catch() block. After a promise is set to fulfilled or rejected state, it becomes immutable.

Also mention that you know about more sophisticated concepts:

async/await which makes the code appear even more linear
RxJS observables can be viewed as the recyclable promises
Be sure that you can implement the promise, read one of the articles on a topic, and learn the source code of the simplest promise implementation.

#### Strict mode
Strict mode makes it easier to write "secure" JavaScript.

Strict mode changes previously accepted "bad syntax" into real errors.


```
"use strict"

// Immediatley Resolved
//var myPromise = Promise.resolve('Foo');

//myPromise.then((res) => console.log(res));

/*
var myPromise = new Promise(function(resolve, reject){
  setTimeout(() => resolve(4), 2000);
});
myPromise.then((res) => {
  res +=3;
  console.log(res);
});
*/

function getData(method, url){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
      if(this.status >= 200 && this.status < 300){
        resolve(xhr.response);
      }else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function(){
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function(data){
  let todos = JSON.parse(data);
  console.log(data);
  
}).catch(function(err){
  console.log(err);
});

```

### protype vs inheratie
If an object is created with an object literal var newObj = {}, it inherits properties from Object.prototype and we say its prototype object (or prototype attribute) is Object.prototype. If an object is created from a constructor function such as new Object (), new Fruit () or new Array () or new Anything (), it inherits from that constructor Object (), Fruit (), Array (), or Anything (). For example, with a function such as Fruit (), each time we create a new instance of Fruit var aFruit = new Fruit (), the new instance’s prototype is set to the prototype from the Fruit constructor, which is Fruit.prototype.
```
let PersonC = class {
  constructor(nm, id){
    this.nm = nm;
    this.id = id;
  }
  getDetaisl(){
    return this.nm
  }
}

let bob = PersonC("bob", 123)

let PersonE = class extends PersonC {
  constructor(nm, id, salary){
    super(nm, id)
    this.salary=salary
  }
  employeeInfo(){
    return this.salary
  }
}

let bobbob = PersonE("bob", 123, 123)
```

### What is 'this' keyword in JavaScript?

'This' keyword refers to the object from where it was called.

### Define event bubbling?
JavaScript allows DOM elements to be nested inside each other. In such a case, if the handler of the child is clicked, the handler of parent will also work as if it were clicked too.

### What are different types of Scope Chain available in JavaScript?
If we check in the program, every local scope has a connection with one or more scope in their back which forms a chain. This chain goes on until it met with the global scope which is the root of this hierarchy. As global scope doesn't have a parent, so it is on the top of the chain. This is known as scope chain.

The scope chain in JavaScript is basically used to resolve the values of the variable. Without this, it is difficult for a JavaScript to choose a certain value for a variable if there are many variables defined at different scopes.

### The Key Contrast Between Lexical and Dynamic Scoping: 
Lexical scope is write-time (compile), whereas dynamic scope is run-time. Lexical scope care where a function was declared, but dynamic scope cares where a function was called from.

Lexical scoping: Variables declared outside of a function are global variables and are visible everywhere in a JavaScript program. Variables declared inside a function have function scope and are visible only to code that appears inside that function.



### trickies
```
var a = new Number(3)
var a = new String("123")

those are objects
String.prototype.isGreatThen = function(limit) {
  return String.length > limit
}

a.isGreatThen(3)
```

### this
in the object, when the method of object will point to object, however, in the function, it points windows again
in the function, will point to the window


```
console.log(JSON.stringify({ x: 5, y: 6 }));
console.log(JSON.parse('{"balla": "blabla"}'))

```

### promise
```

const promise = new Promise((resolve, reject) =>{
  // do a thing, possibly async, then…
  if (false) {
    resolve("Stuff worked!");
  }
  else {
    reject("this is error It brok 123e");
  }
});

promise.then(
(result)=> { console.log(result) }, 
  (err) =>{ console.log(err) }
);


promise.then((response) => {
  console.log("Success!", response);
}).catch((error) => {
  console.log("Failed!", error);
})
```

#### asyc

https://medium.com/better-programming/how-to-use-async-await-with-axios-in-react-e07daac2905f
https://scotch.io/tutorials/asynchronous-javascript-using-async-await

```
getUsers = async () => {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    let { data } = res.data;
    this.setState({ users: data });
};
```

```
async function logFetch(url) {
  try {
    const response = await fetch(url);
    console.log(await response.text());
  }
  catch (err) {
    console.log('fetch failed', err);
  }
}
```

##promise vs async
```
function doIt(isGood) {
  return new Promise((resolve, reject) => {
    if (isGood) {
      setTimeout(() => {
        resolve('🇨🇳');
      }, 500);
    }

 

    setTimeout(() => {
      reject('🇯🇵');
    }, 2000);
  });
}

 

// doIt(false)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

 

(async function() {
  try {
    const r = await doIt(false);
  } catch (err) {
    console.log(err);
  }
})();
```

### currying javascript
```
function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

alert( curriedSum(1)(2) ); // 3
```

```
console.log(multiply(10)(2))

function multiply(x) {
  return (y) => {
    return x*y
  }
}
```

```
const curryUnaryFunction = a => b => c => a + b + c;
curryUnaryFunction (1) (2) (3); // returns the number 6
```

#### What is the difference between Call, Apply and Bind?
The difference between Call, Apply and Bind can be explained with below examples, 
Call: The call() method invokes a function with a given this value and arguments provided one by one
```
var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

invite.call(employee1, 'Hello', 'How are you?'); // Hello John Rodson, How are you?
invite.call(employee2, 'Hello', 'How are you?'); // Hello Jimmy Baily, How are you?

```
Apply: Invokes the function and allows you to pass in arguments as an array
```
var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
invite.apply(employee2, ['Hello', 'How are you?']); // Hello Jimmy Baily, How are you?
```

bind: returns a new function, allowing you to pass in an array and any number of arguments
```
var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
inviteEmployee2('Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
```
Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for comma (separated list) and Apply is for Array. Whereas Bind creates a new function that will have this set to the first parameter passed to bind().

#### let vs var
```
function userDetails(username) {
   if(username) {
     console.log(salary); // undefined(due to hoisting)
     console.log(age); // error: age is not defined
     let age = 30;
     var salary = 10000;
   }
   console.log(salary); //10000 (accessible to due function scope)
   console.log(age); //error: age is not defined(due to block scope)
}
```

It is been available from the beginning of JavaScript	VS Introduced as part of ES6
It has function scope	VS It has block scope
Variables will be hoisted	VS Hoisted but not initialized

### anonymous function expression (the name is not used):
```
var myFunction = function() {
    statements
}
```

```
var myFunction = function namedFunction(){
    statements
}

```
```
(function() {
    statements
})();
```

### Function Declaration vs Function Expression
Function Declaration
```
foo(); // 'FOOOOO'
function foo() {
  console.log("FOOOOO");
}
```
Function Expression
```
foo(); // Uncaught TypeError: foo is not a function
var foo = function() {
  console.log("FOOOOO");
};
```


