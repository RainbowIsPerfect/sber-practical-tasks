/* В программе задана переменная emails со строковым значением. В ней указано несколько значений электронной почты через пробел. 
Преобразуйте данное значение в массив так, чтобы каждая почта в строке являлась элементом массива. Результат выведите в консоль. */

let emails = "example@ex.ru primer@primer.com email@com.ru";

function getEmails(emails) {
    return emails.split(' ')
}

console.log(getEmails(emails));