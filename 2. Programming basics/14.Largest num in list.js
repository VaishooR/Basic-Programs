// 14. Write a program to find largest number of a list of numbers

function largestNumInList(arr){
    let maxNumber=Math.max(...arr);
    console.log(`The largest number in the array [${arr}] is ${maxNumber}.`)
}
largestNumInList([1,2,3,4,5,6,7,8])
largestNumInList([50,85,33,2,93,49])

//output:

// The largest number in the array [1,2,3,4,5,6,7,8] is 8.
// The largest number in the array [50,85,33,2,93,49] is 93.