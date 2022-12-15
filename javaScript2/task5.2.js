/* В программе задан объект employees, который содержит ряд свойств и методов. 
Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. Имена методов добавляться не должны. */

let employees = {
    firstName: "Петя",
    lastName: "Иванов",
    ratePerDay: 2500,
    workingDays: 5,
    getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
};

const getAllPropeties = () => {
    let i = '';
    for (let prop in employees) {
        if (typeof employees[prop] !== 'function') i += `${prop} `;
    }
    return i.trim().replaceAll(' ', ', ')
}

console.log(getAllPropeties());