/* В программе объявлена переменная list, в которую записан массив числовых значений от 1 до 100. 
Используя цикл, сформируйте сумму из простых чисел этого диапазона и выведите результат в консоль. */


// Заполняем массив
let list = [];

let startValue = 5;
let endValue = 10;

for (let index = 0; index < endValue; index++) {
    list.push(startValue);
    startValue++;
}

// Задача
let sum = 0;

for (let i = 0; i < list.length; i++) {
    let primeNum = true;
    let value = list[i];
    for (let div = 2; div < value; div++) {
        if ( value % div == 0) {
            primeNum = false;
            break;
        } 
    }
    if (primeNum && value != 1) {
        sum += value;
    } 
}   

console.log(sum);