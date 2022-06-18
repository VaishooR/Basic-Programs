//9. Write a program to check whether a given number is perfect square or not.

function perfectSquare(num){
    if(num<=0){
        console.log("Negative numbers cannot have perfect squares.")
    }

    let squareRoot=Math.sqrt(num);
    if(squareRoot % 1 == 0){
        console.log(`Yes, ${num} is a perfect square.`)
    }else{
        console.log(`No, ${num} is not a perfect square.`)
    }
}
perfectSquare(25);  //output: Yes, 25 is a perfect square.
perfectSquare(26);  //output: No, 26 is not a perfect square.