// 12.Write a program to accept any single digit number and print it in words.


function digitToWord(num){
    switch(num){
        case 0:
        console.log("Zero");
        break;
        case 1:
        console.log("One");
        break;
        case 2:
        console.log("Two");
        break;
        case 3:
        console.log("Three");
        break;
        case 4:
        console.log("Four");
        break;
        case 5:
        console.log("Five");
        break;
        case 6:
        console.log("Six");
        break;
        case 7:
        console.log("Seven");
        break;
        case 8:
        console.log("Eight");
        break;
        case 9:
        console.log("Nine");
        break;
        default:
            console.log("Please type a number between 0 to 9");
            break;
    }
}
digitToWord(5)  //output: Five
digitToWord(8)  //output: Eight
digitToWord(25)  //output: Please type a number between 0 to 9


