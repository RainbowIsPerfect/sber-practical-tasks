/* В программе задана переменная values, которая хранит массив из строк. 
Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. Результат выведите в консоль. */

let values = [];

function arraySum(values) {
    if (values.length > 0){
        let result = values.reduce((prev, curr) => {
            if (isNaN(prev) === false && isNaN(curr) === false) {
                return +prev + +curr
            }
            return prev;
        })
        return typeof result === 'number' ? result : 0;
    } else return 0
}

console.log(arraySum(values));