/* В программе объявлены две переменные — list_1 и list_2, в каждой из которых хранится массив из чисел. 
Объедините два массива в один и каждое значение возведите в квадрат. Результат выведите в консоль. */

let list_1 = [12, 3];
let list_2 = [2, 3];

let list_3 = list_1.concat(list_2);

for (let index = 0; index < list_3.length; index++) {
    list_3[index] = list_3[index]**2; 
}
console.log(list_3);
