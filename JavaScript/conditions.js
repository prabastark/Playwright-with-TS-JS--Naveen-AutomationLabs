/*
====================================================
JAVASCRIPT CONDITIONALS — COMPLETE GUIDE
====================================================

This file explains the main conditional structures in JavaScript.
Use these statements to make decisions in your code.
Run with: node conditions.js
*/

console.log("\n========== CONDITIONAL STATEMENTS ==========");

/*
1. if statement
Use if when you need to run code only when a condition is true.
*/
console.log("\n1. if statement");
const temperature = 30;
if (temperature > 25) {
  console.log("It is hot outside.");
}

/*
Explanation:
- if (temperature > 25) checks one condition
- the code inside { } runs only when the condition is true
*/

/*
2. if...else statement
Use if...else when you need one path for true and another for false.
*/
console.log("\n2. if...else statement");
const score = 75;
if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}

/*
Explanation:
- if part handles the true case
- else part handles the false case
*/

/*
3. if...else if...else statement
Use this when you have more than two possibilities.
*/
console.log("\n3. if...else if...else statement");
const grade = 82;
if (grade >= 90) {
  console.log("Grade: A");
} else if (grade >= 75) {
  console.log("Grade: B");
} else if (grade >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D or below");
}

/*
Explanation:
- The first true condition runs its block
- later conditions are skipped after one matches
- else is optional and runs if none match
*/

/*
4. nested if statements
Use nesting when a decision depends on a previous decision.
*/
console.log("\n4. nested if statements");
const hasID = true;
const age = 20;
if (hasID) {
  console.log("ID verified.");
  if (age >= 18) {
    console.log("Allowed to enter.");
  } else {
    console.log("Too young.");
  }
} else {
  console.log("ID required.");
}

/*
Explanation:
- one if statement exists inside another
- inner condition only checks if the outer condition was true
*/

/*
5. switch statement
Use switch when you have a single value to compare against many options.
*/
console.log("\n5. switch statement");
const day = "Wednesday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Wednesday":
    console.log("Midweek day");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  default:
    console.log("Regular day");
}

/*
Explanation:
- switch(value) compares value to each case
- break stops execution after a matching case
- default runs when no case matches
*/

console.log("\n6. conditional summary");
console.log("if: run code when a condition is true");
console.log("if...else: choose between two paths");
console.log("if...else if...else: choose among many paths");
console.log("nested if: decision inside another decision");
console.log("switch: compare one value to multiple cases");

console.log("\nPractice idea: change the values and add new conditions.");
