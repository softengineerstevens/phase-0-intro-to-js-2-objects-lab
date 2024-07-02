// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]: value};
};

const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
};
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};