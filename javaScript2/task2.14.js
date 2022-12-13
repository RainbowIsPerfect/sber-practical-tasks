/* В программе задана переменная numbers, которая хранит массив из чисел. 
Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, 
чтобы их итоговая сумма не превышала 50. Результат выведите в консоль. */

let numbers = [10, 20, 10, 33, 55, 100];

function arraySum(numbers) {
    let counter = 0
    let i = numbers.reduce((prev, curr) => {
        if (prev+curr <=50) {
            counter == 0 ? counter += 2 : counter++;
            return prev + curr;
        } else return prev
    })
    return counter;
}

console.log(arraySum(numbers));