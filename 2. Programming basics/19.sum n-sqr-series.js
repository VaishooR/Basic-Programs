//19. Write a program to find the sum of series 1^2+3^2+5^2+......+n^2 for any given n.

function sumOfSeries(n)
{
    let sum=(n * (2*n-1) * (2*n+1)) / 3;
    console.log(`The sum of series 1^2+3^2+5^2+......+${n}^2 is: ${sum}`)
}
sumOfSeries(10)

//output:
// The sum of series 1^2+3^2+5^2+......+10^2 is: 1330


