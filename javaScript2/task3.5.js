/* В программе задан двумерный массив employee. 
Удалите у данного массива значение, у которого первый элемент hireDate, и добавьте новое значение ["jobName", "IT PROG"] в конец массива. 
Результат выведите в консоль. */

let employee  = [
    ["firstName","Ivan"],["hireDate","21.10.2015"],["hireDate","21.10.2015"]
];

function modifyArray(employee) {
    employee = employee.filter(e => e[0] !== 'hireDate')
    employee.push(["jobName", "IT PROG"])
    return employee;
}

console.log(modifyArray(employee));