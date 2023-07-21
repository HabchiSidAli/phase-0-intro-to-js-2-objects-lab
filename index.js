// Write your solution in this file!

let employee = {
    name: "Ali",
    streetAddress: "Grove street",
}

function updateEmployeeWithKeyAndValue(employee, key, object){
    let newEmployee = {...employee};
    newEmployee[key] = object;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, object){
    employee[key] = object;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}