/* В программе задана переменная value. 
Выведите в консоль ее тип. Не забудьте, что функция typeof со значением аргумента null выдает неправильный результат. 
При значении null необходимо вывести "null". */

//let value = new Object();
//let value = "Привет";

if (typeof value === "object" && value !== null) {
    console.log("null");
} else {
    console.log(typeof value);
}
