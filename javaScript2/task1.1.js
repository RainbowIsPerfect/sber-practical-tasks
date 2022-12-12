/* В программе задана переменная message со строковым значением. Определите наличие подстроки привет в начале строки переменной message. 
Если данное условие выполняется, выведите в консоль булевое значение true, в ином случае — false. Сравнение должно быть без учета регистра. 
Правильный ответ выведите в консоль. */

let message = "Приветствую вас";

function includesHi(message) {
    return message.toLowerCase().startsWith('привет') ? true : false
}

console.log(includesHi(message));
