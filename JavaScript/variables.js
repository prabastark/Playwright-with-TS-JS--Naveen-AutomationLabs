/*
====================================================
VARIABLES IN JAVASCRIPT — BEGINNER GUIDE
====================================================

What is a variable?
A variable is a named box that holds a value.
You can store text, numbers, or other values inside the box.

Example:
*/
let myName = "Praba"; // myName is the box, "Praba" is the value

/*
Why variables are helpful:
- Save values to use later
- Make code easier to read
- Let code change when data changes
*/

console.log("\n========== VARIABLE RULES =========="); // Prints section header for clarity
console.log("myName:", myName); // Output: myName: Praba

/*
====================================================
CHOOSING VAR, LET, CONST
====================================================

Use `const` when the value should never change.
Use `let` when the value may change later.
Avoid `var` because it is confusing for beginners.
*/

console.log("\n========== VAR vs LET vs CONST =========="); // Section header

/*
1. var - old style, avoid in modern code
*/
function showVar() {
  if (true) {
    var oldStyle = "This is var";
  }
  console.log("var inside function:", oldStyle); // Output: var inside function: This is var (var ignores block scope, works outside if block)
}
showVar();

// var can be re-declared and re-assigned
var oldValue = "Hello";
oldValue = "World"; // re-assign is allowed
var oldValue = "New value"; // re-declare is allowed (bad practice)
console.log("var value:", oldValue); // Output: var value: New value (var can be re-declared and re-assigned)

/*
2. let - best when value changes
*/
function showLet() {
  if (true) {
    let blockValue = "This is let";
    console.log("let inside block:", blockValue); // Output: let inside block: This is let (let respects block scope)
  }
  // console.log(blockValue); // ❌ error: blockValue is not defined outside the block
}
showLet();

let count = 10;
count = 11; // re-assign is allowed
console.log("let count:", count); // Output: let count: 11 (let allows re-assignment)

/*
3. const - best for values that do not change
*/
const city = "Chennai";
console.log("const city:", city); // Output: const city: Chennai (const cannot be changed after assignment)
// city = "Bangalore"; // ❌ error: cannot change a const value

/*
====================================================
SCOPE MADE SIMPLE
====================================================
*/
console.log("\n========== SCOPE BASICS =========="); // Prints section header

var globalVar = "I am global"; // available everywhere in this file

function scopeExample() {
  let functionVar = "I am inside the function";
  console.log(functionVar); // Output: I am inside the function (visible within function scope)

  if (true) {
    let blockVar = "I am inside the block";
    console.log(blockVar); // Output: I am inside the block (visible within block scope)
  }
  // console.log(blockVar); // ❌ error: blockVar only exists inside the if block
}
scopeExample();
console.log("globalVar:", globalVar); // Output: globalVar: I am global (global variables accessible anywhere in file)

/*
====================================================
BEGINNER TIPS
====================================================
- Use `const` whenever possible.
- Use `let` only when the value changes.
- Avoid `var` in new code.
- A variable name should be simple and clear.
*/

console.log("\n========== INTERVIEW READY NOTES ==========");
console.log("What is the difference between var, let, and const?"); // Output: What is the difference between var, let, and const? (interview question)
console.log("Answer: var is function-scoped and old; let is block-scoped and can change; const is block-scoped and cannot change the value."); // Output: Answer explaining the differences
console.log("What is scope?"); // Output: What is scope? (interview question)
console.log("Answer: Scope is where a variable can be used: global, function, or block."); // Output: Answer explaining scope


/*
====================================================
 📊 SECTION 4: RE-DECLARE vs RE-ASSIGN
====================================================

Re-declare → Creating same variable again
Re-assign → Changing the value
*/

console.log("\n========== RE-DECLARE vs RE-ASSIGN =========="); // Section header

let test = 10;
// let test = 20; ❌ Re-declare NOT allowed with let

test = 20; // ✅ Re-assign ALLOWED
console.log("test re-assigned:", test); // Output: test re-assigned: 20 (let allows re-assigning values)

// Comparison:
var oldTest = 10;
var oldTest = 20; // ✅ allowed with var (confusing!)
console.log("var re-declare:", oldTest); // Output: var re-declare: 20 (var allows re-declaring with same name - bad practice)


