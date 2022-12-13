/* В программе задана переменная words, которая хранит в себе массив строковых значений. 
Напишите скрипт, который считает количество палиндромов и непалиндромов в массиве words. 
Результат должен представлять собой массив из двух элементов, где первое значение — количество палиндромов, а второе — непалиндромов. */

let words = ["Заказ", "Такси", "Доход"];

function palindromeCounter(words) {
    let result = [0,0];
    words.forEach(e => {
        e.toLowerCase().split('').reverse().join('') === e.toLowerCase() ? result[0] += 1 : result[1] += 1;
    })
    return result;
}

console.log(palindromeCounter(words));