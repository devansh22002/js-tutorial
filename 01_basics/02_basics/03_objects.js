// Objects in javascript
// there are 2 ways of declaring the array first is literal way which is like: const myObj = {name: "element"} and second is through constructor
// When we declare object through constructor then it will known as singleton 

// Object literals

// declare the Symbol 

const mySym = Symbol("key1");
const JsUser = {
    name: "Devansh",
    [mySym]: "key1",
    age: 22,
    course: "MCA",
    isLoggedin: false,
    lastLogin: ["Monday","Tuesday","Wednesday"]
}; // when there is no value in a object then it is called empty object, 


//how to access the object 

// console.log(JsUser.name);
// console.log(JsUser["age"]);
// console.log(JsUser[mySym]);

// in interview interviewer can ask use the symbol in object and print so there is one declare the symbol outside the object and in 
// inside the object then use [mySym]: "value of symbol " and print the symbol like this console.log(JUser[mySym])

// If you want to change the value of the element in object then u can do it with the help of JsUser.email = "changed value"

JsUser.course = "BCA";
// console.log(JsUser);
 // If you want to lock the value of the object then you can do Object.freeze(JsUser);

 JsUser.course = "B.Tech";
//  Object.freeze(JsUser);

JsUser.greetings = function() {
    console.log("Hello Js User");
}

JsUser.greetingsTwo = function() {
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greetings());

// console.log(JsUser.greetings); // print undefined
console.log(JsUser.greetingsTwo());



// Singleton Objects

const instaUser = new Object();
const myObj1 = {1: "d", 2: "e", 3: "v"}
const myObj2 = {1: "d", 2: "v", 3:"v", 4: "a"}

const myObj3 = {...myObj1, ...myObj2};
// console.log(myObj3);

// const myObj = Object.assign(myObj1, myObj2);
// console.log(myObj);

// console.log(Object.keys(myObj1)) // we can access the object key with the help of keys method and the output is return in array data type
// console.log(Object.values(myObj1)) // we can access the value of objects 
// console.log(Object.entries(myObj2)); // in this all the key-value is print as a array in objects [ [ '1', 'd' ], [ '2', 'v' ], [ '3', 'v' ], [ '4', 'a' ] ]

// ************************** Object Destructuring *****************************************************

const course = {
    course: "javascript",
    price: 999,
    courseInstructor: "Devansh"
}

const {price} = course 
console.log(price);
