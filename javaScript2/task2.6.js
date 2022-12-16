/* В программе задана переменная values, которая хранит в себе массив. Элементы массива являются числами. 
Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. 
Результат выведите в консоль в виде булевого значения (true, если содержит, и false, если нет). */

let values = [10, 185, 1521, 980, 123, 555];

// 1 Вариант

function checkLength(values) {
    return values.some(e => e.toString().length === 4);
}

console.log(checkLength(values));

// 2 Вариант

const checkLength2 = (values) => {
    let flag = false;
    values.forEach(e => {
        if (e.toString().search(/^\d{4,4}$/) === 0) flag = true;
    });
    return flag;
}

console.log(checkLength2(values));