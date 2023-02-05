

let Title = "Amro"
Desc = " Web Developer ";
Age = 25;




let  Card = `

<div>
<h3> Hello ${Title}</h3>
<p>  ${Desc}</p>
<span>  ${Age}</span>
</div>

`


document.write(Card.repeat(5));

// ###############################################

//NUMBER

/*
Number Methods
- Two Dots To Call A Methods
- toString()
- toFixed()
- parseInt()
- parseFloat()
- isInteger() [ES6]
- isNaN() [ES6]
*/

// console.log((100).toString());
// console.log(100.10.toString());

// console.log(100.554555.toFixed(2));

// console.log(Number("100 Osama"));
// console.log(+"100 Osama");
// console.log(parseInt("100 Osama"));
// console.log(parseInt("Osama 100 Osama"));
// console.log(parseInt("100.500 Osama"));
// console.log(parseFloat("100.500 Osama"));

// console.log(Number.isInteger("100"));   
// console.log(Number.isInteger(100.500));
// console.log(Number.isInteger(100));

// console.log(Number.isNaN("Osama" / 20));








/*
Math Object
- round()
- ceil()
- floor()
- min()
- max()
- pow()
- random()
- trunc() [Es6]
*/

// console.log(Math.round(99.2));
// console.log(Math.round(99.5));

// console.log(Math.ceil(99.2));
// console.log(Math.floor(99.9));

// console.log(Math.min(10, 20, 100, -100, 90));
// console.log(Math.max(10, 20, 100, -100, 90));

// console.log(Math.pow(2, 4));
// console.log(Math.random());
// console.log(Math.trunc(99.5));


// ###############################################

// STRING


/*
String Methods
- Access With Index
- Access With charAt()
- length
- trim()
- toUpperCase()
- toLowerCase()
- Chain Methods
*/

// let theName = "  Ahmed  ";

// console.log(theName);
// console.log(theName[1]);
// console.log(theName[5]);

// console.log(theName.charAt(1));
// console.log(theName.charAt(5));

// console.log(theName.length);
// console.log(theName.trim());

// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());

// console.log(theName.trim().charAt(2).toUpperCase());





/*
String Methods
- indexOf(Value [Mand], Start [Opt] 0)
- lastIndexOf(Value [Mand], Start [Opt] Length)
- slice(Start [Mand], End [Opt] Not Include End)
- repeat(Times) [ES6]
- split(Separator [Opt], Limit [Opt])
*/

// let a = "Elzero Web School";

// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 8));
// console.log(a.indexOf("o")); // 5
// console.log(a.lastIndexOf("o")); // 15

// console.log(a.slice(2, 6));
// console.log(a.slice(-5, -3));

// console.log(a.repeat(5));

// console.log(a.split("", 6));





// /*
//   String Methods
//   - substring(Start [Mand], End [Opt] Not Including End)
//   --- Start > End Will Swap
//   --- Start < 0 It Start From 0
//   --- Use Length To Get Last Character
//   - substr(Start [Mand], Characters To Extract)
//   --- Start >= Length = ""
//   --- Negative Start From End
//   - includes(Value [Mand], Start [Opt] Default 0) [ES6]
//   - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
//   - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
// */

// let K = "Elzero Web School";

// console.log(K.length);

// console.log(K.substring(2, 6));
// console.log(K.substring(6, 2));
// console.log(K.substring(-10, 6)); // 0 - 6
// console.log(K.substring(a.length - 5, a.length - 3));

// console.log(K.substr(0, 6));
// console.log(K.substr(17));
// console.log(K.substr(-3));
// console.log(K.substr(-5, 2));

// console.log(K.includes("Web"));
// console.log(K.includes("Web", 8));

// console.log(K.startsWith("E"));
// console.log(K.startsWith("E", 2));
// console.log(K.startsWith("zero", 2));

// console.log(K.endsWith("l"));

// ###############################################


//ARROW FUNCTION

// let amro = function() {
//     return 145;
// }

// let leen = () => 5454;

