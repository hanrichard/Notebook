https://medium.com/@rossbulat/test-driven-development-in-react-with-jest-and-enzyme-2a6cf2cc3071


https://dev.to/theactualgivens/testing-react-hook-state-changes-2oga



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


