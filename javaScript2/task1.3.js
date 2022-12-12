/* В программе задана переменная firstDiv со строковым значением. 
Определите, встречаются ли в данной строке два парных тега <p>. 
Выведите в консоль булевое значение true, если встречается, и false — в ином случае. */

let firstDiv = "<div><p>Первый заголовок</p><p>Второй заголовок</p></div>";

function checkTwoParagraphs(str) {
    if (str.includes('<p>')) {
        let firstP = str.indexOf('<p>') + 1;
        return str.indexOf('<p>', firstP) != -1 ? true : false;
    } else return false;
}

console.log(checkTwoParagraphs(firstDiv));