/* В программе задан массив array. Напишите функцию count(), которая считает количество элементов массива array и выводит в консоль сообщение, как в примере. */

let array = [true, 4, "word", "10n", false];

function count() {
    return `Количество элементов в массиве: ${array.length}`;
}

console.log(count(array));