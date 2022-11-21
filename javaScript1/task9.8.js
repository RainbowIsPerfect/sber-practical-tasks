/* В программе объявлена переменная list, в которую записан массив из числовых значений. 
Напишите программу, которая переворачивает массив list и выводит результат в консоль. 
Метод массива reverse() использовать нельзя. */

let list = [2, 45, 3, 6];

let arrLenght = list.length - 1;
let i = 0;
list_2 = [];

for (arrLenght; arrLenght >= 0 ;arrLenght--) {
    list_2[i] = list[arrLenght];
    i++;
}
list = list_2;
console.log(list);
