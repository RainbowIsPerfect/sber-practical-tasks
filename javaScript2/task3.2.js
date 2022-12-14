/* В программе объявлена переменная goods, которая хранит объект со свойствами, описывающими товар. 
Сформируйте массив, который содержит в начале все названия свойств объекта, а потом все их значения. Результат выведите в консоль. */

const goods = {
    title: "Самокат", 
    price: 6000,
    good_id: 1
};

function objectToArray(goods) {
    return Object.keys(goods).concat(Object.values(goods));
}

console.log(objectToArray(goods));