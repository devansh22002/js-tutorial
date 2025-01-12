// const name = "Devansh";
// const count = 5;
// console.log(name + count);


// modern way of writing string
// modern of writing string is called string interpolation ( means we create a placeholder for string with the $ sign)

// console.log(`my name is ${name} and my repoCount is ${count}`);

// another way of writing string with the help of new keyword followed by String()

const language = new String('Javascript');
// console.log(language);
// console.log(language[2]);

// console.log(language.__proto__);
// console.log(language.length); // print the length of the string
// console.log(language.toUpperCase()); // change to uppercase
// console.log(language.charAt(8)); // with the help of this charAt() we can check that at which character is at that particular position 
// console.log(language.indexOf('s')); // with the help of indexOf function we can check the position of particular character 

const newString = language.substring(0, 6); // last value is not included r is not included
const neewString = language.slice(1, 4);
console.log(neewString);

console.log(newString);


const newName = "  Devansh  ";
console.log(newName);

console.log(newName.trim()); // trim function is used where whitespace is used

const url = "https://devansh.com/devansh-docs"
console.log(url.replace('-', '%20'));

console.log(newName.includes('ev')); // check the particular word or character in a string

console.log(newName.split(''));