// console.log(amro());
// console.log(leen());


// let samer = function () {
//     return 54;
// }
// console.log(samer());


// let game = function() {
//     return "basketball";
// }
// let gamee = () => "Football";
// console.log(game())
// console.log(gamee())


// let student = function(grade) {

//     return grade+100;
// }
// console.log(student(44));

// let stu = (gradee) => gradee*gradee;
// console.log(stu(44));


// let gg = function (a ,b) {
//     return a+=100+b;
// }
// console.log(gg(4,20));

// let vv = ( d ,g) => d=g+40;
// console.log(vv(4,20));

// ###############################################

//IF CONDITION

let theName = "Amro";
let theGender = "Male";
let theAge = 25;

if (theGender === "Male") {
console.log("Mr");
} else {
console.log("Mrs");
}


// if ( Game = "Basketball") {
//         console.log("Player");
//     } else {
//             console.log("Coach");
//         }
    
let Game = "DDDD";
Game === "Basketball" ? console.log("Player") : console.log("Coach");

let result = Game === "Basketball" ? "Player" : "Coach";

document.write(result);

// ###############################################



let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];


// for (let i = 0; i < myNums.length; i++) {

//     newArray.push(myNums[i] + myNums[i]);
// }

// console.log(newArray);


// let add = myNums.map(function(ele,i,arr){

//     return ele+ele;
// } , 5);
// console.log(add);




// let amr = myNums.map(function(ele,i,arr){

//     return ele*ele;
// });
// console.log(amr);



// let amro = function() {
//     return 100;
// }


// let am = function(ele) {
//     return 300+ele;
// }
// console.log(am(10));


// let aro = (ele) => 200+ele;
// console.log(aro(10));

// let aaa = myNums.map(function(ele) {

//     return ele+(ele*ele);
// }) 
// console.log(aaa);



// function dddd(ele) {
//     return ele*34;
// }

// let dd = myNums.map(dddd);
// console.log(dd);



// let Name = "Amro";
// let AGE = [25 , -45 , -22 , -11];
// let ignoreNUM = "Am54ro425";


// let sw = Name.split("").map(function(ele) {
//     return  ele === ele.toUpperCase() ? ele.toLowerCase() : 
//      ele.toUpperCase();

// }).join("");
// console.log(sw);

// let convert = AGE.map(function(ele) {
// return -ele
// });
// console.log(convert);

// let Gnum = ignoreNUM.split("").map(function(ele) {
// return parseInt(ele) ? ele : "";
// }).join("");
// console.log(Gnum);

// //Arrow
// let Gm = ignoreNUM.split("").map((ele) => parseInt(ele) ? ele : "").join("");
// console.log(Gm);

// let num = ignoreNUM.split("").map(function(ele) {
// return isNaN(parseInt(ele))  ? ele : "";
// }).join("");
// console.log(num);



//FILLTER

let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let numbers = [11, 20, 2, 5, 17, 10];
let sentence = " Amro Fod AL-Wageei Too Mch";


// let friend = friends.filter(function(ele) {
//     return ele.startsWith("S");
// });
// console.log(friend);

// let odd = numbers.filter(function(ele) {
//     return ele % 2 == 1
// });
// console.log(odd);

// let even = numbers.filter(function(ele) {
//     return ele % 2 == 0
// });
// console.log(even);


// let words = sentence.split(" ").filter(function(ele) {
//    return ele.length >= 4;
// }).join(" ");
// console.log(words);



let mix = "A13BS2ZX";


// let drbaaa = mix.split("").filter(function(el) {


// return (parseInt(el)) ? el : "";
// }).map(function(el){
//     return el*el;
// }).join("");
// console.log(drbaaa);


//REDUCE

let nums = [10, 20, 30, 40, 50];


// let red = nums.reduce(function(acc , val , index , arr ){

//     return acc+val;
// } , 5);
// console.log(red);


//FOREACH


// ###############################################
// ###############################################
// ###############################################

