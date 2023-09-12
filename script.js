const myDoc = document.getElementById("header");
console.log(myDoc);

//byClass
const byClass = document.getElementsByClassName("para");
console.log(byClass);

//Tagline
const para = document.getElementsByTagName("p");
console.log(para);

//QuerySelector  class
const query = document.querySelector(".head");
console.log(query);

//querySelectorAll id
const id = document.querySelectorAll("#header");
console.log(id);

const id1 = document.querySelectorAll("#header");
console.log(id1);

// DOM properties
// 1. innerHTML
// 2. innerText
// 3. textContent

console.log(myDoc.innerHTML);
myDoc.innerHTML="<div>Hello <p>world!!</p></div>";

console.log(myDoc.innerText);
myDoc.innerText="class G4 learning DOm";

//textContent
console.log(myDoc.textContent);

//style
myDoc.style.color="yellow";
myDoc.style.fontSize="50px";

// get attribute
console.log(myDoc.getAttribute("id"));
console.log(byClass[0].getAttribute("class"));

//set attribute
myDoc.setAttribute("class","myclass");
console.log(myDoc);

//classList
// 1. Add
// 2. Remove
// 3. Toggle

console.log(myDoc.classList);
console.log(myDoc.classList);

const classLis=document.querySelector("#header");
console.log(classLis.classList);

classLis.classList.add("g4");
classLis.classList.add("randomClass");

const btn=document.querySelector(".btn");
const form=document.querySelector(".myForm");
btn.addEventListener("click",function(){
   // form.classList.remove("hide");
   form.classList.toggle("hide");
})