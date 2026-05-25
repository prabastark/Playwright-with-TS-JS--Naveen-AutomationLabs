/*
====================================================
CONDITIONALS IN JAVASCRIPT — BEGINNER GUIDE
====================================================

Conditionals let your code make choices.
Think of them like asking questions and choosing what to do next.
*/

console.log("\n========== CONDITIONAL STATEMENTS =========="); // Section header

/*
1. if statement
Use if when you want to run code only when a condition is true.
*/
console.log("\n1. if statement"); // Section header
const temperature = 30;
if (temperature > 25) {
  console.log("It is hot outside."); // Output: It is hot outside. (condition is true: 30 > 25, so code runs)
}

/*
Explanation:
- if (temperature > 25) checks one condition
- the code inside { } runs only when the condition is true
*/

/*
2. if...else statement
Use if...else when you need one path for true and another path for false.
*/
console.log("\n2. if...else statement"); // Section header
const score = 75;
if (score >= 60) {
  console.log("Pass"); // Output: Pass (condition is true: 75 >= 60, so if block runs)
} else {
  console.log("Fail"); // This would run if condition was false
}

/*
Explanation:
- if part runs when the condition is true
- else part runs when the condition is false
*/

/*
3. if...else if...else statement
Use this when you have more than two possibilities.
*/
console.log("\n3. if...else if...else statement"); // Section header
const grade = 82;
if (grade >= 90) {
  console.log("Grade: A"); // Skipped
} else if (grade >= 75) {
  console.log("Grade: B"); // Output: Grade: B (82 >= 75, this condition matches first)
} else if (grade >= 60) {
  console.log("Grade: C"); // Skipped (earlier condition already matched)
} else {
  console.log("Grade: D or below"); // Skipped
}

/*
Explanation:
- The first true condition runs its block
- later conditions are skipped after one matches
- else runs if none of the earlier tests are true
*/

/*
4. nested if statements
Use nesting when one decision depends on another decision.
*/
console.log("\n4. nested if statements"); // Section header
const hasID = true;
const age = 20;
if (hasID) {
  console.log("ID verified."); // Output: ID verified. (hasID is true)
  if (age >= 18) {
    console.log("Allowed to enter."); // Output: Allowed to enter. (nested if, age 20 >= 18 is true)
  } else {
    console.log("Too young."); // Skipped
  }
} else {
  console.log("ID required."); // Skipped
}

/*
Explanation:
- A nested if is an if statement inside another if
- The inner if only runs when the outer condition is true
*/

/*
5. switch statement
Use switch when one value should match many cases.
*/
console.log("\n5. switch statement"); // Section header
const day = "Wednesday";
switch (day) {
  case "Monday": // Output will be different based on day value
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
- switch(value) compares the value to each case
- break stops the switch after a match
- default runs when no case matches
*/

console.log("\n6. conditional summary"); // Section header
console.log("if: run code when a condition is true"); // Output: if: run code when a condition is true (explains if statement)
console.log("if...else: choose between true and false"); // Output: if...else: choose between true and false (explains if...else)
console.log("else if: check another condition if the first was false"); // Output: else if: check another condition if the first was false (explains else if)
console.log("switch: compare one value to many options"); // Output: switch: compare one value to many options (explains switch)

console.log("\n7. common interview questions"); // Section header
console.log("Q: When should you use switch instead of if/else?"); // Output: Q: When should you use switch instead of if/else? (interview question)
console.log("A: Use switch when one value needs many exact matches, like days of the week."); // Output: A: Use switch when one value needs many exact matches, like days of the week. (interview answer)
console.log("Q: What is nested if?"); // Output: Q: What is nested if? (interview question)
console.log("A: It is an if statement inside another if statement."); // Output: A: It is an if statement inside another if statement. (interview answer)