// Note ( Template Letranl : All inside backtik `` )
// like  return ` Hello ${this.b} Your Salary is ${this.c} `


//OOP


//OBJECT
const userOne = {

id     : 1 ,
name   : "Amro" ,
salary : 4000 ,
};
const userTwo = {
id     :  2,
name   :  "Leen",
salary :  6000,
};
const userThree = {
id     :  3,
name   :  "Salam",
salary :  7000,
};

//Constructor

function User (id , name , salary) {
this.a = id;
this.b = name;
this.c = salary+77;
}

//#1
// class User {
//     constructor(id, name, salary) {
//         this.a = id;
//         this.b = name;
//         this.c = salary + 77;
//     }
// }

// let user_one = new User ( 4 , "Haya" , 8000)
// let user_two = new User ( 5 , "Shahed" , 9000)
// let user_three = new User ( 6 , "Sarah" , 10000)

// console.log(user_one.a);
// console.log(user_two.c);
// console.log(user_three.b);

//#2
class Player {
constructor(id, name, coach) {
    this.a = id;
    this.b = name;
    this.c = coach;
}

writeReport() {
    return ` Hello ${this.b} Your Salary is ${this.c} `
}
}

let playerOne = new Player(1 , "Amro" , "Seeka")
let playerTwo = new Player(2 , "Rahaf" , "Ahmad")
let playerThree = new Player(3 , "Sivla" , "Fuad")

// console.log(playerOne instanceof Player); //TRUE
// console.log(playerOne.constructor === Player); //TRUE

// console.log(playerOne.writeReport); //Native Code
// console.log(playerTwo.writeReport());


// Mona 
class Car {


constructor( model , make , year , cost , min , max ) {
    this.m = model;
    this.ma = make;
    this.y = this.carAge(year);
    this.c = cost;
    // this.min = this.carCost(min);
    // this.max = this.carCost(max);
    this.random=this.carCost(min,max);
}

getCarInfo() {
    return ` This is Last Updated Model in  ${this.m} and its MAKE in 
    ${this.ma} and the age of CAR is ${this.y} and this COST is 
    ${this.c} ${this.random} `;
}

carAge(year) {
    return 2023 -year; 
}

carCost(min,max) {
    // return Math.random(min,max);
    return Math.random() * (max - min) + min;
}
}


let CarOne = new Car ( 2022 , "Jordan" ,2012  ,45000 ,500 ,1000);
console.log(CarOne.getCarInfo());
// console.log(carCost());

//#3
class Names {
constructor(id, name, salary) {

    this.a = id;
    this.b = name || "Unkown";
    this.c = salary > 500 ? salary + 30 : salary;
    this.report = function () {
        return ` Hello ${this.b} Your Salary is ${this.c} `;
    };
}
}

let NameOne = new Names(1 , "Amro" , 550)
let NameTwo = new Names(2 , "" , 490)

// console.log(NameOne);
// console.log(NameTwo);
// console.log(NameOne.report());
// console.log(NameTwo.report); //Native Code


//#4
class Key {
constructor(id, salary) {
    this.a = id;
    this.b = salary;
}

rrr() {
    return ` This is you id =  ${this.a}`;
}
updateID(NewID) {
    this.a = NewID;
}
}

let KeyOne = new Key ( 1 , 444 )
let KeyTwo = new Key ( 2 , 888 )

// console.log(KeyOne);
// console.log(KeyTwo);
// console.log(KeyOne.rrr());

// console.log(KeyTwo.a);
// KeyTwo.updateID(5)
// console.log(KeyTwo);



//#5 String & Number

let strOne = "Salah";
let strTwo =  new String("Salah");


// console.log(typeof strOne);  //String
// console.log(typeof strTwo);  // Object

// console.log( strOne instanceof String);
// console.log( strTwo instanceof String);

// console.log( strOne.constructor === String);
// console.log( strTwo.constructor === String);

// console.log(String.prototype);

//Extend String Feature
// String.prototype.AddBeforeAndAfter = function (val) {
//     return ` .${this}.`;
// }
// let myString = "Amro";
// console.log(myString.AddBeforeAndAfter());



