//5.  Write a program to swap two numbers using a third variable called temp.

function swap(a=5,b=9){
    console.log(`Value of a & b before swap is ${a} and ${b}.`);
     let temp=a; //temp=5
      a=b;       //a=9
      b=temp;    //b=5
     console.log(`Value of a & b after swap is ${a} and ${b}.`);
}
swap();

//output:
// Value of a & b before swap is 5 and 9.
// Value of a & b after swap is 9 and 5.