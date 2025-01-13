// array 

const marvel_heros = ["thor", "Ironman", "spiderman"];
const DC_heros = ["flash","superman","batman"];

// DC_heros.push(marvel_heros); in this array is inserted in the old array and treated as a single entity
// console.log(DC_heros);
// console.log(DC_heros[3][0]);

// const allheros = DC_heros.concat(marvel_heros); // concat add the elements in the array and print the new array
// console.log(allheros);

// If we want to add element in array then we can use spead method 

const my_all_heros = [...DC_heros,...marvel_heros];

//console.log(my_all_heros);

console.log(Array.isArray("Devansh")); // print false because it will is not a array
console.log(Array.from("Devansh")); // it will convert the string into array
console.log(Array.from({name: "Punjani"})); // interesting case : it will give only empty array because it will not convert it into array to conver the object into array we have to describe on what basis we have to create array whether it is on key value or on the other basis


