/*
====================================================
LOOPS IN JAVASCRIPT — COMPLETE GUIDE
====================================================

This file explains loop concepts with clear examples and comments.
Read the code, run the file with: node Looping.js
Then change the values and conditions to practice.
*/

console.log("\n========== LOOP BASICS ==========");

/*
1. What is a loop?
A loop repeats a block of code while a condition remains true.
Most loops need:
- initialization: a start value
- condition: a test before each round
- update: change the value each time
*/

console.log("\n1. for loop: fixed number of repetitions");
for (let i = 1; i <= 5; i += 1) {
  console.log("Loop count:", i);
}

/*
for loop structure:
for (start; condition; update) {
  // code to repeat
}
*/

console.log("\n2. while loop: repeat while a condition stays true");
let counter = 1;
while (counter <= 5) {
  console.log("counter =", counter);
  counter += 1; // update is required or the loop may never end
}

/*
while loop structure:
while (condition) {
  // repeated code
}
*/

console.log("\n3. do...while loop: run first, then check condition");
let step = 1;
do {
  console.log("step =", step);
  step += 1;
} while (step <= 3);

/*
A do...while loop always runs the body once first.
This is useful when the code must execute at least one time.
*/

console.log("\n4. for...of loop: iterate values in an array or string");
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log("color =", color);
}

console.log("\n5. for...in loop: iterate keys of an object");
const phone = {
  brand: "Nokia",
  model: "3310",
  year: 2000,
};
for (const key in phone) {
  console.log(key + ":", phone[key]);
}

/*
Note: for...in is best for objects.
for...of is best for arrays, strings, sets, etc.
*/

console.log("\n6. condition inside a loop");
for (let value = 1; value <= 6; value += 1) {
  if (value % 2 === 0) {
    console.log(value, "is even");
  } else {
    console.log(value, "is odd");
  }
}

/*
Use if/else inside loops to make decisions on each iteration.
*/

console.log("\n7. break stops the loop completely");
for (let n = 1; n <= 10; n += 1) {
  if (n === 4) {
    console.log("break at", n);
    break;
  }
  console.log("n =", n);
}

console.log("\n8. continue skips to the next iteration");
for (let n = 1; n <= 6; n += 1) {
  if (n === 3) {
    console.log("skip", n);
    continue;
  }
  console.log("n =", n);
}

console.log("\n9. nested loops: loop inside a loop");
for (let row = 1; row <= 3; row += 1) {
  let line = "";
  for (let col = 1; col <= 5; col += 1) {
    line += "#";
  }
  console.log("row", row, line);
}

/*
Nested loops are useful for grids, tables, or combinations.
*/

console.log("\n10. loop with array filtering and condition");
const scores = [10, 15, 20, 7, 30, 12];
const highScores = [];
for (const score of scores) {
  if (score < 15) {
    continue; // only keep scores 15 or higher
  }
  highScores.push(score);
}
console.log("highScores =", highScores);

console.log("\n11. while loop with boolean and limit");
let attempts = 0;
let success = false;
while (!success && attempts < 5) {
  attempts += 1;
  console.log("attempt:", attempts);
  if (attempts === 3) {
    success = true;
    console.log("success after", attempts, "attempts");
  }
}

/*
Loop condition summary:
- initialization: let i = 0
- condition: i < 5
- update: i += 1
- body: code inside {}
*/

console.log("\n12. loop condition types explained");
console.log("Initialization = starting value");
console.log("Condition = repeating test that must stay true");
console.log("Update = value change inside the loop");
console.log("Body = code executed each iteration");

console.log("\nPractice idea: change the numbers, try new conditions, or add another loop.");
