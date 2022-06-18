//3.Write a program to Accept Student Roll No, Marks in 3 Subjects and print it’s Average.

function average(rollNo,subj1,subj2,subj3){
    console.log(`Roll Number: ${rollNo}, 
    Subject1: ${subj1},
    Subject2: ${subj2},
    Subject3: ${subj3}. `);

    return (subj1 + subj2 + subj3)/3;
}
console.log('Average marks of Student1 is ' + average('Mk101',60,60,60))
console.log('Average marks of Student2 is ' + average('Mk102',100,100,100))

//output: 
//         Roll Number: Mk101, 
//             Subject1: 60,
//             Subject2: 60,
//             Subject3: 60 
//         Average marks of Student1 is 60
//         Roll Number: Mk102, 
//             Subject1: 100,
//             Subject2: 100,
//             Subject3: 100 
//         Average marks of Student2 is 100