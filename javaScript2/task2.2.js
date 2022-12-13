/* В программе задана переменная partNumbers, которая хранит в себе массив. 
Каждый элемент массива является артикулом товара. Напишите программу, которая создаст новый массив на основе partNumbers. 
В новом массиве должны быть все элементы из partNumbers, которые заканчиваются на две цифры и два буквенных символа. 
Все остальные элементы необходимо отбросить. Значение нового массива выведите в консоль. */

let partNumbers = ["ER1234COM", "FIV9874512U", "GE123JO", "P4321NO"];

function arrayFilter(partNumbers) {
    let newArray = partNumbers.filter(e => e.slice(-4).match(/\d{2}[A-Za-z]{2}/))
    return newArray;
}

console.log(arrayFilter(partNumbers));