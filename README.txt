https://medium.com/@rossbulat/test-driven-development-in-react-with-jest-and-enzyme-2a6cf2cc3071


https://dev.to/theactualgivens/testing-react-hook-state-changes-2oga



Cookie, localStorage, and sessionStorage are all the simple data storage ways for client-side storage. Cookie is more like an old school way to handle the simple data stored on the client-side. In HTML5, web storage, such as localStorage or sessionStorage is introduced and it’s also easier to use.


##Cookies
Persistence: user can set expiration time for each cookies.
Storage: there’s only about 4KB space for entire cookie data.
Traffic: data needs to be sent back to the server for all the HTTP requests, which increases the traffic between client and server.
Works for old browsers.

##localStorage
Persistence: data exist until it’s deleted
Storage: available space increase to around 5 MB
Traffic: less traffic because not all of the HTTP requests need to send data back to the server
Domain: data only stays in the same domain, which means if data is stored on website A, next time it can only be accessed on website A. To be clear of the domain used here, it means the same website field. For example, whichever different posts or different personal pages in Facebook that you are browsing are all under facebook.com. As a result, those pages are all under the same domain.

##sessionStorage
sessionStorage is similar to localStorage. The only difference will be the persistence of the data. For sessionStorage, once user leaves the domain, such as closing the tabs or windows, the sessionStorage is emptied.
