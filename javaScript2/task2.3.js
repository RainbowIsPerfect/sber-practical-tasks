/* В программе задана переменная layout, которая хранит в себе строковое значение. 
Данная строка содержит в себе часть HTML-верстки с числами. На основе значения layout сформируйте массив из чисел, которые встречаются в верстке. 
Если число четное, возведите его в квадрат, в ином случае оставьте без изменений. Полученный массив выведите в консоль. 
Если строка layout не содержит чисел, выведите пустой массив. */

let layout = "<div>10<span>14<p>25<p>39<p>8<p>101</p></p></p></p></span></div>";

function arrayFromString(layout) {
    let newArray = layout.replace(/\D/g, ' ').trim().split(' ').filter(e => e != '');
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = parseFloat(newArray[i]);
        if (newArray[i] % 2 == 0) newArray[i] *= newArray[i];
    }
    return newArray
}

console.log(arrayFromString(layout));