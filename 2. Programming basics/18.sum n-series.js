//18. Write a program to find sum of series 1 + 2 + 3 +......+ n for any given n.

function sumSeries(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(`The sum of series 1 + 2 + 3 +......+ ${num} is: ${sum}`);
}
sumSeries(10);
sumSeries(11);
sumSeries(100);

//output: 
// The sum of series 1 + 2 + 3 +......+ 10 is: 55
// The sum of series 1 + 2 + 3 +......+ 11 is: 66
// The sum of series 1 + 2 + 3 +......+ 100 is: 5050


