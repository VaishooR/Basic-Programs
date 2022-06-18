//4. Write a program to accept Three Numbers & Print the Biggest of Given Three Numbers

function largestNumber(num1,num2,num3){
    if(num1>num2 && num1> num3){
        console.log(`The Largest Number is ${num1}.`)
    } else if(num2>num1 && num2> num3){
        console.log(`The Largest Number is ${num2}.`)
    }else{
        console.log(`The Largest Number is ${num3}.`)
    }
}
largestNumber(1,2,3);        //output: The Largest Number is 3
largestNumber(1000,200,500); //output: The Largest Number is 1000
largestNumber(84,12,67);     //output: The Largest Number is 84