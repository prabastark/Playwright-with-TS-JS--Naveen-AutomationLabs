/*
====================================================
 JAVASCRIPT DATA TYPES — COMPLETE GUIDE
====================================================

Definition:
Data types define the type of value a variable can hold.
They determine what operations can be performed on the data
and how it's stored in memory.

In simple terms:
👉 Data type = what kind of data is stored in a variable
👉 Like labels on boxes telling you what's inside

Example:
*/
let name = "Praba";   // string (text)
let age = 27;        // number (numeric value)

/*
Explanation:
- "name" → variable holding text data
- "Praba" → string value
- "age" → variable holding numeric data
- 27 → number value

Why data types matter:
- Determines what you can do with the value
- Affects memory usage
- Helps catch errors
- Makes code more predictable

Key Points:
✔ Every value has a data type
✔ Types are checked with typeof operator
✔ JavaScript is dynamically typed (types change automatically)
✔ Understanding types prevents bugs
*/

/*
====================================================
 JAVASCRIPT DATA TYPES:
 PRIMITIVE vs REFERENCE (QUICK REFERENCE)
====================================================

HOW TO USE THIS FILE:
1. Read the comments and examples
2. Run file → node dataTypes.js
3. Uncomment ❌ lines to see errors
4. Modify examples to practice

====================================================
 🎯 QUICK START RULES
====================================================

✨ Know the 7 primitives: string, number, boolean, undefined, null, bigint, symbol
✨ Understand reference types: object, array, function
✨ Use typeof to check types
✨ Remember primitive vs reference behavior
*/

console.log("\n========== TYPE BASICS ==========");

// Checking types with typeof
let text = "Hello";
let number = 42;
let bool = true;
let nothing = undefined;
let empty = null;

console.log("String:", typeof text);      // string
console.log("Number:", typeof number);    // number
console.log("Boolean:", typeof bool);     // boolean
console.log("Undefined:", typeof nothing); // undefined
console.log("Null:", typeof empty);       // object (JavaScript quirk!)

/*
====================================================
 🔤 SECTION 1: PRIMITIVE DATA TYPES
 (Basic, single values that are immutable)
====================================================

Primitive types are the building blocks:
- Stored directly in memory
- Passed by value (copy of value)
- Cannot be changed (immutable)
- 7 types total
*/

console.log("\n========== PRIMITIVE TYPES ==========");

// 1. STRING (text data)
let greeting = "Hello World";
let singleChar = 'A';
let templateStr = `Hello ${name}`; // Template literal

console.log("String examples:");
console.log("Basic:", greeting, typeof greeting);
console.log("Single char:", singleChar, typeof singleChar);
console.log("Template:", templateStr, typeof templateStr);

// String operations
console.log("Length:", greeting.length);        // 11
console.log("Uppercase:", greeting.toUpperCase()); // HELLO WORLD
console.log("Substring:", greeting.substring(0, 5)); // Hello

// 2. NUMBER (integers and decimals)
let wholeNumber = 100;
let decimalNumber = 99.99;
let negativeNumber = -50;
let scientific = 1.23e5; // 123000

console.log("\nNumber examples:");
console.log("Integer:", wholeNumber, typeof wholeNumber);
console.log("Decimal:", decimalNumber, typeof decimalNumber);
console.log("Negative:", negativeNumber, typeof negativeNumber);
console.log("Scientific:", scientific, typeof scientific);

// Special number values
console.log("Infinity:", 1 / 0);        // Infinity
console.log("Negative Infinity:", -1 / 0); // -Infinity
console.log("Not a Number:", "text" / 2); // NaN

// Number operations
console.log("Addition:", 10 + 5);       // 15
console.log("Division:", 10 / 3);       // 3.333...
console.log("Is NaN:", isNaN("text")); // true

// 3. BOOLEAN (true or false only)
let isLoggedIn = true;
let hasPermission = false;
let isGreater = 10 > 5; // Expression evaluates to boolean

console.log("\nBoolean examples:");
console.log("True value:", isLoggedIn, typeof isLoggedIn);
console.log("False value:", hasPermission, typeof hasPermission);
console.log("Comparison result:", isGreater, typeof isGreater);

