/* В программе объявлена переменная symbols со строковым значением. В данной строке могут встречаться буквенные символы и цифры. 
Опишите условие, которое выводит в консоль строку 'Первый символ цифра', если первый символ переменной symbols является цифрой. 
В противном случае необходимо вывести строку 'Первый символ не цифра'. */

let symbols = "1Первый номер";

// 1 Вариант
function firstSymbolIsNumber(symbols) {
    return isNaN(parseFloat(symbols[0])) ? "Первый символ не цифра" : "Первый символ цифра";
}

console.log(firstSymbolIsNumber(symbols));

// 2 Вариант 
function firstSymbolIsNumber2(symbols) {
    return /\d/.test(symbols[0]) ? "Первый символ цифра" : "Первый символ не цифра";
}

console.log(firstSymbolIsNumber2(symbols));

// 3 Вариант
// 48-57 Code 0-9
function firstSymbolIsNumber3(symbols) {
    return symbols.codePointAt(0) >= 48 && symbols.codePointAt(0) <= 57 ? "Первый символ цифра" : "Первый символ не цифра";
}

console.log(firstSymbolIsNumber3(symbols));