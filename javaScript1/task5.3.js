/* В программе объявлена переменная word, в которой записано строковое значение. Определите, является ли word палиндромом:
если является, выведите в консоль "Слово является палиндромом!";
если не является, выведите в консоль "Слово не является палиндромом!".
Примечание:
Строка word состоит только из букв разного регистра (большие и маленькие). */

//let word = "Доход";

let result = "";
let index = word.length - 1;

for (let i = 0; i <= index; index--) {
    result += word.charAt(index);
}
if (word.toLowerCase() == result.toLowerCase()) {
    console.log("Слово является палиндромом!");
} else {
    console.log("Слово не является палиндромом!");
}