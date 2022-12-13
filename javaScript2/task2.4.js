/* В программе задана переменная tasks, которая содержит массив. Элементы данного массива являются объектами с ключами title и completed. 
Сформируйте новый массив titles, который в качестве значений может хранить свойства title из всех значений массива tasks. Результат выведите в консоль. */

let tasks = [
    {title: "Умыться" , completed: true},
    {title: "Сделать зарядку" , completed: true},
    {title: "Приготовить завтрак" , completed: false}
];

function arrayOfObjectKeys(tasks) {
    let titleArray = [];
    tasks.forEach(e => titleArray.push(e.title))
    return titleArray;
}

console.log(arrayOfObjectKeys(tasks));