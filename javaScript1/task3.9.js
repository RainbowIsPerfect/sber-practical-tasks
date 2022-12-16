/* В программе задана переменная value. 
Выведите в консоль ее тип. Не забудьте, что функция typeof со значением аргумента null выдает неправильный результат. 
При значении null необходимо вывести "null". */

// let value = new Object();
let value = "Привет";

// 1 Вариант

if (typeof value === "object" && value !== null) {
    console.log("null");
} else {
    console.log(typeof value);
}

// 2 Вариант

typeof value === "object" && value !== null ? console.log("null") : console.log(typeof value);