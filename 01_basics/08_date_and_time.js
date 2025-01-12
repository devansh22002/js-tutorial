// Dates
// Date is a object in javascript

const myDates = new Date();
// console.log(myDates); // time is not in readble form
// console.log(myDates.toString());
// console.log(myDates.toLocaleDateString());
// console.log(myDates.toLocaleString());
// console.log(myDates.toISOString());
// console.log(myDates.toJSON());

// we can also declare the date 

let mydate = new Date("2025-02-15")
// console.log(mydate.toDateString());

// Time Stamp

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// if we want to find out the time from the declare date then we can user getTime
// console.log(mydate.getTime());
// console.log(Math.floor(Date.now()/1000)); // if we want to convert millisecond in second then /1000

let newDate = new Date();
console.log(newDate.getDay());



