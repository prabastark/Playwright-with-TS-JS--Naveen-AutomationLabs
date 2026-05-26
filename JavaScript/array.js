/*
  JavaScript Array Basics
  - What is an array
  - Array types
  - Array functions with definitions, examples, and beginner-friendly notes
*/

// 1. What is an array?
// An array is a list of values stored in one place.
// You can store numbers, words, true/false values, or even other arrays.
// Arrays help keep data together and let you use the same code to work with many items.

// Example:
const fruits = ["apple", "banana", "mango"];
console.log("Fruits:", fruits); // Output: Fruits: ["apple", "banana", "mango"]
// Explanation: fruits now holds three string values.

// 2. Types of arrays in JavaScript
// JavaScript has one main array type, but the values inside can be different.
// This means arrays can store:
// - Numbers
// - Strings (text)
// - Booleans (true or false)
// - Objects
// - Other arrays

const numberArray = [1, 2, 3, 4];
const stringArray = ["red", "green", "blue"];
const mixedArray = [1, "hello", true, null];
const nestedArray = [[1, 2], [3, 4]];

console.log("Number array:", numberArray); // Output: Number array: [1, 2, 3, 4]
// Explanation: stores only numbers.
console.log("String array:", stringArray); // Output: String array: ["red", "green", "blue"]
// Explanation: stores only text values.
console.log("Mixed array:", mixedArray); // Output: Mixed array: [1, "hello", true, null]
// Explanation: stores different types together.
console.log("Nested array:", nestedArray); // Output: Nested array: [[1, 2], [3, 4]]
// Explanation: array inside an array.

// 3. Common array functions
// Here are the most useful built-in array methods for beginners.

// 3.1 push() - add an item at the end of the array
// Definition: push() adds one or more values to the end of an array.
// Example:
const animals = ["cat", "dog"];
animals.push("bird");
console.log("After push:", animals); // Output: After push: ["cat", "dog", "bird"]
// Explanation: bird was added at the end.

// Hint: use push() when you want to grow the array from the right side.

// 3.2 pop() - remove the last item from the array
// Definition: pop() removes the last value and returns it.
// Example:
const lastAnimal = animals.pop();
console.log("Removed item:", lastAnimal); // Output: Removed item: bird
// Explanation: pop() removed and returned the last value.
console.log("After pop:", animals); // Output: After pop: ["cat", "dog"]
// Explanation: animals now has two items again.

// Hint: pop() is good when you want the last item and also want to remove it.

// 3.3 unshift() - add an item at the beginning
// Definition: unshift() adds one or more values to the start of an array.
// Example:
animals.unshift("mouse");
console.log("After unshift:", animals); // Output: After unshift: ["mouse", "cat", "dog"]
// Explanation: mouse was added at the front.

// Hint: use unshift() when you need to insert items at the front.

// 3.4 shift() - remove the first item
// Definition: shift() removes the first value and returns it.
// Example:
const firstAnimal = animals.shift();
console.log("Removed first item:", firstAnimal); // Output: Removed first item: mouse
// Explanation: shift() removed the first value.
console.log("After shift:", animals); // Output: After shift: ["cat", "dog"]
// Explanation: array is back to two items.

// Hint: shift() is useful when you want to remove items from the left side.

// 3.5 indexOf() - find the position of an item
// Definition: indexOf() returns the index of the first match, or -1 if not found.
// Example:
const catIndex = animals.indexOf("cat");
console.log("Index of cat:", catIndex); // Output: Index of cat: 0
// Explanation: cat is the first item so its index is 0.

// Hint: arrays start at index 0, so the first item is position 0.

// 3.6 includes() - check if an item exists
// Definition: includes() returns true if the array contains the value.
// Example:
const hasDog = animals.includes("dog");
console.log("Has dog?", hasDog); // Output: Has dog? true
// Explanation: dog is in the array, so result is true.

// Hint: use includes() when you only need a yes/no answer.

// 3.7 slice() - copy part of an array
// Definition: slice(start, end) returns a new array from start to before end.
// Example:
const sliceExample = animals.slice(0, 1);
console.log("Slice result:", sliceExample); // Output: Slice result: ["cat"]
// Explanation: slice copied only the first item.

// Hint: slice() does not change the original array.

// 3.8 splice() - remove or add items anywhere
// Definition: splice(start, deleteCount, ...items) changes the array in place.
// Example:
const colors = ["red", "green", "blue", "yellow"];
colors.splice(1, 2, "purple", "orange");
console.log("After splice:", colors); // Output: After splice: ["red", "purple", "orange", "yellow"]
// Explanation: splice removed green and blue, then added purple and orange.

// Hint: splice() is powerful but a little tricky; practice with small arrays.

// 3.9 join() - make a string from array items
// Definition: join(separator) converts the array to a single string.
// Example:
const joined = animals.join(", ");
console.log("Joined string:", joined); // Output: Joined string: cat, dog
// Explanation: join turned array values into one text string.

// Hint: join() is great for showing array values in a readable sentence.

// 3.10 split() - note: split is a string method, not an array method
// Definition: split() turns a string into an array, but it is used on strings.
// Example:
const words = "hello world".split(" ");
console.log("Split into array:", words); // Output: Split into array: ["hello", "world"]
// Explanation: split split the text at spaces into two words.

// Hint: split() is often used together with array methods for text processing.

// 3.11 map() - transform every item
// Definition: map() creates a new array by running a function on each item.
// Example:
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled); // Output: Doubled: [2, 4, 6]
// Explanation: map made each number twice as large.

// Hint: map() does not change the original array; it returns a new one.

