//24. Write a program to the number count of letters in a given text.

function lettersCount(text){
    let letters=text.split(' ').join('')
    return letters.length
}
console.log(lettersCount('Hi Hey Hello'))  //output:10
