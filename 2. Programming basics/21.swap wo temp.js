//21. Write a program to swap two numbers without using a third variable

function swapDirectly(num1=2,num2=8){
    console.log(`Before swap num1: ${num1}`);
    console.log(`Before swap num2: ${num2}`);
    [num1, num2] =[num2,num1];
    console.log(`After swap num1: ${num1}`);
    console.log(`After swap num2: ${num2}`);
}
swapDirectly();

//output: 
// Before swap num1: 2
// Before swap num2: 8
// After swap num1: 8
// After swap num2: 2