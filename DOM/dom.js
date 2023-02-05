

//#1

let idElement = document.getElementById("amro");
let TagElements = document.getElementsByTagName("p");
let ClassElement = document.getElementsByClassName("shandaq");
let QueryElementOne = document.querySelector(".my-span");
let QueryElementAll = document.querySelectorAll(".my-span");


// console.log(idElement);
// console.log(TagElements[1]);
// console.log(ClassElement);
// console.log(QueryElementOne);
// console.log(QueryElementAll);

// console.log(document.title);
// console.log(document.body);
// console.log(document.links[1].href);
// console.log(document.forms[0].two.value);
// console.log(document.images);


// ###########################################################

//#2 innerHTML + textContent + innerText ( Get & Set )


myInner = document.querySelector(".para");
// console.log(myInner);
// console.log(myInner.innerHTML);
// console.log(myInner.textContent);

myInner.innerHTML = `Rama Khaled <span> Family </span>`;
myInner.textContent = `Leen Mhmoud <span> gggg </span>`;

// console.log(myInner.innerHTML);
// console.log(myInner.textContent);

// document.links[0].href = "https://amazon.com";
// document.links[0].className = "yes";

// document.images[0].src = "https://pwc.com";
document.images[0].id = "No";
document.images[0].alt = "PWC";
document.images[0].title = "hala";


myGetElement = document.querySelector(".test");
// console.log(myGetElement);

// myGetElement.innerHTML = "TEST <p> TESTT</p>";
// myGetElement.textContent = " This is Get ";

// console.log(myGetElement.getAttribute("class"));
// console.log(myGetElement.getAttribute("id"));

// myGetElement.setAttribute("class" , "Amro");
// myGetElement.setAttribute("id" , "Salah");
// myGetElement.setAttribute("Grand" , "Othman");
// myGetElement.textContent = "Al-Wageei";


// ###########################################################


//#3 Check Attribute 

// - Element.attributes
// - Element.hasAttribute
// - Element.hasAttributes  ( retrun boolean true or false )
// - Element.removeAttribute


// CheckElement = document.querySelector(".has").attributes;
// console.log(CheckElement);

// CheckElementttt = document.querySelector(".if");
// console.log(CheckElementttt);

// if (CheckElementttt.hasAttribute("title")) {
//     if (CheckElementttt.hasAttribute("title") == "") {
//         CheckElementttt.removeAttribute("title");
        
//     } else {
//         CheckElementttt.setAttribute("title" , "my-title");
//     }
// }else {
//     console.log("NO");
// }

// console.log(CheckElementttt);

// if (CheckElementttt.hasAttributes() ) {
//     console.log("Has Attribute");
// }

// HasElement = document.getElementsByTagName("div");

// if (HasElement[3].hasAttributes()) {
//     console.log("Has Attribute");
// } else {
//     console.log("Dont Has Attribute");
// }



// ###########################################################



//#4+5 Create Element

// - createElement
// - createComment
// - createTextNode
// - createAttribute
// - appendChild


// let CreateElement = document.createElement("div");
// let CreateAttribute = document.createAttribute("Zerooo");
// let CreateText = document.createTextNode("Amro Al-Wageei");
// let CreateComment = document.createComment("I'm So Proud");

// // CreateElement.setAttribute("Zero" , "ffff");

// CreateElement.className = "Web";

// CreateElement.setAttribute("name" , "Amro");
// CreateElement.setAttributeNode(CreateAttribute);

// //Appent text and comment  to element
// CreateElement.appendChild(CreateText);
// CreateElement.appendChild(CreateComment);

// //Appent element to body 
// document.body.appendChild(CreateElement);


// console.log(CreateElement);


//#Challenge Zero

// let divv = document.createElement("div");
// let Heading = document.createElement("h3");
// let Paragraph = document.createElement("p");

// let TexTHeading = document.createTextNode("Web Developer");
// let TexTParagraph = document.createTextNode("El Zero Web School");

// divv.className = "Programmer";
// Heading.appendChild(TexTHeading);
// Paragraph.appendChild(TexTParagraph);

// divv.appendChild(Heading);
// divv.appendChild(Paragraph);

// for (let i = 0; i <= 5; i++) {
    
//     document.body.appendChild(divv);
// }


// console.log(divv) ;



// ###########################################################




//#6 Deal With Childrens

// - children
// - childNodes
// - firstChild
// - lastChild
// - firstElementChild
// - lastElementChild


let DealWithChild = document.querySelector(".child");

// console.log(DealWithChild.children);
// console.log(DealWithChild.childNodes);
// console.log(DealWithChild.childNodes[2]);

// console.log(DealWithChild.firstChild);
// console.log(DealWithChild.lastChild);

// console.log(DealWithChild.firstElementChild);
// console.log(DealWithChild.lastElementChild);

// console.log(DealWithChild);




// ###########################################################



//#7 Dom Event 

// onclick , oncontextmenu ,  onmouseenter , onmouseleave "Button"
// onload , onscroll , onresize  "Window"
// onfocus , onblur , onsubmit

// let MyBtn = document.getElementById("btn");

// MyBtn.onclick = function() {
//     console.log("Click");
// }
// MyBtn.oncontextmenu =function () {
//     console.log("Menu");
// }
// MyBtn.onmouseenter = function () {
//     console.log("Enter");
// }
// MyBtn.onmouseleave = function() {
//     console.log("Leave");
// }

// window.onload = function () {
//     console.log("Load");
// }
// window.onscroll = function(){
//     console.log("Scroll");
// }
// window.onresize = function(){
//     console.log("Re-Size");
// }



