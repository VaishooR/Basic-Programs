//17. Write a program to check whether a number is prime number or not.


function primeOrNot(number){
    let isPrime=true;
    if(number===1){
        console.log("1 is neither prime or composite")
    }else if(number>1){
        for(let i=2;i<number;i++){
            if(number%i==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            console.log(`${number} is a prime number`)
        } else {
            console.log(`${number} is a not prime number`);
        }
    }else{
        console.log(`Numbers less than 1 cannot be a prime number.`);
    }
}
primeOrNot(11);
primeOrNot(73);
primeOrNot(4);
primeOrNot(1);

//output:
// 11 is a prime number
// 73 is a prime number
// 4 is a not prime number
// 1 is neither prime or composite