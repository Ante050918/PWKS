/* function check(num) {
  if (num % 2 == 0) return num;
}

function sum() {
  let sum = 0;
  return function (number) {
    return (sum = sum + number);
  };
}

function odds() {
  let num = 0;
  return function () {
    return num++;
  };
}

let broj = +window.prompt("Uensite broj: ", 0);
let evensum = sum();
let numOdd = odds();
while (broj != 0) {
  check(broj) ? (sum = evensum(broj)) : numOdd();
  broj = +window.prompt("Uensite broj: ", 0);
}

console.log(sum);
console.log(numOdd()); */

let check = (num) => num % 2 == 0;

let suma = 0;
let sum = () => (number) => (suma = suma + number);

let num = 0;
let odds = () => () => num++;

let broj = +window.prompt("Uensite broj: ");
let evensum = sum();
let numOdd = odds();
while (broj != 0) {
  check(broj) ? (sume = evensum(broj)) : numOdd();
  broj = +window.prompt("Uensite broj: ");
}

console.log(sume);
console.log(numOdd());

let arr = [2, 4, 6, 8, 10];

arr.forEach(div);

function div(item, index, arr) {
  if (index === 0) arr[index] = item / 2;
}

console.log(arr);
