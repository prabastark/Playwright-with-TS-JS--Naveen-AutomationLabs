/*
====================================================
JAVASCRIPT DATA TYPES — BEGINNER GUIDE
====================================================

A data type tells JavaScript what kind of value is stored.
Think of it like a label on a box.
*/

const userName = "Praba";   // string
const userAge = 27;          // number

console.log("\n========== DATA TYPE BASICS =========="); // Section header
console.log("userName:", userName, "type:", typeof userName); // Output: userName: Praba type: string
console.log("userAge:", userAge, "type:", typeof userAge); // Output: userAge: 27 type: number

/*
1. STRING
Strings store text values.
*/
console.log("\n========== STRING =========="); // Section header
const greeting = "Hello World";
const message = `Hello ${userName}`;
console.log("String:", greeting, typeof greeting); // Output: String: Hello World type: string
console.log("Template:", message, typeof message); // Output: Template: Hello Praba type: string (template literals use backticks and ${} for variables)

/*
2. NUMBER
Numbers store integers and decimals.
*/
console.log("\n========== NUMBER =========="); // Section header
const wholeNumber = 100;
const decimalNumber = 99.99;
console.log("Number:", wholeNumber, typeof wholeNumber); // Output: Number: 100 type: number
console.log("Decimal:", decimalNumber, typeof decimalNumber); // Output: Decimal: 99.99 type: number

/*
3. BOOLEAN
Booleans store true or false.
*/
console.log("\n========== BOOLEAN =========="); // Section header
const isLoggedIn = true;
const hasPermission = false;
console.log("Boolean:", isLoggedIn, typeof isLoggedIn); // Output: Boolean: true type: boolean
console.log("Comparison:", 10 > 5, typeof (10 > 5)); // Output: Comparison: true type: boolean (comparisons always return true or false)

/*
4. UNDEFINED
Undefined means a variable has no value yet.
*/
console.log("\n========== UNDEFINED =========="); // Section header
let notAssigned;
console.log("Undefined:", notAssigned, typeof notAssigned); // Output: Undefined: undefined type: undefined (variable declared but not assigned has undefined value)

/*
5. NULL
Null means an empty value chosen on purpose.
*/
console.log("\n========== NULL =========="); // Section header
const emptyValue = null;
console.log("Null:", emptyValue, typeof emptyValue); // Output: Null: null type: object (shows 'object' due to JavaScript quirk, but null is intentional empty value)

/*
6. BIGINT
BigInt is for very large whole numbers.
*/
console.log("\n========== BIGINT =========="); // Section header
const bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber, typeof bigNumber); // Output: BigInt: 123456789012345678901234567890n type: bigint (stores very large numbers, requires 'n' suffix)
console.log("BigInt add:", 100n + 50n); // Output: BigInt add: 150n (BigInt arithmetic)

/*
7. SYMBOL
Symbol creates a unique value.
*/
console.log("\n========== SYMBOL =========="); // Section header
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log("Symbol 1:", id1, typeof id1); // Output: Symbol 1: Symbol(id) type: symbol
console.log("Symbol 2:", id2, typeof id2); // Output: Symbol 2: Symbol(id) type: symbol
console.log("Symbols equal?", id1 === id2); // Output: Symbols equal? false (each Symbol is unique, even with same description)

/*
8. REFERENCE TYPES
Objects, arrays, and functions hold more complex data.
*/
console.log("\n========== REFERENCE TYPES =========="); // Section header
const person = {
  name: "Praba",
  age: 27,
  isDeveloper: true,
  skills: ["JavaScript", "Python"]
};
console.log("Object:", person, typeof person); // Output: Object: {...full object} type: object (objects store multiple related values)
console.log("Name:", person.name); // Output: Name: Praba (access object properties with dot notation)
console.log("Age:", person["age"]); // Output: Age: 27 (access object properties with bracket notation)
console.log("Has skills?", "skills" in person); // Output: Has skills? true (check if property exists in object)

const fruits = ["apple", "banana", "mango"];
console.log("Array:", fruits, Array.isArray(fruits)); // Output: Array: [apple, banana, mango] Array.isArray: true (arrays are ordered collections)
console.log("First fruit:", fruits[0]); // Output: First fruit: apple (access array elements by index, starting at 0)

const greetUser = (name) => `Hello, ${name}!`;
console.log("Function call:", greetUser("Praba")); // Output: Function call: Hello, Praba! (functions are callable objects)

/*
9. PRIMITIVE vs REFERENCE
Primitives are copied by value. Objects are copied by reference.
*/
console.log("\n========== PRIMITIVE vs REFERENCE =========="); // Section header
let numA = 10;
let numB = numA;
numB = 20;
console.log("numA:", numA); // Output: numA: 10 (primitives are copied by value, changes to numB do not affect numA)
console.log("numB:", numB); // Output: numB: 20 (numB is independent after assignment)

const objA = { value: 10 };
const objB = objA;
objB.value = 20;
console.log("objA.value:", objA.value); // Output: objA.value: 20 (objects are copied by reference, both point to same object)
console.log("objB.value:", objB.value); // Output: objB.value: 20 (changing objB also changes objA)

