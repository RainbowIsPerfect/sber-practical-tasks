/* В программе задан двумерный массив array. Создайте и вызовите функцию countString(), 
которая считает количество значений массива array, у которых второй элемент является строкой. 
Функция countString() должна выводить в консоль сообщение, как в примере. */

let array = [
    [ "boolean", true ], 
    [ "number", 4 ],
    [ "string", "word" ],
    [ "object", 'word'],
    [ "string", "word" ],
];

function countString() {
    let counter = 0;
    array.forEach(e => typeof e[1] === 'string' ? counter++ : counter)
    return `Количество строковых элементов в именованном массиве: ${counter}`
}

console.log(countString());