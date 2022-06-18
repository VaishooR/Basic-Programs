// 13. Write a program to reverse a number

function reverseNumber(num){
    let reverse=num.toString().split('').reverse().join('');
    console.log(reverse);
}
reverseNumber(125);  //output: 521
reverseNumber(2009); //output: 9002