/* В программе объявлены две переменные start и end. 
Используя цикл, посчитайте сумму чисел из диапазона значений от start до end (включая концы), кратные значению 5. 
Результат выведите в консоль. */

// let start = 0;
// let end = 50;

let result = 0;
for (start; start <= end; start++) {
    if (start % 5 == 0) {
        result = result + start; 
    }
}
console.log(result);