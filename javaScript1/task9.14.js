/* В программе объявлена переменная list, в которую записан массив. 
Используя цикл, сформируйте массив numbers_list, который содержит в себе только числа из массива list. 
Если в процессе прохода циклом по массиву list обнаружится значение false, последующие значения рассматривать не нужно. 
В конце программы выведите значение переменной numbers_list в консоль. */

let list = [2, "привет", 23, true, 2, false, 2];
let numbers_list = [];
let arrIndex = 0;

for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
        numbers_list[arrIndex] = list[i];
        arrIndex++;
    } else if (list[i] == false) {
        break;
    } 

}
console.log(numbers_list);