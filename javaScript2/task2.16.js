/* В программе заданы два массива array_1 и array_2, элементы которого являются числами. Значения внутри одного массива уникальные. 
Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. 
Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию. */

let array_1 = [1, 4, 7, 8, 2];
let array_2 = [1, 5, 11, 6, 2];

function intersection(array_1, array_2) {
    let result = [];
    for (let i = 0; i < array_1.length; i++) {
        if (array_2.includes(array_1[i])) result.push(array_1[i])
    }
    return result.sort((a,b) => b - a);
}

console.log(intersection(array_1, array_2));