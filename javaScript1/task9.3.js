/* В программе объявлена переменная list, которая содержит массив чисел. 
Используя цикл, посчитайте сумму чисел и выведите в консоль. */

let list = [23, 13, 64, 15];

// 1 Вариант

let result = 0;
let result2 = 0;

for (let i = list.length - 1; i >= 0; i--) {
    result = result + list[i];
}

console.log(result);

// 2 Вариант

for (let value of list) {
    result2 = result2 + value
}

console.log(result2);