// 15. Write a program to calculate and print the sum of even and odd integers of the first n natural numbers.

function evenAndOddSum(num){
    let evenNum=[];
    let oddNum=[];
    for(i=1;i<=num;i++){
        if(i%2==0){
            evenNum.push(i);
        }else{
            oddNum.push(i);
        }
    }
    console.log('Even numbers in the given range are ' +evenNum);
    console.log('Odd numbers in the given range are ' +oddNum);

    let evenSum= evenNum.reduce((sum,num)=>sum+num,0);
    let oddSum= oddNum.reduce((sum,num)=>sum+num,0);
    console.log(`The sum of even numbers is ${evenSum}.`);
    console.log(`The sum of odd numbers is ${oddSum}.`);
}
evenAndOddSum(10);


//output:
//       Even numbers in the given range are 2,4,6,8,10
//       Odd numbers in the given range are 1,3,5,7,9
//       The sum of even numbers is 30.
//       The sum of odd numbers is 25.














