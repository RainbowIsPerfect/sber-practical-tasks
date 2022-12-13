/* В программе задана переменная users, которая хранит в себе массив. Элементы данного массива являются объектами. 
Определите индекс элемента, значение свойства role которого содержит больше одного слова. 
Результат выведите в консоль разработчика. */

let users = [
    {login: "user1", role: "Admin"},
    {login: "user2", role: "State user"},
    {login: "user3", role: "Moderator"}
];

function findIndexOfRole(users) {
    return users.findIndex(e => e.role.trim().includes(' '))
}

console.log(findIndexOfRole(users));