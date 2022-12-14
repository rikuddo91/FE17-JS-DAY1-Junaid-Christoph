/* ----------------------Advance Exercise 1---------------------*/

let a = 7;

let b = 14;

let c = "21";

let d = "36";

let e = 42;

// will add the numbers but consider "number" as and insert them as is.
// Used Number() to convert it to number
sum = a + b + Number(c) + Number(d) + e;
document.write(`The sum is ${sum}.<br><br>`);

// will multiply the numbers but consider "number" as string and insert them as is.
// Used Number() to convert it to number
let f = "1";

let g = 15;

let h = 8;

let i = "1";

multiply = Number(f) * g * h * Number(i);
document.write(`The result of multiplication is ${multiply}.<br><br>`);

division = sum / multiply;
document.write(`The result is ${division}.<br><hr>`);

/* ----------------------Advance Exercise 2---------------------*/

const people = ["Greg", "Mary", "Devon", "James"];

// Using shift method to remove first element
people.shift();
console.table(people);

// Using unshift method to add 'Matt' to first position
people.unshift("Matt");
console.table(people);

// Using Pop method to remove last element
people.pop();
console.table(people);

// Using Push method to add element at last position
people.push("Junaid");
console.table(people);

// Using slice method to removed firs two elements
/* people.slice(2) 
console.table(people)
!!! DIDN'T WORK!!!*/

console.table(people.slice(2));

// Alternate method
// temp2 = people.slice(2);
// console.table(temp2)

// Using indexOF to find index number of "Mary"
console.log(people.indexOf("Mary"));

// Using indexOF to find index number of "Foo" (Doesn't exist)
console.log(people.indexOf("Foo"));

// Redefining variable people2 with original values
const people2 = ["Greg", "Mary", "Devon", "James"];

// Using splice to remove "Devon" and add "Elizabeth","Anna"
people2.splice(2, 1, "Elizabeth", "Anna");
console.table(people2);

// Adding new variable and assigning values accordingly
let withBob = people.slice(0, 5)
withBob.push("Bob")
console.log(withBob);



/* ----------------------Advance Exercise 3---------------------*/

// Output specific numbers from multidemensional Array - ${multi[row][col]}
let multi = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 25, 7],
  [21, 4, 6, 17],
  [3, 5, 26, 3],
];

console.table(multi);
console.log(
  `${multi[1][1]} ${multi[4][2]} ${multi[5][3]} ${multi[2][3]} ${multi[2][1]}`
);
