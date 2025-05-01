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
