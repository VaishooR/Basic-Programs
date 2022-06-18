//20. Write a program to print given series:1 2 4 8 16 32 64 128 for any given n; n being count of numbers in series.

function printSeries(num){
    for(i=1;i<=num;i*=2){
        console.log(i)
    }
}
printSeries(100);
printSeries(500);


//output: 
1
2
4
8
16
32
64

//output:
1
2
4
8
16
32
64
128
256
