https://medium.com/@rossbulat/test-driven-development-in-react-with-jest-and-enzyme-2a6cf2cc3071


https://dev.to/theactualgivens/testing-react-hook-state-changes-2oga

https://www.edureka.co/blog/interview-questions/javascript-interview-questions/

Cookie, localStorage, and sessionStorage are all the simple data storage ways for client-side storage. Cookie is more like an old school way to handle the simple data stored on the client-side. In HTML5, web storage, such as localStorage or sessionStorage is introduced and it’s also easier to use.


## Cookies
Persistence: user can set expiration time for each cookies.
Storage: there’s only about 4KB space for entire cookie data.
Traffic: data needs to be sent back to the server for all the HTTP requests, which increases the traffic between client and server.
Works for old browsers.

## localStorage
Persistence: data exist until it’s deleted
Storage: available space increase to around 5 MB
Traffic: less traffic because not all of the HTTP requests need to send data back to the server
Domain: data only stays in the same domain, which means if data is stored on website A, next time it can only be accessed on website A. To be clear of the domain used here, it means the same website field. For example, whichever different posts or different personal pages in Facebook that you are browsing are all under facebook.com. As a result, those pages are all under the same domain.

## sessionStorage
sessionStorage is similar to localStorage. The only difference will be the persistence of the data. For sessionStorage, once user leaves the domain, such as closing the tabs or windows, the sessionStorage is emptied.

## What are the scopes of a variable in JavaScript?
The scope of a variable is the region of your program in which it is defined. JavaScript variable will have only two scopes.
• Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code.
• Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

## What is the purpose of ‘This’ operator in JavaScript?
The JavaScript this keyword refers to the object it belongs to. This has different values depending on where it is used. In a method, this refers to the owner object and in a function, this refers to the global object.

## What is Callback?
A callback is a plain JavaScript function passed to some method as an argument or option. It is a function that is to be executed after another function has finished executing, hence the name ‘call back‘. In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions.

## What is Closure? Give an example.
Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope. It gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created. To use a closure, simply define a function inside another function and expose it.

## What are the ways to define a variable in JavaScript?
Var – The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable. Example: var a =10; Variable declarations are processed before the execution of the code.
Const – The idea of const functions is not allow them to modify the object on which they are called. When a function is declared as const, it can be called on any type of object.
Let – It is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in.

## What is an event bubbling in JavaScript?
Event bubbling is a way of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements. The execution starts from that event and goes to its parent element. Then the execution passes to its parent element and so on till the body element.

## We use promises for handling asynchronous interactions in a sequential manner. 
They are especially useful when we need to do an async operation and THEN do another async operation based on the results of the first one. For example, if you want to request the list of all flights and then for each flight you want to request some details about it. The promise represents the future value. It has an internal state (pending, fulfilled and rejected) and works like a state machine.

A promise object has then method, where you can specify what to do when the promise is fulfilled or rejected.

You can chain then() blocks, thus avoiding the callback hell. You can handle errors in the catch() block. After a promise is set to fulfilled or rejected state, it becomes immutable.

Also mention that you know about more sophisticated concepts:

async/await which makes the code appear even more linear
RxJS observables can be viewed as the recyclable promises
Be sure that you can implement the promise, read one of the articles on a topic, and learn the source code of the simplest promise implementation.

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


## protype vs inheratie
If an object is created with an object literal var newObj = {}, it inherits properties from Object.prototype and we say its prototype object (or prototype attribute) is Object.prototype. If an object is created from a constructor function such as new Object (), new Fruit () or new Array () or new Anything (), it inherits from that constructor Object (), Fruit (), Array (), or Anything (). For example, with a function such as Fruit (), each time we create a new instance of Fruit var aFruit = new Fruit (), the new instance’s prototype is set to the prototype from the Fruit constructor, which is Fruit.prototype.

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


## What is 'this' keyword in JavaScript?

'This' keyword refers to the object from where it was called.

## Define event bubbling?
JavaScript allows DOM elements to be nested inside each other. In such a case, if the handler of the child is clicked, the handler of parent will also work as if it were clicked too.

## What are different types of Scope Chain available in JavaScript?
If we check in the program, every local scope has a connection with one or more scope in their back which forms a chain. This chain goes on until it met with the global scope which is the root of this hierarchy. As global scope doesn't have a parent, so it is on the top of the chain. This is known as scope chain.

The scope chain in JavaScript is basically used to resolve the values of the variable. Without this, it is difficult for a JavaScript to choose a certain value for a variable if there are many variables defined at different scopes.

## The Key Contrast Between Lexical and Dynamic Scoping: 
Lexical scope is write-time, whereas dynamic scope is run-time. Lexical scope care where a function was declared, but dynamic scope cares where a function was called from.





## trickies
var a = new Number(3)
var a = new String("123")

those are objects
String.prototype.isGreatThen = function(limit) {
  return String.length > limit
}

a.isGreatThen(3)
