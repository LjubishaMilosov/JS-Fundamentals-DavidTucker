//Array of complex objects
import employees from './data.json' assert {type:'json'}

//Basic while loop
let i = 0;
while(employees[i]){
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
    i++
}


console.log('--------------------------------------------------');

//Do While loop
i = 0;
do{
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
    i++
}while(employees[i]);