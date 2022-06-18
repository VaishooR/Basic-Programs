//16. Write a program to find the area of a triangle when three sides are given.

function areaOfTriangle(side1,side2,side3){
    let s=(side1+side2+side3)/2;
    let area=Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
    console.log(`Area of the triangle is ${area} square units.`);
}
areaOfTriangle(3,4,5)   //output:Area of the triangle is 6 square units.
areaOfTriangle(12,16,20)  //output: Area of the triangle is 96 square units.