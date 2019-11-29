const highAndLow = numbers => `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`;

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
