/* В программе объявлены две переменные — price и range. 
Переменная range может принимать одно из трех строковых значений — month/day/week. 
Переменная price хранит в себе числовое значение. 
Необходимо написать программу, которая формирует строку с использованием данных переменных по следующему шаблону:
<значение price> Р в <эквивалент значения range на русском языке> */

//let price = 10000;
//let range = "week";

switch (range) {
    case "day":
        console.log(price + " Р в " + "день");
        break;
    case "week":
        console.log(price + " Р в " + "неделю");
        break;
    case "month":
        console.log(price + " Р в " + "месяц");
        break;
}