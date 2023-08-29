// Arrays

const myArray = [];

// Add elements to an array

myArray[0] = "Ismail";
myArray[1] = 1001;
myArray[2] = false;

// refer to an array

console.log(myArray);

// Length property

console.log(myArray.length);

// Last element in an array

console.log(myArray[myArray.length - 1]);

// Refer any one item within the array

console.log(myArray[1]);
// using .push() to add some element to your array (Adds at the end)

myArray.push("school");

console.log(myArray);

// using .pop() to remove an item from an array

let lastItem = myArray.pop();
console.log(myArray);
console.log(lastItem);

// using .unshift() to add an item to the front of your array (Adds at the front)

// When we add to the array using .unshift() or .push() and the return value is the new length of the array.

const newLength = myArray.unshift(42);
console.log(myArray);
console.log(newLength);

// Using .shift() to remove an item from the front of the array

// And the return value is the item that was removed

let firstItem = myArray.shift();
console.log(myArray);
console.log(firstItem);

// Removing a specific index item from the array

// .splice() can be used to delete a specific element in the array, it can also be used to replace or add another element at a specific position
myArray.splice(1, 1, 42);
console.log(myArray);
console.log(myArray[1]);

const Arrr = ["A", "B", "C", "D", "E", "F"];

const newArray = Arrr.slice(2, 5);

console.log(newArray);
console.log(Arrr);

// .reverse() can be used to reverse the elements of an array

Arrr.reverse();
console.log(Arrr);

// .join() method takes an array and creates a new string out of that array

const newString = Arrr.join();
console.log(newString);

// .split() method takes a string and seprates it to create a new array, takes some parameter or character used to seperate the string by

const ard = newString.split(",");
console.log(ard);

// .concat() method is used to join two arrays in order to create a new array, which includes all the elements of the parent arrays

// As the myArrayA was first & myArrayB was inside the concat, so the elements of myArrayA will also be first inside the new array
const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];
const newART = myArrayA.concat(myArrayB);
console.log(newART);

// Spread Operator (...) is also a newer method which joins the elements of its parent arrays inside a new array

const newARee = [...myArrayA, ...myArrayB];
console.log(newARee);

// Creating multi-dimensional Arrays and accessing elements in those multidemensional arrays

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf ball", "tennis ball"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

// now accessing elements in these arrays is straight forward as they are single dimension arrays.

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

// We can nest these arrays inside new arrays to create two dimensional arrays

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

// Now in order to access those same elements by the new nested arrays created, we would have to use a different method

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

// We can further nest these nested arrays in order to create one main array

const sportsStore = [equipDept, clothesDept];

// Now in order to access those same specific elements by the main nested array, we would have to add further more specificity

console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);
