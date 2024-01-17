//Array of Data
const names = ["David", "Kim", "Steve", "Katie"];

//Quick example of a for loop
for(let i = 0; i < names.length; i++){
    console.log(`Name: ${names[i]}`);
}

// Using a 'for .... of' loop
for(let name of names){
    console.log(`Name: ${name}`);
}

// Array of complex objects
//         'for ......in' loop
import employees from './data.json' assert {type:'json'}

const employee = employees[0];
for(let property in employee){
    console.log(`${property}: ${employee[property]}`);
}

console.log('----------------------------------------------');
console.log('----------------------------------------------');

//Bringing bth 'for..of' and 'for ...in' loops together

for(let emp of employees){
    for(let property in emp){
        console.log(`${property}: ${emp[property]}`);
    }
    console.log('----------------');
}