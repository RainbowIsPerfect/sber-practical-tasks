/* В программе объявлена переменная list, в которую записан массив из объектов. В каждом объекте записаны название продукта и его стоимость.
Выведите в консоль название продукта, цена которого является максимальной в заданном массиве. Если таких несколько, выведите название первого из них. */

let list = [
    { product: "Велосипед", price: 60 },
    { product: "Лыжи", price: 40 },
    { product: "Скейт", price: 32 }
];

// let max = list.reduce((acc, curr) => acc.b > curr.b ? acc :curr);

let max = list.reduce((prev, cur) => {
    if (prev.price > cur.price) {
        return prev
    }
    return cur
})

console.log(max.product);