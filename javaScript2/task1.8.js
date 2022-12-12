// В программе задана переменная phone со строковым значением. 
// В ней хранится номер телефона и, помимо цифр, иные символы. Преобразуйте строку так, чтобы в номере отсутствовали следующие символы: (,/:/*/) 

let phone = "+712:34567*8,90";
// 1 Вариант
function getPhoneNumber(phone) {
    let i = /[\+\d]/g
    return phone.match(i).join('')
}

console.log(getPhoneNumber(phone));

// 2 Вариант
function getPhoneNumber2(phone) {
    let i = /[^+\d]/g
    return phone.replace(i, '')
}

console.log(getPhoneNumber2(phone));