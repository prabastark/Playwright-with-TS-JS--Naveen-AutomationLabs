/*
====================================================
LOOPS IN JAVASCRIPT — BEGINNER GUIDE
====================================================

A loop repeats code until a condition becomes false.
Loops help when you want to do the same task many times without writing it again.
*/

console.log("\n========== LOOP BASICS =========="); // Section header

/*
1. for loop
Use when you know how many times you want to repeat.
*/
console.log("\n1. for loop: good when you know how many times to repeat"); // Section header
for (let i = 1; i <= 5; i += 1) {
  console.log("for loop count:", i); // Output: 1, 2, 3, 4, 5 (loops 5 times, i increases by 1 each time)
}

/*
2. while loop
Use when you want to repeat while a condition stays true.
*/
console.log("\n2. while loop: repeat while a condition is true"); // Section header
let counter = 1;
while (counter <= 5) {
  console.log("while counter:", counter); // Output: 1, 2, 3, 4, 5 (repeats while counter <= 5)
  counter += 1; // Increment counter each iteration
}

/*
3. do...while loop
Use when you want to run code at least once first, then check the condition.
*/
console.log("\n3. do...while loop: run once, then check"); // Section header
let step = 1;
do {
  console.log("do...while step:", step); // Output: 1, 2, 3 (runs at least once, then checks condition)
  step += 1; // Increment step
} while (step <= 3); // Condition checked after code runs

/*
4. for...of loop
Use for arrays, strings, or any iterable value.
*/
console.log("\n4. for...of loop: loop through array values"); // Section header
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log("for...of color:", color); // Output: red, green, blue (loops through each array value)
}

/*
5. for...in loop
Use for objects to read each property name.
*/
console.log("\n5. for...in loop: loop through object keys"); // Section header
const phone = {
  brand: "Nokia",
  model: "3310",
  year: 2000,
};
for (const key in phone) {
  console.log(key + ":", phone[key]); // Output: brand: Nokia, model: 3310, year: 2000 (loops through object properties)
}

/*
6. if inside a loop
You can use conditionals inside loops to make choices for each item.
*/
console.log("\n6. if inside a loop: make decisions each time"); // Section header
for (let value = 1; value <= 6; value += 1) {
  if (value % 2 === 0) {
    console.log(value, "is even"); // Output: 2 is even, 4 is even, 6 is even (value divisible by 2)
  } else {
    console.log(value, "is odd"); // Output: 1 is odd, 3 is odd, 5 is odd (value not divisible by 2)
  }
}

/*
7. break statement
Use break to stop the loop completely.
*/
console.log("\n7. break stops a loop early"); // Section header
for (let n = 1; n <= 10; n += 1) {
  if (n === 4) {
    console.log("break at", n); // Output: break at 4 (loop stops here)
    break; // Exit the loop completely
  }
  console.log("n:", n); // Output: n: 1, n: 2, n: 3 (then loop stops)
}

/*
8. continue statement
Use continue to skip the current round and move to the next one.
*/
console.log("\n8. continue skips only this round"); // Section header
for (let n = 1; n <= 6; n += 1) {
  if (n === 3) {
    console.log("skip", n); // Output: skip 3 (skips this iteration)
    continue; // Skip this iteration when n === 3
  }
  console.log("n:", n); // Output: n: 1, n: 2, n: 4, n: 5, n: 6 (skips n=3 due to continue)
}

/*
9. nested loops
A loop inside another loop is useful for grids or tables.
*/
console.log("\n9. nested loops: loop inside a loop"); // Section header
for (let row = 1; row <= 3; row += 1) {
  let line = "";
  for (let col = 1; col <= 5; col += 1) {
    line += "#";
  }
  console.log("row", row, line); // Output: row 1 #####, row 2 #####, row 3 ##### (outer loop runs 3 times, inner loop creates 5 #'s each)
}

/*
10. filter values in a loop
Use continue to skip values you do not want to keep.
*/
console.log("\n10. loop with array filtering"); // Section header
const scores = [10, 15, 20, 7, 30, 12];
const highScores = [];
for (const score of scores) {
  if (score < 15) {
    continue; // Skip scores less than 15
  }
  highScores.push(score);
}
console.log("highScores:", highScores); // Output: highScores: [15, 20, 30] (only scores >= 15 are kept)

/*
11. while loop with stop condition
A boolean value can help stop the loop at the right time.
*/
console.log("\n11. while loop with a stop condition"); // Section header
let attempts = 0;
let success = false;
while (!success && attempts < 5) {
  attempts += 1;
  console.log("attempt:", attempts); // Output: attempt: 1, attempt: 2, attempt: 3 (shows each attempt until success)
  if (attempts === 3) {
    success = true;
    console.log("success after", attempts, "attempts"); // Output: success after 3 attempts (loop stops when success is true)
  }
}

/*
12. loop review
Summary of the main loop types.
*/
console.log("\n12. loop review:"); // Section header
console.log("for -> known number of repeats"); // Output: for -> known number of repeats (summary of for loop)
console.log("while -> repeat until condition is false"); // Output: while -> repeat until condition is false (summary of while loop)
console.log("do...while -> run first, then check"); // Output: do...while -> run first, then check (summary of do...while loop)
console.log("for...of -> use with arrays and strings"); // Output: for...of -> use with arrays and strings (summary of for...of loop)
console.log("for...in -> use with object keys"); // Output: for...in -> use with object keys (summary of for...in loop)