// Boolean operations
console.log("AND (&&):", true && false);  // false
console.log("OR (||):", true || false);   // true
console.log("NOT (!):", !true);           // false

// 4. UNDEFINED (variable declared but no value assigned)
let notAssigned;
let explicitlyUndefined = undefined;

console.log("\nUndefined examples:");
console.log("Not assigned:", notAssigned, typeof notAssigned);
console.log("Explicit undefined:", explicitlyUndefined, typeof explicitlyUndefined);

// Common undefined scenarios
function noReturn() {
  // No return statement
}
console.log("Function no return:", noReturn()); // undefined

// 5. NULL (intentional absence of value)
let emptyValue = null;
let userNotFound = null; // Common pattern

console.log("\nNull examples:");
console.log("Null value:", emptyValue, typeof emptyValue); // object (bug!)
console.log("User not found:", userNotFound, typeof userNotFound);

// Checking for null specifically
console.log("Is null?", emptyValue === null); // true
console.log("Is null with typeof?", typeof emptyValue === "object" && emptyValue === null); // true

// 6. BIGINT (very large integers)
let bigNumber = 123456789012345678901234567890n;
let anotherBig = BigInt("999999999999999999999");

console.log("\nBigInt examples:");
console.log("BigInt literal:", bigNumber, typeof bigNumber);
console.log("BigInt constructor:", anotherBig, typeof anotherBig);

// BigInt operations
console.log("Addition:", 100n + 50n);     // 150n
console.log("Cannot mix:", typeof (100n + 50)); // number (converts to number)

// 7. SYMBOL (unique, immutable identifiers)
let id1 = Symbol("id");
let id2 = Symbol("id");
let uniqueKey = Symbol();

console.log("\nSymbol examples:");
console.log("Symbol 1:", id1, typeof id1);
console.log("Symbol 2:", id2, typeof id2);
console.log("Are they equal?", id1 === id2); // false (always unique!)
console.log("Unique symbol:", uniqueKey, typeof uniqueKey);

// Symbol use cases
const USER_ID = Symbol("userId");
let user = {
  name: "Praba",
  [USER_ID]: 12345 // Hidden property
};
console.log("User object:", user);
console.log("Hidden ID:", user[USER_ID]); // Only accessible with symbol

/*
====================================================
 🔤 SECTION 2: REFERENCE DATA TYPES
 (Complex data stored as memory references)
====================================================

Reference types store addresses to memory locations:
- Can hold multiple values
- Passed by reference (memory address)
- Mutable (can be changed)
- Objects, arrays, functions
*/

console.log("\n========== REFERENCE TYPES ==========");

// 1. OBJECT (key-value collections)
let person = {
  name: "Praba",
  age: 27,
  isDeveloper: true,
  skills: ["JavaScript", "Python"]
};

console.log("Object examples:");
console.log("Person object:", person, typeof person);

// Accessing object properties
console.log("Name:", person.name);        // Dot notation
console.log("Age:", person["age"]);       // Bracket notation
console.log("Has skills:", "skills" in person); // Check if property exists

// Modifying objects
person.age = 28;
person.location = "India"; // Add new property
console.log("Updated person:", person);

// 2. ARRAY (ordered lists)
let fruits = ["apple", "banana", "mango"];
let mixedArray = [1, "text", true, { key: "value" }];
let emptyArray = [];

console.log("\nArray examples:");
console.log("Fruits array:", fruits, typeof fruits); // object!
console.log("Mixed array:", mixedArray, typeof mixedArray);
console.log("Empty array:", emptyArray, typeof emptyArray);

// Array operations
console.log("Length:", fruits.length);        // 3
console.log("First item:", fruits[0]);        // apple
console.log("Last item:", fruits[fruits.length - 1]); // mango

fruits.push("orange"); // Add to end
fruits.unshift("grape"); // Add to beginning
console.log("After adding:", fruits);

let removed = fruits.pop(); // Remove from end
console.log("Removed:", removed, "Remaining:", fruits);

// 3. FUNCTION (reusable code blocks)
function greetUser(name) {
  return `Hello, ${name}!`;
}

let arrowGreet = (name) => `Hi, ${name}!`;

