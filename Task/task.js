// Classes

//#1
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



//#2
class Person {
    constructor(Fname , Lname , Age) {
        this.f = Fname;
        this.l = Lname;
        this.a =  Age;
    }
    getGreeting() {
        return ` Hi , I'm ${this.f} ${this.l} and I'm ${this.a} years old`;
    }
}

let FirstPerson = new Person ( "Amro" , "Salah" , 25);
let SecondPerson = new Person ( "Abd" , "Akram" , 27);

console.log(FirstPerson.getGreeting());
console.log(SecondPerson);




// ##################################################


//Convert to Arow Function 


    // function counterFunc(counter) {
    //     if (counter > 100) {
    //       counter = 0;
    //     }else {
    //       counter++;
    //     }
    //     return counter;
    //   }
      



    //#1
    let counterFunc =   counter =>  {
        counter > 100 ?  counter = 0 :  counter++; 
            return counter;
    }

    console.log(counterFunc(50));  
    
        
    //#2
    let nameAge = (name, age) => {
        console.log("Hello " + name);
        console.log("You are " + age + " years old");
    }
        
    nameAge("Amro",25);
    


// ##################################################

//Array Method

//#1

// let nums = [2, 4, 5];

let nums = [2, 4, 5];

// let squareNum = function (ele) {
//     ele*ele;
// }
// console.log(squareNum(2));

// let SumNum = function (ele) {
//     ele+ele;
// }
// console.log(SumNum(2));



// let amr = nums.reduce(function(ele){
    
// } );
// console.log(amr);


// let karam = nums.reduce((acc,cur)  =>  (cur*2)+acc / nums.length ,0);

// console.log(karam);


// #1
let newww = nums.reduce(function(acc , cur ){
return  (cur*2)+acc / nums.length;
}, 0);
console.log(newww);



// #2
let list=[1,2,3,4,5,6,7,8];

let Ten = list.map(function(ele){
        return ele*10;
});  
 console.log(Ten);


 // #3

 makeStrings = ([
    {  name : "Angelina Jolie",
       age  : 80  },

    {  name : "Eric Jones",
       age  : 26 },

    {  name : "Paris Hilton",
       age  : 5 },

    {  name : "Kayne West",
       age  : 22 },

    {  name : "Bob Ziroll",
       age  : 100 }
     ]); 


let Result = function () {
    makeStrings.forEach(ele => {
        (ele.age > 25 ) ? console.log(`${ele.name} is under age`) : 
         console.log(`${ele.name} can go to The Matrix`);
    });
}

console.log(Result(makeStrings));
    

// #4
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];

  

let avgs = persons.reduce((ac,a) => a.age + ac,0) / persons.length;

  console.log(avgs);



function abd(persons) {
    let x = persons.reduce ((acc,cur) => {

        acc += (cur.age);

        return (acc);
    }, 0) 
    return x/ persons.length
  }

  console.log(abd(persons));


// #5
evenOnly = [1,8,6,4,3 ,9]; 

let even = evenOnly.filter(function(ele) {
    return ele % 2 == 0;
});
console.log(even);