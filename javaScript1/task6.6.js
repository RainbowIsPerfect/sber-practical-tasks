/* В программе объявлены две переменные — value и total, в которых записаны числовые значения. 
Напишите функцию getPercent(value, total), которая возвращает процент числа value от значения total. 
Вызовите эту функцию с value и total в качестве аргументов. Результат работы функции выведите в консоль. */

//let value = 4;
//let total = 80;

function getPercent(value, total) {
    return value / total * 100;
}

console.log(getPercent(value,total));