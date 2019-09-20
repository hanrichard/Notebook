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