let functionExpression = function() {
  return "Anonymous function";
};

console.log("\nFunction examples:");
console.log("Regular function:", greetUser, typeof greetUser);
console.log("Arrow function:", arrowGreet, typeof arrowGreet);
console.log("Function expression:", functionExpression, typeof functionExpression);

// Calling functions
console.log("Regular call:", greetUser("Praba"));
console.log("Arrow call:", arrowGreet("Karan"));
console.log("Expression call:", functionExpression());

/*
====================================================
 📊 SECTION 3: PRIMITIVE vs REFERENCE (CRITICAL DIFFERENCE)
====================================================

The key difference affects how variables behave:
- Primitive: Independent copies
- Reference: Shared memory location
*/

console.log("\n========== PRIMITIVE vs REFERENCE ==========");

// PRIMITIVE EXAMPLE (independent copies)
let num1 = 10;
let num2 = num1; // Creates a copy

num2 = 20;
console.log("num1 (original):", num1); // 10 (unchanged)
console.log("num2 (copy):", num2);     // 20 (changed)

// REFERENCE EXAMPLE (shared memory)
let objA = { value: 10 };
let objB = objA; // Points to same memory location

objB.value = 20;
console.log("objA.value:", objA.value); // 20 (changed!)
console.log("objB.value:", objB.value); // 20 (both affected)

// How to create independent reference copies
let objC = { value: 10 };
let objD = { ...objC }; // Spread operator creates shallow copy

objD.value = 30;
console.log("objC.value:", objC.value); // 10 (unchanged)
console.log("objD.value:", objD.value); // 30 (independent)

/*
====================================================
 🪜 SECTION 4: TYPE CONVERSION & COERCION
====================================================

JavaScript automatically converts types in certain situations
*/

console.log("\n========== TYPE CONVERSION ==========");

// Explicit conversion (manual)
let strNum = "123";
let convertedNum = Number(strNum);
let convertedStr = String(456);
let convertedBool = Boolean(1);

console.log("String to number:", convertedNum, typeof convertedNum);
console.log("Number to string:", convertedStr, typeof convertedStr);
console.log("Number to boolean:", convertedBool, typeof convertedBool);

// Implicit coercion (automatic)
console.log("String + number:", "5" + 5);     // "55" (string concatenation)
console.log("String - number:", "5" - 5);     // 0 (numeric subtraction)
console.log("Boolean in math:", true + 1);    // 2 (true = 1)
console.log("Boolean in math:", false + 1);   // 1 (false = 0)

// Truthy/Falsy values
console.log("Truthy values:");
console.log(Boolean("text"));   // true
console.log(Boolean(42));       // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true

console.log("Falsy values:");
console.log(Boolean(""));       // false
console.log(Boolean(0));        // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));      // false

/*
====================================================
 ⚠️ SECTION 5: COMMON MISTAKES & CONFUSIONS
====================================================
*/

console.log("\n========== COMMON MISTAKES ==========");

// ❌ MISTAKE 1: Thinking arrays are not objects
console.log("Array is object?", typeof [] === "object"); // true
console.log("Array instanceof Object?", [] instanceof Object); // true

// ❌ MISTAKE 2: Confusing null and undefined
console.log("null == undefined?", null == undefined);   // true (loose equality)
console.log("null === undefined?", null === undefined); // false (strict equality)

// ❌ MISTAKE 3: Forgetting reference behavior
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("arr1 changed?", arr1); // [1, 2, 3, 4] - affected!

// ❌ MISTAKE 4: NaN comparisons
console.log("NaN == NaN?", NaN == NaN); // false
console.log("Is NaN?", isNaN(NaN));     // true
console.log("Number.isNaN?", Number.isNaN(NaN)); // true

// ❌ MISTAKE 5: typeof null bug
console.log("typeof null:", typeof null); // "object" (historical bug)

// ✅ CORRECT: Proper null checks
function isNull(value) {
  return value === null;
}
console.log("Is null?", isNull(null));     // true
console.log("Is null?", isNull(undefined)); // false

/*
====================================================
 📊 SECTION 6: TYPE CHECKING TECHNIQUES
====================================================
*/

