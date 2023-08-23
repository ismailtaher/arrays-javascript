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

delete myArray[1];
console.log(myArray);
