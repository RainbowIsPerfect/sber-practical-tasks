/* Используя цикл, сформируйте массив list со значениями от 10 до 20. Выведите значение переменной list в консоль. */

let list = [];
let value = 10;
for (let i = 0; i < 11; i++) {
    list[i] = value;
    value++;
}

console.log(list);