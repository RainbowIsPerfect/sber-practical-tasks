/* В программе объявлена переменная symbols со строковым значением. Напишите условный оператор, который реализует следующую логику:
Если сумма числовых значений Unicode первых двух символов делится на два без остатка, необходимо получившееся число конвертировать в unicode-символ и вывести в консоль
В ином случае необходимо вывести сообщение 'Символ обнаружить не удалось'. */

let symbols = "floor";

function getUnicode(symbols) {
    let sum = symbols.codePointAt(0) + symbols.codePointAt(1);
    return sum % 2 == 0 ? String.fromCodePoint(sum) : 'Символ обнаружить не удалось';
}

console.log(getUnicode(symbols));