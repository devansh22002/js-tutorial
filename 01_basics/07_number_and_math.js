// we can explicitly define the data type of a variable
const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 66.7511;
// console.log(otherNumber.toPrecision(2)); // mostly used in ecommerce 
const Num = 1000000;
// console.log(Num.toLocaleString('en-IN')); // print the number in indian format if not mention 'en-IN' then it will print in US standard


//++++++++++++++++++++++++ Maths +++++++++++++++++++++++

// console.log(Math.abs(-4)); // it will change from -ve to +ve that's it
// console.log(Math.round(4.5)); // it will only round off the number
// console.log(Math.ceil(4.1)); // it will only choose/print the highest number
// console.log(Math.floor(4.5)); // floor will print the base value means minimum value

// console.log(Math.random()); // it will print the random value between 0-1
// console.log(Math.random() * 10 ); // by  multiply by 10 value is shift to left
// console.log((Math.random()*10 ) + 1);
const min = 5;
const max = 15
console.log(Math.floor(Math.random()* (max - min + 1 ) ) + min);




