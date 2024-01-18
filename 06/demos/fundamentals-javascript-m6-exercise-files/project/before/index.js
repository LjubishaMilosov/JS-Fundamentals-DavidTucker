// Import Sample Data
import employees from './data.json' assert { type: 'json' }

import createPrompt from 'prompt-sync';
let prompt = createPrompt();

function getInput(promptText, validator, transformer){
  let value = prompt(promptText);
  if(validator && !validator(value)){
    console.error(`Invalid Input`);
    process.exit(1);
  }
  if(transformer){
    return transformer(value);
  }
  return value;
}

// Validator functions ---------------------------------------------------------------------------------------------------------

const isStringInputValid = function(input){
  return (input) ? true : false;
}

const isBooleanInputValid = function(input){
  return(input === "yes" || input === "no");
}

const isStartYearValid = function(input){
  let numValue = Number(input);
  if(!Number. isInteger(numValue) || numValue < 1990 || numValue >2023){
    return false;
  }
  return true;
}

const isStartMonthValid = function(input){
  let numValue = Number(input);
  if(!Number.isInteger(numValue) || numValue < 1 || numValue > 12){
    return false;
  }
  return true;
}

const isStartDayValid = function(input){
  let numValue = Number(input);
  if(!Number.isInteger(numValue) || numValue < 1 || numValue > 31){
    return false;
  }
  return true;
}

// Application Commands ---------------------------------------------------------------------------------------------------------

function listEmployees(){
  console.log(`Employee List ----------------------------`);
    console.log('');

    for (let emp of employees) {
      for (let property in emp) {
        console.log(`${property}: ${emp[property]}`);
      }
      console.log('');
      prompt('Press enter to continue...');
    }
    console.log(`Employee list completed`);
}

function addEmployee(){
 console.log(`Add Employee -----------------------------`);
    console.log('');
    let employee = {};
    employee.firstName = getInput("First Name: ", isStringInputValid);
    employee.lastName = getInput("Last Name: ", isStringInputValid);
    let startDateYear = getInput("Employee Star Year (1990-2023): ", isStartYearValid);
    let startDateMonth = getInput("Employee Start Date Month(1-12): ", isStartMonthValid);
    let startDateDay = getInput("Employee Star Date Day(1-31): ", isStartDayValid);
    employee.startDate = new Date(startDateYear, startDateMonth -1, startDateDay);
    employee.isActive = getInput("Is employee active (yes or no): ",isBooleanInputValid, i => (i === "yes"));

    // let firstName = prompt("First Name: ");
    // if (!firstName) {
    //   console.error(`Invalid first name`);
    //   process.exit(1);
    // }
    // employee.firstName = firstName;

    // let lastName = prompt("Last Name: ");
    // if (!lastName) {
    //   console.error(`Invalid last name`);
    //   process.exit(1);
    // }
    // employee.lastName = lastName;

    // let startDateYear = prompt("Employee Start Year (1990-2023): ");
    // startDateYear = Number(startDateYear);
    // // Check if it is a valid integer
    // if (!Number.isInteger(startDateYear)) {
    //   console.error(`Enter a valid start date year`);
    //   process.exit(1);
    // }
    // // Check if the number is in the range
    // if (startDateYear < 1990 || startDateYear > 2023) {
    //   console.error(`Enter a start date year within the correct range`);
    //   process.exit(1);
    // }

    // let startDateMonth = prompt("Employee Start Date Month (1-12): ");
    // startDateMonth = Number(startDateMonth);
    // // Check if it is a valid integer
    // if (!Number.isInteger(startDateMonth)) {
    //   console.error(`Enter a valid start date month`);
    //   process.exit(1);
    // }
    // // Check if the number is in the range
    // if (startDateMonth < 1 || startDateMonth > 12) {
    //   console.error(`Enter a start date month within the correct range`);
    //   process.exit(1);
    // }

    // let startDateDay = prompt("Employee Start Date Day (1-31): ");
    // startDateDay = Number(startDateDay);
    // // Check if it is a valid integer
    // if (!Number.isInteger(startDateDay)) {
    //   console.error(`Enter a valid start date day`);
    //   process.exit(1);
    // }
    // // Check if the number is in the range
    // if (startDateDay < 1 || startDateDay > 31) {
    //   console.error(`Enter a start date day within the correct range`);
    //   process.exit(1);
    // }

    // // Date elements are correct, let's create the date
    // employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);

    // let isActive = prompt("Is employee active (yes or no): ");
    // // Check if incorrect value was entered
    // if (isActive !== "yes" && isActive !== "no") {
    //   console.error(`Enter yes or no for employee active status`);
    //   process.exit(1);
    // }
    // employee.isActive = (isActive === "yes");

    // Output Employee JSON
    const json = JSON.stringify(employee, null, 2);
    console.log(`Employee: ${json}`);
}

// Application Execution -------------------------------------------------------------------------------------------------------

// Get the command the user wants to exexcute
const command = process.argv[2].toLowerCase();

switch (command) {

  case 'list':
    listEmployees();
    break;

  case 'add':
    addEmployee();
    break;

  default:
    console.log('Unsupported command. Exiting...');
    process.exit(1);

}



