/* В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. 
На основе массива values сформируйте новый массив result, который является фрагментом values. 
Новый массив должен начинаться с первого вхождения булевого значения и заканчиваться последним вхождением булевого значения в массив values. 
Выведите получившийся массив в консоль. */

let values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"];

function arrayBetweenBooleans(values) {
    let start = values.indexOf(true)
    let end = values.lastIndexOf(false)
    let result = values.slice(start, end + 1)
    return result
}

console.log(arrayBetweenBooleans(values));