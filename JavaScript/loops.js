/*
====================================================
LOOPS IN JAVASCRIPT — BEGINNER GUIDE
====================================================

A loop repeats code until a condition becomes false.
Loops help when you want to do the same task many times without writing it again.
*/

console.log("\n========== LOOP BASICS ==========");

/*
1. for loop
Use when you know how many times you want to repeat.
*/
console.log("\n1. for loop: good when you know how many times to repeat");
for (let i = 1; i <= 5; i += 1) {
  console.log("for loop count:", i);
}

/*
2. while loop
Use when you want to repeat while a condition stays true.
*/
console.log("\n2. while loop: repeat while a condition is true");
let counter = 1;
while (counter <= 5) {
  console.log("while counter:", counter);
  counter += 1;
}

/*
3. do...while loop
Use when you want to run code at least once first, then check the condition.
*/
console.log("\n3. do...while loop: run once, then check");
let step = 1;
do {
  console.log("do...while step:", step);
  step += 1;
} while (step <= 3);

/*
4. for...of loop
Use for arrays, strings, or any iterable value.
*/
console.log("\n4. for...of loop: loop through array values");
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log("for...of color:", color);
}

/*
5. for...in loop
Use for objects to read each property name.
*/
console.log("\n5. for...in loop: loop through object keys");
const phone = {
  brand: "Nokia",
  model: "3310",
  year: 2000,
};
for (const key in phone) {
  console.log(key + ":", phone[key]);
}

/*
6. if inside a loop
You can use conditionals inside loops to make choices for each item.
*/
console.log("\n6. if inside a loop: make decisions each time");
for (let value = 1; value <= 6; value += 1) {
  if (value % 2 === 0) {
    console.log(value, "is even");
  } else {
    console.log(value, "is odd");
  }
}

/*
7. break statement
Use break to stop the loop completely.
*/
console.log("\n7. break stops a loop early");
for (let n = 1; n <= 10; n += 1) {
  if (n === 4) {
    console.log("break at", n);
    break;
  }
  console.log("n:", n);
}

/*
8. continue statement
Use continue to skip the current round and move to the next one.
*/
console.log("\n8. continue skips only this round");
for (let n = 1; n <= 6; n += 1) {
  if (n === 3) {
    console.log("skip", n);
    continue;
  }
  console.log("n:", n);
}

/*
9. nested loops
A loop inside another loop is useful for grids or tables.
*/
console.log("\n9. nested loops: loop inside a loop");
for (let row = 1; row <= 3; row += 1) {
  let line = "";
  for (let col = 1; col <= 5; col += 1) {
    line += "#";
  }
  console.log("row", row, line);
}

/*
10. filter values in a loop
Use continue to skip values you do not want to keep.
*/
console.log("\n10. loop with array filtering");
const scores = [10, 15, 20, 7, 30, 12];
const highScores = [];
for (const score of scores) {
  if (score < 15) {
    continue;
  }
  highScores.push(score);
}
console.log("highScores:", highScores);

/*
11. while loop with stop condition
A boolean value can help stop the loop at the right time.
*/
console.log("\n11. while loop with a stop condition");
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
12. loop review
Summary of the main loop types.
*/
console.log("\n12. loop review:");
console.log("for -> known number of repeats");
console.log("while -> repeat until condition is false");
console.log("do...while -> run first, then check");
console.log("for...of -> use with arrays and strings");
console.log("for...in -> use with object keys");