let NumOne = 10;
let NumTwo =  new Number(20);

// console.log(typeof NumOne);  //Number
// console.log(typeof NumTwo);  // Object

// console.log( NumOne instanceof Number);
// console.log( NumTwo instanceof Number);

// console.log( NumOne.constructor === Number);
// console.log( NumTwo.constructor === Number);

// console.log(Number.prototype);



//#6  Static

class Student {
static count = 0;
constructor(id, name, major) {

    this.a = id;
    this.b = name;
    this.c = major;
    Student.count++;
}

static sayhello() {
    return ` Hello From Class`;
}

static CountMember() {
    return ` ${this.count++} Member Created `;
}
}

let stu = new Student ( 1 , "Abdeen" , "Pharmacy");
let stU = new Student ( 2 , "Mostafa" , "Pharmacy");
let Stu = new Student ( 3 , "Ahmad" , "Pharmacy");

// console.log(stu);
// console.log(stu.count);
// console.log(Student.count);
// console.log(Student.sayhello());
// console.log(Student.CountMember());



//#7  Class Inheritance

class USERS {
constructor (id , name) {
    this.i = id;
    this.n = name;
}
 SayHI() {
    return ` Hi ${this.n} `;
}
}

class ADMIN  extends USERS {
constructor ( id , name , permission ) {
    super(id , name);
    this.p = permission;
}
}

class SuperAdmin extends ADMIN {

constructor(id , name , permission , abality) {
    super(id , name , permission);
    this.a = abality;
}
}

let USER_ONE  = new USERS ( 1 , "Tareq");
let ADMIN_ONE = new ADMIN( 1 , "Ahmad" , 2);
let Super_ADMIN_ONE = new SuperAdmin( 1 , "Rama" , 1 , "Full");

// console.log(USER_ONE);
// console.log(ADMIN_ONE);
// console.log(Super_ADMIN_ONE);



//#8 Encapsulation not completed


class usersss {
#s;
constructor (id , name , salary) {
    this.i = id;
    this.n = name;
    this.#s = salary;
}

Change() {
    return parseInt(this.#s);
}
}


let userNew = new usersss ( 1 , "Lamies" , 400);
let userNew2 = new usersss ( 2 , "Rama" , "JD1000JD");

console.log(userNew);
console.log(userNew.Change() * 0.5);






//#9 Prototype

class Sereen {
constructor ( Major , Location) {
    this.m = Major;
    this.l = Location; 
}
FName() {
    return ` Hala Walah fi  ${this.l}`;
}
SName() {
    return ` Hala Walah fi  ${this.l}`;
}
}

let NewSereen = new Sereen ( "Web Developer" , "Aqaba");
console.log(NewSereen);

console.log(Sereen.prototype);
// console.log(String.prototype);
// console.log(Number.prototype);

Sereen.prototype.LName = function() {
return ` Ya Salaam  ${this.l}`;
};

Object.prototype.hhhh = "HEHEHEHHEHHEH";
console.log(NewSereen.hhhh);


//Extend String Feature
String.prototype.AddBeforeAndAfter = function (val) {
return ` .${this}.`;
}
let myString = "Amro";
console.log(myString.AddBeforeAndAfter());






//#10 Meta Data

const myObject =  {
Name : "Amro",
Age : 25, 
}

Object.defineProperty(myObject, "Salary", {
writable: false,  //Write
enumerable: true, //Loop
configurable: false,
value: 3000,
});

myObject.c = 1000;

console.log(delete myObject.c);

for (let prop in myObject) {
console.log(prop, myObject[prop]);
}

console.log(myObject);



//Chain Meta

// const myObject = {
//     a: 1,
//     b: 2,
//   };

Object.defineProperties(myObject, {
c: {
  configurable: true,
  value: 3,
},
d: {
  configurable: true,
  value: 4,
},
e: {
  configurable: true,
  value: 5,
},
});

console.log(myObject);

console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject));


