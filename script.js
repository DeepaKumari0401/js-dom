//how to select a query in dom
var a =document.querySelector("h1")
console.log(a)//with this we can select this in the console and work on it

//how to change the item in the query in html
var b=document.querySelector("h1")
a.innerHTML="Akanksha Sinha"

//how to change the item in css
var b=document.querySelector("h1")
a.style.color="magenta"
a.style.backgroundColor="Pink"

//eventListener
var b=document.querySelector("h1")
a.addEventListener("click", function(){
    a.innerHTML="Khadi hu aaj bhi wahi";
    a.style.color="yellow"
    a.style.backgroundColor="black"
})

//Simple example of bulb or whatever clicking on the same button
var bulb=document.querySelector("#bulb")
var btn=document.querySelector("button")
var flag=0;
btn.addEventListener("click", function(){
    if(flag==0){
        bulb.style.backgroundColor="yellow"
        console.log("clicked")
        flag=1
        btn.innerHTML="Off"
    }
    else{
        bulb.style.backgroundColor="transparent"
        console.log("Again clicked")
        flag=0
        btn.innerHTML="On"
        
    }
})

//selecting multiple events at the same time
var h=document.querySelectorAll("h2")
h.forEach(function(e){
    console.log(e)
})

//target the element by id
document.getElementById("box")
//target the element by class
document.getElementsByClassName("box")

var box=document.querySelector("#box")
box.innerHTML="<h1>hello</h1>";//to change the html 
box.textContent="<h1>hello</h1>";// to actually write the exact same content as given
console.log("Deepa")
setTimeout(function(){
    console.log("Deeps")
},2000)

//making a new promise
var ans= new Promise((res,rej) => {
    if (false){
        return res();
    }
    else {
        return rej()
    }
})
ans
.then(function(){
    console.log("solve ho gaya tha ")
})
.catch(function(){
    console.log("nahi hua tha ")
})
//user will ask for a number between 0 se 9 and if the number is below 5 reslove if not reject
var ans=new Promise((res,rej)=>{//it is a constructor function and cannot be invoked without new
    //how does this gives no between 1 to 10
    if (n<5){
        return res()
    }
    else{
        return rej()
    }

})
ans.then(function(){
    console.log("below")
})
.catch(function(){
    console.log("above")
})

//example promise chaining
var ans=new Promise(function(res,rej){//no other word can be used instead of Promise.you cannot replace Promise with another word when creating a new promise.Promise is the name of a built-in JavaScript class.If you write new SomethingElse(), JavaScript will look for a class called SomethingElse, which won’t exist unless you define it.
    
    
    return res("sabse pehle ghar par aao")
})
var p2=ans.then(function(data){//second promise ka data yaha save hoga
    console.log(data)
    return new Promise(function(res,rej){
        return res("gate kholo aur gate lagao")
    })
})
var p3=p2.then(function(data){
    console.log(data)
    return new Promise (function(res,rej){
        return res ("khana pakao aur kaho")
    })
})
var p4=p3.then(function(data){
    console.log(data)
    return new Promise (function(res,rej){
        return res ("tv dekho aur so jao")
    })
})

//async and await
async function abcd() {
    let raw=await fetch("api")
    let ans =await raw.json()//async code ke result ke liye wait karna padta hai 
    console.log(ans)
}
abcd()
