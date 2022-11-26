/* В программе объявлена переменная num, в которой записано числовое значение. 
Используя цикл, возведите значение переменной в квадрат три раза. 
Каждый результат конкатенируйте через пробел и выведите в консоль. */

let num = 2;

function getSquares(number) {
    let str = '';
    for (let i = 0; i < 3; i++) {
        number *= number;
        str += number + ' '; 
    }
    return str.trim();
}

console.log(getSquares(num));