/*
====================================================
 🪜 SECTION 5: HOISTING COMPARISON
====================================================

var → hoisted and initialized as undefined
let/const → hoisted but NOT initialized (TDZ)
*/

console.log("\n========== HOISTING =========="); // Section header

console.log("var hoisted:", v1); // Output: var hoisted: undefined (var is hoisted and initialized to undefined before code runs)
var v1 = 1;

// console.log("let hoisted:", l1); ❌ ERROR - Cannot access 'l1' before initialization
let l1 = 2;

// console.log("const hoisted:", k1); ❌ ERROR - Cannot access 'k1' before initialization
const k1 = 3;


/*
====================================================
 🎯 SECTION 6: WHEN TO USE WHAT (REAL RULES)
====================================================
*/

console.log("\n========== DECISION GUIDE =========="); // Section header

// RULE 1: DEFAULT → use const (70% of the time)
const appName = "MyApp";
const maxRetries = 3;
const apiUrl = "https://api.example.com";

// RULE 2: If value will change → use let (25% of the time)
let userScore = 0;
userScore = userScore + 10;

let counter2 = 0;
for (let i = 0; i < 5; i++) {
  counter2++;
}

// RULE 3: Never use var (0% of the time)
// var oldStyle = "avoid this";

console.log("Final values - appName:", appName, "userScore:", userScore); // Output: Final values - appName: MyApp userScore: 10 (shows const and let usage results)


/*
====================================================
 ⚠️ SECTION 7: COMMON MISTAKES
====================================================
*/

console.log("\n========== COMMON MISTAKES =========="); // Section header

// ❌ MISTAKE 1: Using var in modern code
// var mistake1 = "old way"; // Don't do this

// ❌ MISTAKE 2: Accessing let/const before declaration
// console.log(mistake2); ❌ ERROR
// let mistake2 = "too early";

// ❌ MISTAKE 3: Re-declaring let variables
// let mistake3 = 1;
// let mistake3 = 2; ❌ ERROR

// ❌ MISTAKE 4: Thinking const prevents all changes
const obj = { value: 10 };
obj.value = 20; // ✅ This works! Only prevents reassignment
console.log("Object can be modified:", obj);

// ✅ CORRECT: Knowing the difference
const FIXED_VALUE = 100; // Won't change
let changingValue = 100; // Will change


/*
====================================================
 📚 SECTION 8: QUICK COMPARISON TABLE
====================================================

            var     let     const
----------------------------------------
Scope       Function Block   Block
Re-declare  ✅       ❌       ❌
Re-assign   ✅       ✅       ❌
Hoisting    ✅       ⚠️ TDZ   ⚠️ TDZ
Use today   ❌       ✅       ✅ (best)
*/

console.log("\n========== SUMMARY ==========");
console.log("👉 Use const by default");
console.log("👉 Use let if value changes");
console.log("👉 Avoid var");


/*
====================================================
 🎓 REAL-WORLD EXAMPLE
====================================================
*/

console.log("\n========== REAL-WORLD EXAMPLE ==========");

// Configuration (never changes)
const DATABASE_URL = "mongodb://localhost";
const MAX_CONNECTIONS = 10;

// User data (can change)
let userCount = 0;
let activeConnections = 0;

// Simulating adding users
userCount = 5;
activeConnections = 3;
console.log("Users:", userCount, "Active:", activeConnections);

// Objects (const but can modify contents)
const appConfig = {
  theme: "dark",
  notifications: true
};
appConfig.theme = "light"; // ✅ OK
console.log("Updated config:", appConfig);


/*
====================================================
 ✅ FINAL CHECKLIST
====================================================

□ I understand global, function, and block scope
□ I know var is old and to avoid it
□ I know let is for changing values
□ I know const is for fixed values (use by default)
□ I know const objects can be modified inside
□ I understand hoisting differences
□ I'm ready to write better JavaScript!

====================================================
 END OF GUIDE - HAPPY CODING! 🚀
====================================================
*/

console.log("\n✅ All examples completed! Run this file with: node variables.js");