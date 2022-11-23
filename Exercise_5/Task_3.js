let arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = Math.round((150 - 50) * Math.random() + 50);
}

for (let i = 0; i < 10; i++) {
  console.log(Math.round(arr[i]));
}

max = Math.max(...arr);
console.log(max);
console.log(arr.indexOf(max));

min = Math.min(...arr);
console.log(min);
console.log(arr.indexOf(min));
