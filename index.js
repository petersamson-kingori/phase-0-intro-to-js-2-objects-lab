// Write your solution in this file!
let employee = {
    name:"",
    streetAdress:""
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    return{
        ...employee,
        [key]:value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = "Sam";
    employee.streetAddress ="12 Broadway";
    return employee
    
}

// function deleteFromEmployeeByKey(employee, key) {
//     const newEmployee = Object.assign({}, employee);
    
//     delete newEmployee[key];
    
//     return newEmployee;
//   }

function deleteFromEmployeeByKey(employee, key) {
    const deletedEmployees = {...employee}
    delete deletedEmployees[key];
    return deletedEmployees
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key];
    return employee
  }