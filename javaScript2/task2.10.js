/* В программе задана переменная randValues, которая хранит в себе массив. Его элементы могут являться как строковыми, так и числовыми значениями. 
Отсортируйте массив следующим образом:
В начале массива должны быть все числовые значения по возрастанию
В конце все строковые, упорядоченные по алфавиту
Результат выведите в консоль. */

let randValues = ["Банан", 3, "Апельсин", 2, "Вишня"];


function arraySort(randValues) {
    let numbers = randValues.filter((e => typeof e === 'number')).sort((a,b) => a-b);
    let strings = randValues.filter((e => typeof e === 'string')).sort();
    return numbers.concat(strings)
}

console.log(arraySort(randValues));

