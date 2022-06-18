//8.  Write a program to accept a string in any case and print it by another case

function changeCase(text){
    if(text==text.toLowerCase()){
        console.log(text.toUpperCase());
    }else{
        console.log(text.toLowerCase());
    }
}
changeCase('hello');   //output: HELLO
changeCase('WELCOME');  //output: welcome
