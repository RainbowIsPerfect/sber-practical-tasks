/* В программе объявлена переменная list, в которую записан массив из числовых значений. 
Гарантируется, что массив не пустой. 
Реализуйте функцию average(list), которая принимает в качестве аргумента массив, 
рассчитывает среднее значение элементов массива, округляет получившееся значение по правилам математики и получившееся значение возвращает. 
Вызовите функцию average(list) и в качестве аргумента передайте список list. 
То, что функция вернет, необходимо вывести в консоль. */

let list = [2, 45, 3, 23, 6];

let sum = 0;

function average(list) {
    for (let i = 0; i < list.length; i++) {
        sum +=list[i];
    }
    return console.log(Math.round(sum / list.length)); 
}

average(list);