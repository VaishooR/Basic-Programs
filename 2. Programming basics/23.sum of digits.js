//23. Write a program to find the sum of individual digits of a positive integer.


function sumDigits(n){
    let numArr = n.toString().split("");

    let sum = numArr.reduce(function(a, b){
        return parseInt(a) + parseInt(b);
    }, 0);
    
    return sum;
}
console.log(sumDigits(255));    //output:12
console.log(sumDigits(45132));   //output:15











