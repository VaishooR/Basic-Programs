//22. Write a program to perform all arithmetic calculations (=, -, *, /) using switch case.

function performArithmeticCal(num1,num2,operation){
    switch(operation){
        case '+':
            console.log(`Sum: ${num1+num2}`);
            break;
        case '-':
            console.log(`Difference: ${num1-num2}`);
            break;
        case '*':
            console.log(`Multiplication: ${num1*num2}`);
            break;
        case '/':
            console.log(`Division: ${num1/num2}`);
            break;
    }
}
performArithmeticCal(10,5,'+');
performArithmeticCal(10,5,'-');
performArithmeticCal(10,5,'*');
performArithmeticCal(10,5,'/');

//output:
// Sum: 15
// Difference: 5
// Multiplication: 50
// Division: 2
