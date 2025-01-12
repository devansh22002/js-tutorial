// comparison 

// console.log("3" > 1);

console.log(null > 0); //false 
console.log(null == 0); // false
console.log(null >= 0); // true, cause it will convert null to 0 and then compare with 0 

// undefined always gives result false when we compare undefined to anyone

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined >= 0); //false
 

// === strict check 

console.log("2" == 2); // true because in this case it will check only number 
console.log("2" === 2); // false because it will check data type also that's why it will give false
