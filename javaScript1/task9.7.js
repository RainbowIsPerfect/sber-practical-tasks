/* В программе объявлена переменная list, в которую записан массив из числовых значений. 
Рассчитайте произведение максимального и минимального элементов массива. Результат выведите в консоль. */

let list = [55, 45, 3, 23, 6];

// 1 вариант
console.log((Math.min.apply(null, list)) * (Math.max.apply(null, list)));


// 2 вариант
let min = list[0];
let max = min;

for (let i = 0; i < list.length; i++) {
    if (list[i] > max) max = list[i];
    if (list[i] < min) min = list[i];
}

console.log(min * max);