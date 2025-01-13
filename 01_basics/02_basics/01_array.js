// array

const array = [1,2,3,4,5];
// console.log(array);

const myHeros = ["Noddy","Naruto"]
const myarr = new Array(1,2,3,4,5,6,7,8)
// console.log(myarr[3]);

// Array methods

// myarr.push(10); // add the element in the array
// myarr.pop(); // remove the last element in the 

// myarr.unshift(9); // it will add the element in the array in the beginning
// myarr.shift(); // remove the first element in the array
// console.log(myarr.includes(0));
// console.log(myarr.indexOf(2));

// console.log(myarr);


// slice, splice

console.log("A", myarr);

const myn1 = myarr.slice(1,3);
console.log(myn1);
console.log("B", myarr);

const myn2 = myarr.splice(1,3);
console.log("c", myarr);

console.log(myn2);