// 3.12 filter() - keep only matching items
// Definition: filter() returns a new array with values that pass a test.
// Example:
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // Output: Even numbers: [2]
// Explanation: filter kept only the item that was even.

// Hint: filter() is useful for selecting items without changing the original array.

// 3.13 reduce() - combine values into one result
// Definition: reduce() runs a function on each item and returns one value.
// Example:
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum); // Output: Sum: 6
// Explanation: reduce added all numbers together.

// Hint: reduce() can do many things, like sum values, build objects, or flatten arrays.

// 3.14 forEach() - run code for each item
// Definition: forEach() executes a function once per array item.
// Example:
numbers.forEach((num, index) => {
  console.log(`Item ${index}:`, num); // Output lines: Item 0: 1, Item 1: 2, Item 2: 3
});
// Explanation: forEach printed each item with its position.

// Hint: forEach() is simple and good for printing or side effects.

// 3.15 find() - find the first matching item
// Definition: find() returns the first value that passes the test.
// Example:
const found = numbers.find((num) => num > 1);
console.log("Found:", found); // Output: Found: 2
// Explanation: find returned the first item greater than 1.

// Hint: use find() when you need one item, not a list of items.

// 3.16 findIndex() - find the index of the first match
// Definition: findIndex() gives the position of the first item that passes the test.
// Example:
const foundIndex = numbers.findIndex((num) => num > 1);
console.log("Found index:", foundIndex); // Output: Found index: 1
// Explanation: the first matching item is at index 1.

// Hint: findIndex() is like find(), but it returns the position instead of the value.

// 3.17 reverse() - reverse the order
// Definition: reverse() flips the array in place.
// Example:
const reversed = [...numbers].reverse();
console.log("Reversed:", reversed); // Output: Reversed: [3, 2, 1]
console.log("Original still safe:", numbers); // Output: Original still safe: [1, 2, 3]
// Explanation: using [...numbers] made a copy, so the original array stays the same.

// Hint: use a copy like [...numbers] if you want to keep the original order.

// 3.18 sort() - sort items
// Definition: sort() rearranges items in place using a compare function.
// Example:
const letters = ["b", "a", "d", "c"];
letters.sort();
console.log("Sorted letters:", letters); // Output: Sorted letters: ["a", "b", "c", "d"]
// Explanation: sort arranged the letters in alphabetical order.

// Hint: sort() changes the array, so copy it first if you need the original.

// 3.19 concat() - join arrays
// Definition: concat() returns a new array with values from two or more arrays.
// Example:
const colors1 = ["red", "blue"];
const colors2 = ["green", "yellow"];
const allColors = colors1.concat(colors2);
console.log("Concatenated:", allColors); // Output: Concatenated: ["red", "blue", "green", "yellow"]
// Explanation: concat joined both arrays without changing them.

// Hint: concat() is safer than push() when you want a new array.

// 3.20 flat() - flatten nested arrays
// Definition: flat() returns a new array with one level of nesting removed.
// Example:
const nested = [1, [2, 3], [4]];
const flatOne = nested.flat();
console.log("Flat one level:", flatOne); // Output: Flat one level: [1, 2, 3, 4]
// Explanation: flat removed one layer of nested arrays.

// Hint: use flat(Infinity) if you want to flatten all levels.

// 3.21 some() - check if any item passes
// Definition: some() returns true when at least one item passes the test.
// Example:
const hasBigNumber = numbers.some((num) => num > 2);
console.log("Has number > 2?", hasBigNumber); // Output: Has number > 2? true
// Explanation: some returned true because there is at least one number greater than 2.

// Hint: some() is faster than filter() when you only need yes/no.

// 3.22 every() - check if all items pass
// Definition: every() returns true if all items pass the test.
// Example:
const allPositive = numbers.every((num) => num > 0);
console.log("All positive?", allPositive); // Output: All positive? true
// Explanation: every checked each number and all were positive.

// Hint: every() helps check a rule for the whole array.

// 3.23 fill() - change all or part of an array
// Definition: fill(value, start, end) fills array slots with the same value.
// Example:
const fillExample = [1, 2, 3, 4];
fillExample.fill(0, 2, 4);
console.log("Fill example:", fillExample); // Output: Fill example: [1, 2, 0, 0]
// Explanation: fill replaced index 2 and 3 with 0.

// Hint: fill() changes the array in place and is useful for setup data.

// 3.24 entries() - get index/value pairs
// Definition: entries() returns an iterator that gives [index, value].
// Example:
for (const [index, item] of animals.entries()) {
  console.log(index, item); // Output lines: 0 cat, 1 dog
}
// Explanation: entries gives each position and its value.

// Hint: entries() is useful when you need both index and value.

// 3.25 keys() - get indexes only
// Definition: keys() returns an iterator of indices.
// Example:
for (const index of animals.keys()) {
  console.log("Index:", index); // Output lines: Index: 0, Index: 1
}
// Explanation: keys gives only the positions in the array.

// Hint: keys() is useful when you only need positions.

// 3.26 values() - get values only
// Definition: values() returns an iterator of values.
// Example:
for (const value of animals.values()) {
  console.log("Value:", value); // Output lines: Value: cat, Value: dog
}
// Explanation: values gives only array items.

// Hint: values() is like forEach but with iterator syntax.

// 4. Quick interview-ready summary
// - Arrays store multiple values in one variable.
// - Use [] to create arrays.
// - Common tasks: add, remove, find, transform, and combine values.
// - Most used methods: push, pop, shift, unshift, map, filter, reduce, indexOf, includes.

// Example quick notes:
// push() adds at end, pop() removes last.
// unshift() adds at start, shift() removes first.
// map() creates a new array, filter() keeps some items.
// reduce() combines values into one result.

// End of array basics - easy English for beginners.