// let MyTextt = document.getElementById("text"); 

// MyTextt.onfocus = function() {
//     console.log("focus");
// }
// MyTextt.onblur = function() {
//     console.log("Blur");
// }


// let MySubmit = document.getElementById("submit");

// MySubmit.onsubmit = function() {
//     console.log("Submit");
// }

// console.log(MySubmit);



// ###########################################################




//#8 Validate Form And Prevent Default

// document.links[2].onclick = function (event) {
//     console.log(event);
//     event.preventDefault();
// };


// let userInput = document.querySelector("[name='userName']");
// let ageInput = document.querySelector("[name='age']");
// let passInput = document.querySelector("[name='pass']");

// // console.log(userInput);
// // console.log(ageInput);
// // console.log(passInput);

// document.forms[2].onsubmit = function (e) {

//     let userValid = false;
//     let ageValid  = false;
//     let passValid  = false;

//    console.log(userInput.value);
//    console.log(userInput.value.length);

//    if () {

//    }

//     if (userValid === false || ageValid === false || passValid  === false ) {
//         e.preventDefault();
//     }
// };


let userInput = document.querySelector("[name='userName']");
let ageInput = document.querySelector("[name='age']");

// console.log(userInput);
// console.log(ageInput);
// console.log(passInput);

document.forms[2].onsubmit = function (s) {
   
    //1
    let userValid = false;
    let ageValid  = false;

    
    // console.log(userInput.value);
    // console.log(userInput.value.length);


    if (userInput.value !== "" && userInput.value.length <=5) {
        // console.log("ValiddddIN");
        userValid = true;
    } else {
        // console.log("NOT Validddd");
    }

    if (ageValid.value !== "") {
        // console.log("ValidddAGE");
        ageValid  = true;
    }


    //2
    if (userValid === false || ageValid === false ) {
        
        s.preventDefault();
    }
}



// ###########################################################




//#9 Event Simulation

// - click , focus , blur

let one = document.getElementById("one");
let Two = document.getElementById("two");
let Three = document.getElementById("three");
let Four = document.getElementById("four");
let Five = document.getElementById("five");

// console.log(one);
// console.log(Two);

// window.onload = function () {
//     one.focus();
// };

one.onblur = function () {
    Two.focus();
}
Two.onblur = function () {
    Three.focus();
}
Three.onblur = function () {
    Four.focus();
}
Four.onblur = function () {
    Five.focus();
}
Five.onblur = function () {
    submit.focus();
}



// ###########################################################





//#10 Class List Object And Methods 

// - classList.  => length , contains , item(index)
//  add , remove => Tokens + toggle => One Tokens


let elemnttt = document.getElementById("my-divv");
// console.log(elemnttt);


// console.log(elemnttt.classList);
// console.log(typeof  elemnttt.classList);

// console.log(elemnttt.classList.length);
// console.log(elemnttt.classList.contains("amro"));
// console.log(elemnttt.classList.contains("one"));
// console.log(elemnttt.classList.item("4"));

// elemnttt.onclick = function () {
//     elemnttt.classList.add("ccc" , "bbb");
// };
// elemnttt.onclick = function () {
//     elemnttt.classList.remove("one" , "four");
// };
// elemnttt.onclick = function () {
//     elemnttt.classList.toggle("kareem");
// };



// ###########################################################


//#11 CSS Styling And Stylesheets


let SElement = document.querySelector(".styleDom");


// Inline Style
// SElement.style.color = "red";
// SElement.style.backgroundColor = "green";
// SElement.style.cssText = " background: blue; color: red; opacity: 0.5";

// SElement.style.removeProperty("color");
// SElement.style.setProperty("font-size" , "40px" , "important");



// console.log(document.styleSheets[0].getcssRules[0]);


// ###########################################################


// #12 Deal With Elements

// - before [Element || String]
// - after [Element || String]
// - append [Element || String]
// - prepend [Element || String]
// - remove



// let DealElement = document.querySelector(".deal");
// let DealP       = document.querySelector(".dealP");

// DealElement.before("Amro");
// DealElement.before(DealP);
// DealElement.after("Salah");


// DealElement.append(" ..My-Name..");
// DealElement.prepend(" ..My-Email..");

// DealP.remove();
// console.log(DealElement);
// console.log(DealP);

// ###########################################################

// #13 DOM Traversing

// - nextSibling ,  previousSibling
// - nextElementSibling , previousElementSibling
// - parentElement



let sapnTravers = document.querySelector(".twooo");


// console.log(sapnTravers.nextSibling);
// console.log(sapnTravers.nextElementSibling);
// console.log(sapnTravers.previousSibling);
// console.log(sapnTravers.previousElementSibling);
// console.log(sapnTravers.parentElement);


// sapnTravers.onclick = function () {
//     // sapnTravers.parentElement.remove();
//     sapnTravers.parentElement.style.opacity = 0.5;
//     sapnTravers.parentElement.style.color = "red";
// }

// ###########################################################



// #14 DOM Cloning
// - cloneNode(Deep)  
// Deep false ( Without text and element )  True ( With All  text and element)



// let MyParaClone = document.querySelector(".para-clone").cloneNode();
let MyParaClone = document.querySelector(".para-clone").cloneNode();
let MyDivClone = document.querySelector(".div-clone");




MyDivClone.appendChild(MyParaClone); // Para in Div
// MyParaClone.appendChild(MyDivClone); // Div in Para

// console.log(MyParaClone);

MyParaClone.id = `${MyParaClone.id}-test`;





// ###########################################################

// #15 addEventListener





// ###########################################################
