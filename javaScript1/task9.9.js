/* В программе объявлена переменная sentence со строковым значением. 
Преобразуйте эту строку в массив так, чтобы каждое слово было отдельным элементом массива. 
Результат выведите в консоль.
Метод строки split() использовать нельзя. */

let sentence = "Завтра будет лучше чем вчера";

let sentenceModified = sentence + ' ';
let array = [];
let arrayIndex = 0;
let word = '';
for (let i = 0; i <= sentence.length; i++) {
    if (sentenceModified.charAt(i) == ' ') {
        array[arrayIndex] = word;
        arrayIndex++;
        word = '';
    } else {
        word +=sentenceModified.charAt(i);
    }
}
console.log(array);