console.log("\n========== TYPE CHECKING ==========");

// Basic typeof
console.log("typeof string:", typeof "text");     // string
console.log("typeof number:", typeof 42);         // number
console.log("typeof boolean:", typeof true);      // boolean
console.log("typeof undefined:", typeof undefined); // undefined
console.log("typeof object:", typeof {});         // object
console.log("typeof array:", typeof []);          // object
console.log("typeof function:", typeof function(){}); // function

// instanceof for objects
console.log("Array check:", [] instanceof Array);     // true
console.log("Date check:", new Date() instanceof Date); // true
console.log("Object check:", {} instanceof Object);    // true

// Array.isArray for arrays
console.log("Is array?", Array.isArray([]));          // true
console.log("Is array?", Array.isArray({}));          // false

// Number checks
console.log("Is finite?", Number.isFinite(42));       // true
console.log("Is finite?", Number.isFinite(Infinity)); // false
console.log("Is integer?", Number.isInteger(42));     // true
console.log("Is integer?", Number.isInteger(42.5));   // false
console.log("Is NaN?", Number.isNaN(NaN));            // true

/*
====================================================
 🎯 SECTION 7: WHEN TO USE WHAT (REAL RULES)
====================================================
*/

console.log("\n========== DECISION GUIDE ==========");

// PRIMITIVES for simple values
const userName = "Praba";        // string
const maxAge = 100;             // number
const isActive = true;          // boolean
const userId = Symbol("id");    // symbol for unique IDs
const bigCount = 1000000n;      // bigint for large numbers

// REFERENCE types for complex data
const userProfile = {           // object for structured data
  name: "Praba",
  settings: {
    theme: "dark"
  }
};

const todoList = ["learn JS", "build app"]; // array for lists
const calculateTax = (amount) => amount * 0.1; // function for reusable logic

console.log("Primitives:", userName, maxAge, isActive);
console.log("References:", userProfile, todoList, typeof calculateTax);

/*
====================================================
 📚 SECTION 8: COMPARISON TABLE
====================================================

            Primitive               Reference
----------------------------------------
Storage     By value                By reference
Memory      Direct value            Memory address
Mutable     No (immutable)          Yes
Examples    string, number, boolean object, array, function
Copy        Independent copy        Shared reference
typeof      Varies                  "object" or "function"
*/

/*
====================================================
 🎓 SECTION 9: REAL-WORLD EXAMPLES
====================================================
*/

console.log("\n========== REAL-WORLD EXAMPLES ==========");

// User authentication (primitives)
const API_KEY = "sk-123456";     // string
const MAX_LOGIN_ATTEMPTS = 3;    // number
const IS_PREMIUM_USER = false;   // boolean

// User data (reference types)
let currentUser = {
  id: 12345,
  name: "Praba",
  preferences: {
    theme: "dark",
    notifications: true
  }
};

let shoppingCart = ["laptop", "mouse", "keyboard"];
let calculateTotal = function(items) {
  return items.length * 100; // Simple calculation
};

// Demonstrating reference behavior
let userCopy = currentUser;
userCopy.name = "Karan"; // Changes original!
console.log("Original user:", currentUser.name); // "Karan"

let cartCopy = [...shoppingCart]; // Proper copy
cartCopy.push("monitor");
console.log("Original cart:", shoppingCart.length); // 3 (unchanged)
console.log("Copy cart:", cartCopy.length);         // 4

console.log("Total price:", calculateTotal(shoppingCart)); // 300

/*
====================================================
 ✅ SECTION 10: FINAL CHECKLIST
====================================================

□ I understand primitive types: string, number, boolean, undefined, null, bigint, symbol
□ I understand reference types: object, array, function
□ I know primitives are immutable and copied by value
□ I know references are mutable and copied by reference
□ I can use typeof for basic type checking
□ I understand type coercion and conversion
□ I know common pitfalls (null typeof, NaN comparisons)
□ I can choose appropriate types for different scenarios
□ I'm ready to write type-aware JavaScript!

====================================================
 END OF GUIDE - HAPPY CODING! 🚀
====================================================
*/

console.log("\n✅ All data types examples completed! Run this file with: node data-types.js");