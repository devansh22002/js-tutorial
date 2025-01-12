// https://262.ecma-international.org/5.1/#sec-4.2.1  { Best resource for learning javascript}

// Primtive Data Types //  call by value

// 7 types = String, Number, boolean, null, undefined, symbol, bigInt

// Non-primitive datatypes // call by reference

// data types = array, object, function

// javascript is a dynamic typed language


// let  value = Symbol('123');
// let anothervalue = Symbol('123');
// console.log(value === anothervalue); //false, if there will be a same value Symbol wil automatically make it unique


// array

// const arr = ["Devansh","Javascript", "MYSQL"]; // array 
//  let Obj = {
//     name: "Devansh",
//     age: 22,
//  }  // this the way to declare a object


//  let myFunction = function() { 
//     console.log("Hello World");
//  }

//  console.log(typeof Obj); // alwas give object
//  console.log(typeof myFunction); // it will give function or we can se object function
 
 

// There are two types of memory  Stack and Heap 
// stack { primitive data type}, Heap { non-primitive data type}


let Obj = "Hello Devansh";
let anon = Obj;

anon = "Javascript is interesting";

console.log(Obj);
console.log(anon);

let userOne = {
    email: "user@gmail.com",
    upi: "user@okaxis"
}

let userTwo = userOne;

userTwo.email = "devansh@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);

