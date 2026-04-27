/*
====================================================
 VARIABLES IN JAVASCRIPT — DEFINITION
====================================================

Definition:
A variable is a named container used to store data in memory,
so that it can be used, updated, and accessed later in a program.

In simple terms:
👉 A variable is like a labeled box where you store a value.

Example:
*/
let name = "Praba";  // "name" is the variable, "Praba" is the value

/*
Explanation:
- "name" → variable name (identifier)
- "Praba" → value stored in the variable
- "=" → assignment operator (assigns value to variable)

Why we use variables:
- To store data
- To reuse values
- To make code dynamic and flexible

Example:
*/
let age = 25;
age = 26; // value can change

/*
Key Points:
✔ Variables store data
✔ Variables have names (identifiers)
✔ Values can be changed (depending on let/const)
✔ Declared using: var, let, const
*/

/*
====================================================
 JAVASCRIPT VARIABLES:
 var vs let vs const (QUICK REFERENCE)
====================================================

HOW TO USE THIS FILE:
1. Read the comments
2. Run file → node variables.js
3. Uncomment ❌ lines to see errors
4. Modify examples to practice

====================================================
 🎯 QUICK START RULE
====================================================

✨ Use const by default
✨ Use let if value changes  
✨ Never use var
*/

console.log("\n========== SCOPE BASICS ==========");

// Global Scope → accessible everywhere
var globalVar = "I am global";

// Function Scope → inside function only
function scopeDemo() {
  var functionVar = "I am function scoped";

  // Block Scope → inside {} only (if, loop, etc)
  if (true) {
    let blockVar = "I am block scoped";
    console.log("blockVar:", blockVar); // ✅ works
  }

  // console.log(blockVar); ❌ ERROR - blockVar is not defined
}

scopeDemo();


/*
====================================================
 🔤 SECTION 1: VAR (DON'T USE THIS!)
====================================================

✔ Function scoped
✔ Can re-declare (create again)
✔ Can re-assign (change value)
❌ Avoid in modern code
*/

console.log("\n========== VAR EXAMPLES ==========");

// Example 1: Function Scope
function varScopeTest() {
  if (true) {
    var x = 10;
  }
  console.log("var x outside if:", x); // ✅ accessible (confusing!)
}
varScopeTest();

// Example 2: Re-declaration (CONFUSING - DON'T DO THIS)
var name = "Praba";
var name = "Karan"; // ⚠️ allowed but bad practice
console.log("var re-declared:", name);

// Example 3: Re-assignment
var a = 5;
a = 20;
console.log("var re-assigned:", a);

// Example 4: Hoisting (var is moved to top but undefined)
console.log("var hoisting:", b); // undefined (not error!)
var b = 100;


/*
====================================================
 🔤 SECTION 2: LET (USE WHEN VALUE CHANGES)
====================================================

✔ Block scoped (safer than var)
✔ Can re-assign (change value)
❌ Cannot re-declare (can't create again)
✔ More predictable than var
*/

console.log("\n========== LET EXAMPLES ==========");

// Example 1: Block Scope (BEST - stays in block)
function letScopeTest() {
  if (true) {
    let y = 20;
    console.log("let inside block:", y); // ✅ works
  }

  // console.log(y); ❌ ERROR - y is not defined
}
letScopeTest();

// Example 2: Re-assignment (ALLOWED - change the value)
let age = 25;
age = 30;
console.log("let re-assigned:", age); // ✅ 30

// Example 3: Re-declaration (NOT ALLOWED)
// let age = 40; ❌ ERROR - Identifier 'age' has already been declared

// Example 4: Temporal Dead Zone (TDZ)
// console.log(c); ❌ ERROR - can't access before initialization
let c = 50;

// REAL-WORLD USE: Counters and changing values
let counter = 0;
counter = counter + 1;
console.log("counter updated:", counter);


/*
====================================================
 🔤 SECTION 3: CONST (USE BY DEFAULT!)
====================================================

✔ Block scoped
❌ Cannot re-assign (can't change entire value)
❌ Cannot re-declare (can't create again)
✔ Must initialize immediately
✅ BEST FOR MOST CASES
*/

console.log("\n========== CONST EXAMPLES ==========");

// Example 1: Basic const
const pi = 3.14;
console.log("const value:", pi); // ✅ 3.14

// Example 2: Cannot re-assign
// pi = 3.1415; ❌ ERROR - Assignment to constant variable

// Example 3: Cannot re-declare
// const pi = 3.14159; ❌ ERROR - Identifier 'pi' has already been declared

// Example 4: IMPORTANT - Objects can be modified (but not replaced)
const user = { name: "Praba", age: 25 };
user.name = "Karan"; // ✅ ALLOWED - modifying inside object
console.log("const object modified:", user);

// user = {}; ❌ ERROR - can't replace entire object

// Example 5: Arrays can be modified too
const colors = ["red", "blue"];
colors.push("green"); // ✅ ALLOWED - modifying array
console.log("const array modified:", colors);

// colors = []; ❌ ERROR - can't replace entire array


/*
====================================================
 📊 SECTION 4: RE-DECLARE vs RE-ASSIGN
====================================================

Re-declare → Creating same variable again
Re-assign → Changing the value
*/

console.log("\n========== RE-DECLARE vs RE-ASSIGN ==========");

let test = 10;
// let test = 20; ❌ Re-declare NOT allowed with let

test = 20; // ✅ Re-assign ALLOWED
console.log("test re-assigned:", test);

// Comparison:
var oldTest = 10;
var oldTest = 20; // ✅ allowed with var (confusing!)
console.log("var re-declare:", oldTest);


/*
====================================================
 🪜 SECTION 5: HOISTING COMPARISON
====================================================

var → hoisted and initialized as undefined
let/const → hoisted but NOT initialized (TDZ)
*/

console.log("\n========== HOISTING ==========");

console.log("var hoisted:", v1); // undefined (not error!)
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

console.log("\n========== DECISION GUIDE ==========");

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

console.log("Final values - appName:", appName, "userScore:", userScore);


/*
====================================================
 ⚠️ SECTION 7: COMMON MISTAKES
====================================================
*/

console.log("\n========== COMMON MISTAKES ==========");

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