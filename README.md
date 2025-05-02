# what is dom(Document Object Model)

# 4 pillars of DOM
    a.selection of an element 
    document.querySelector("h1")-used to select the document i.e- html and the query in the document -h1,

    b.Changing HTML
    C.Changing css
    D.EventListener

# setTimeout-

# setInterval
# Reactjs- 
    a library for web and native user interface devloped by facebook. library is used for a single feature(help to customize the features of the website) while framwork is a structured way to do things(for making frontend, backend everything).react has been merged with the nodejs which is a framework due to which we can do both client side and server side rendering

# sync and async js kya hota hai?
    sync-ek ke baad dusra hoga.jab tk ek command nahi ho jata dusra nahi hoga
    async- sare kaam ek saath start kar do aur jiska jawab pehle aajae wo de dena.there is no order jo jitna jaldi ho jaega uska answer apne ko mil jaega

# async js ky hai?
In JavaScript, asynchronous code refers to code that allows the program to continue executing other tasks while waiting for something to finish, like fetching data from an API or reading a file.
    setTimeout
    setInterval
    promises
    fetch
    await
    axios
    XMLHttpRequest
    
    if we are using any of these then the code is asynchronous else synchronous
    kai baar hamara final code  depend hota hai kisi aur ke server pe, is case me hame nahi pata hota ki ans kab tak laut ke aaega uske server se, to hm ky nahi kar sakte is writing sync code. isko face karne ya bachne ke liye hm likhte hai async code taki blocking na ho aur jab bhi ans aaye hamara answer ke respect me chanlne wala code chal jaye. async code ka main motive hota hai ki un cases me jinmein hame pata nahi hota is cod eka answer kitni der mei aaega to jab bhi ans aa jae uske ans ke respect me koi particular code chala dena
    Ex-facebook se photo leke aao aur jab aa jae to
    show kar dena
    ex-setTimeout(callback,time in miliseconds)--it is called callback function cause it will be called back after the given interval of time
# js is not asynchronous
    js cannot do multitasking, singlethreading not multithreading. there are two things mainstack and sidestack . jo bhii main stack me hota hai wo output karta hai and jo bhi side stack par hota hai wo behind the scenes processing kar sajta hai aur jab uski processing conplete ho jati hai tb main stack me lake chalaya ja sakta hai.jab main stack khali hota hai tb side stack check hota hai

 **   interview- event loop main stack me side stack se data le ke aata hai
# single threading and multithreading
    js is single thread- capable of doing a single computation at a time.
# callbacks 
    hamesha async code me ans aane pe chalta hai, callbacks were hard to handle so promises were found and that became complex too so async and await were found
    ex-request on facebook gives back the result when accepted

used for receiving things aur ans chalane ke liye
    then catch
    callbacks
    async await
 callback hamesha ek function hota hai, ye sirf jab chalta hai jab async code ka completion ho jata hai,async code likhne ke baad unka ans chalane ke liye hota hai callbacks 

# promises 
    
    then- and catch
    then used when the promise is fulfilled .promises and statements where it runs when it is resolved, if rejected it goes to catch
<!-- # try and catch -->
# async and await
    koi bhi esa function jisme app async code likhenge aur promises ka use karenge to then aur catch use karna parega. we can use async and await instend
# 5 use cases in real world
    node me jav database likhte hai mongodb ke help se tb use hota hai
    fetch-to give call to backend to give a data
    setTimout,setInterval - used when 3rd party is involved in it
# concurrency-
    js mein sync and async code ek saath process ho raha tha ye hai concurrency. dono code ek saath chal rahe the 
# parallism- jada focus karta hai different processorsand unke cores par kaam chalane par

# throttling  -kisi code ka no of executions control karna

