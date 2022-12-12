/* В программе задана переменная greetings со строковым значением. 
Определите позицию последнего вхождения подстроки username в значении переменной greetings. 
Результат выведите в консоль.*/

let greetings = "Приветствую, username! Сегодня вы получили два сообщения от username.";

function getLastUserNameIndex(str) {
    return str.toLowerCase().lastIndexOf('username');
}

console.log(getLastUserNameIndex(greetings));