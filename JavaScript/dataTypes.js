/*
====================================================
JAVASCRIPT DATA TYPES — BEGINNER GUIDE
====================================================

A data type tells JavaScript what kind of value is stored.
Think of it like a label on a box.
*/

const userName = "Praba";   // string
const userAge = 27;          // number

console.log("\n========== DATA TYPE BASICS ==========");
console.log("userName:", userName, "type:", typeof userName);
console.log("userAge:", userAge, "type:", typeof userAge);

/*
1. STRING
Strings store text values.
*/
console.log("\n========== STRING ==========");
const greeting = "Hello World";
const message = `Hello ${userName}`;
console.log("String:", greeting, typeof greeting);
console.log("Template:", message, typeof message);

/*
2. NUMBER
Numbers store integers and decimals.
*/
console.log("\n========== NUMBER ==========");
const wholeNumber = 100;
const decimalNumber = 99.99;
console.log("Number:", wholeNumber, typeof wholeNumber);
console.log("Decimal:", decimalNumber, typeof decimalNumber);

/*
3. BOOLEAN
Booleans store true or false.
*/
console.log("\n========== BOOLEAN ==========");
const isLoggedIn = true;
const hasPermission = false;
console.log("Boolean:", isLoggedIn, typeof isLoggedIn);
console.log("Comparison:", 10 > 5, typeof (10 > 5));

/*
4. UNDEFINED
Undefined means a variable has no value yet.
*/
console.log("\n========== UNDEFINED ==========");
let notAssigned;
console.log("Undefined:", notAssigned, typeof notAssigned);

/*
5. NULL
Null means an empty value chosen on purpose.
*/
console.log("\n========== NULL ==========");
const emptyValue = null;
console.log("Null:", emptyValue, typeof emptyValue); // object is a known JavaScript quirk

/*
6. BIGINT
BigInt is for very large whole numbers.
*/
console.log("\n========== BIGINT ==========");
const bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber, typeof bigNumber);
console.log("BigInt add:", 100n + 50n);

/*
7. SYMBOL
Symbol creates a unique value.
*/
console.log("\n========== SYMBOL ==========");
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log("Symbol 1:", id1, typeof id1);
console.log("Symbol 2:", id2, typeof id2);
console.log("Symbols equal?", id1 === id2);

/*
8. REFERENCE TYPES
Objects, arrays, and functions hold more complex data.
*/
console.log("\n========== REFERENCE TYPES ==========");
const person = {
  name: "Praba",
  age: 27,
  isDeveloper: true,
  skills: ["JavaScript", "Python"]
};
console.log("Object:", person, typeof person);
console.log("Name:", person.name);
console.log("Age:", person["age"]);
console.log("Has skills?", "skills" in person);

const fruits = ["apple", "banana", "mango"];
console.log("Array:", fruits, Array.isArray(fruits));
console.log("First fruit:", fruits[0]);

const greetUser = (name) => `Hello, ${name}!`;
console.log("Function call:", greetUser("Praba"));

/*
9. PRIMITIVE vs REFERENCE
Primitives are copied by value. Objects are copied by reference.
*/
console.log("\n========== PRIMITIVE vs REFERENCE ==========");
let numA = 10;
let numB = numA;
numB = 20;
console.log("numA:", numA); // 10
console.log("numB:", numB); // 20

const objA = { value: 10 };
const objB = objA;
objB.value = 20;
console.log("objA.value:", objA.value); // 20
console.log("objB.value:", objB.value); // 20

const objC = { value: 10 };
const objD = { ...objC };
objD.value = 30;
console.log("objC.value:", objC.value); // 10
console.log("objD.value:", objD.value); // 30

/*
10. TYPE CONVERSION
You can convert values between types with functions.
*/
console.log("\n========== TYPE CONVERSION ==========");
const strNum = "123";
const convertedNum = Number(strNum);
const convertedStr = String(456);
const convertedBool = Boolean(1);
console.log("String to number:", convertedNum, typeof convertedNum);
console.log("Number to string:", convertedStr, typeof convertedStr);
console.log("Number to boolean:", convertedBool, typeof convertedBool);
console.log("String + number:", "5" + 5); // "55"
console.log("String - number:", "5" - 5); // 0
console.log("true + 1:", true + 1); // 2

/*
11. TRUTHY & FALSY
Some values act like true or false when used in conditions.
*/
console.log("\n========== TRUTHY & FALSY ==========");
console.log("Truthy values:");
console.log(Boolean("text"));
console.log(Boolean(42));
console.log(Boolean([]));
console.log(Boolean({}));

console.log("Falsy values:");
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

/*
12. COMMON MISTAKES
These are easy to get wrong when learning JavaScript.
*/
console.log("\n========== COMMON MISTAKES ==========");
console.log("Array is object?", typeof [] === "object");
console.log("null == undefined?", null == undefined);
console.log("null === undefined?", null === undefined);

const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log("arr1 changed?", arr1);
console.log("NaN == NaN?", NaN == NaN);
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("typeof null:", typeof null);

function isNull(value) {
  return value === null;
}
console.log("isNull(null):", isNull(null));
console.log("isNull(undefined):", isNull(undefined));

/*
13. TYPE CHECKING
Use typeof, Array.isArray, and instanceof to know the type of values.
*/
console.log("\n========== TYPE CHECKS ==========");
console.log("typeof 'text':", typeof "text");
console.log("typeof 42:", typeof 42);
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);
console.log("typeof function(){}:", typeof function(){});
console.log("Array.isArray([]):", Array.isArray([]));
console.log("Array.isArray({}):", Array.isArray({}));

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
