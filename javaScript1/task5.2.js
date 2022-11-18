/* В программе объявлена переменная word со строковым значением. Переверните строку, используя цикл, и выведите результат в консоль. */

// let word = "мир";
let result = "";
let index = word.length - 1;
for (let i = 0; i <= index; index--) {
    result += word.charAt(index);
}
console.log(result);