const objC = { value: 10 };
const objD = { ...objC };
objD.value = 30;
console.log("objC.value:", objC.value); // Output: objC.value: 10 (spread operator creates a new independent copy)
console.log("objD.value:", objD.value); // Output: objD.value: 30 (objD is independent, changes do not affect objC)

/*
10. TYPE CONVERSION
You can convert values between types with functions.
*/
console.log("\n========== TYPE CONVERSION =========="); // Section header
const strNum = "123";
const convertedNum = Number(strNum);
const convertedStr = String(456);
const convertedBool = Boolean(1);
console.log("String to number:", convertedNum, typeof convertedNum); // Output: String to number: 123 type: number (Number() converts string to number)
console.log("Number to string:", convertedStr, typeof convertedStr); // Output: Number to string: 456 type: string (String() converts number to string)
console.log("Number to boolean:", convertedBool, typeof convertedBool); // Output: Number to boolean: true type: boolean (Boolean() converts, any non-zero is true)
console.log("String + number:", "5" + 5); // Output: String + number: 55 (+ operator concatenates with strings, not adds)
console.log("String - number:", "5" - 5); // Output: String - number: 0 (- operator converts string to number and subtracts)
console.log("true + 1:", true + 1); // Output: true + 1: 2 (true is converted to 1 in arithmetic)

/*
11. TRUTHY & FALSY
Some values act like true or false when used in conditions.
*/
console.log("\n========== TRUTHY & FALSY =========="); // Section header
console.log("Truthy values:"); // Output: Truthy values: (section header)
console.log(Boolean("text")); // Output: true (non-empty strings are truthy)
console.log(Boolean(42)); // Output: true (non-zero numbers are truthy)
console.log(Boolean([])); // Output: true (arrays are truthy, even empty arrays)
console.log(Boolean({})); // Output: true (objects are truthy, even empty objects)

console.log("Falsy values:"); // Output: Falsy values: (section header)
console.log(Boolean("")); // Output: false (empty strings are falsy)
console.log(Boolean(0)); // Output: false (zero is falsy)
console.log(Boolean(null)); // Output: false (null is falsy)
console.log(Boolean(undefined)); // Output: false (undefined is falsy)
console.log(Boolean(NaN)); // Output: false (NaN - not a number is falsy)

/*
12. COMMON MISTAKES
These are easy to get wrong when learning JavaScript.
*/
console.log("\n========== COMMON MISTAKES =========="); // Section header
console.log("Array is object?", typeof [] === "object"); // Output: Array is object? true (arrays show as 'object' type, not 'array')
console.log("null == undefined?", null == undefined); // Output: null == undefined? true (loose equality considers them equal)
console.log("null === undefined?", null === undefined); // Output: null === undefined? false (strict equality shows they are different types)

const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log("arr1 changed?", arr1); // Output: arr1 changed? [1, 2, 3, 4] (arr1 also changed because arrays are passed by reference)
console.log("NaN == NaN?", NaN == NaN); // Output: NaN == NaN? false (NaN is never equal to anything, even itself)
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // Output: Number.isNaN(NaN): true (use Number.isNaN() to check for NaN)
console.log("typeof null:", typeof null); // Output: typeof null: object (known JavaScript quirk/bug)

function isNull(value) {
  return value === null;
}
console.log("isNull(null):", isNull(null)); // Output: isNull(null): true (proper way to check for null)
console.log("isNull(undefined):", isNull(undefined)); // Output: isNull(undefined): false (undefined is different from null)

/*
13. TYPE CHECKING
Use typeof, Array.isArray, and instanceof to know the type of values.
*/
console.log("\n========== TYPE CHECKS =========="); // Section header
console.log("typeof 'text':", typeof "text"); // Output: typeof 'text': string
console.log("typeof 42:", typeof 42); // Output: typeof 42: number
console.log("typeof true:", typeof true); // Output: typeof true: boolean
console.log("typeof undefined:", typeof undefined); // Output: typeof undefined: undefined
console.log("typeof {}:", typeof {}); // Output: typeof {}: object
console.log("typeof []:", typeof []); // Output: typeof []: object (arrays show as object)
console.log("typeof function(){}:", typeof function(){}); // Output: typeof function(){}: function
console.log("Array.isArray([]):", Array.isArray([])); // Output: Array.isArray([]): true (use Array.isArray() to properly check for arrays)
console.log("Array.isArray({}):", Array.isArray({})); // Output: Array.isArray({}): false (objects are not arrays)

/*
14. INTERVIEW NOTES
Practice these quick answers.
*/
console.log("\n========== INTERVIEW NOTES ==========");
console.log("Q: What are the 7 primitive types?");
console.log("A: string, number, boolean, undefined, null, bigint, symbol.");
console.log("Q: What is the difference between primitive and reference?");
console.log("A: Primitive values are copied by value. Reference values point to the same object.");
console.log("Q: Why is typeof null 'object'?");
console.log("A: It is a historical bug in JavaScript.");
