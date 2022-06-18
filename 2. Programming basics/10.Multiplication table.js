//10. Write a program to print table of any number.

function multiplicationTable(num){
    for(i=1;i<=10;i++){
        let ans=num*i
        console.log(`${num}*${i} = ${ans}`)
    }
}
multiplicationTable(9);

//output:
// 9*1 = 9
// 9*2 = 18
// 9*3 = 27
// 9*4 = 36
// 9*5 = 45
// 9*6 = 54
// 9*7 = 63
// 9*8 = 72
// 9*9 = 81
// 9*10 = 90



