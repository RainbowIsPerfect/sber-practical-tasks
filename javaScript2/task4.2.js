/* В программе объявлен объект input и функция sayHi(), которая выводит в консоль сообщение из примера. 
Используя метод присвоения контекста, свяжите контекст объекта input с функцией sayHi() и вызовите функцию sayHi(). */

const input = {
    id: 1,
    value: "Добрый вечер",
    firstName: "Григорий",
    lastName: "Стрельников" 
};


function sayHi() {
    console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
}

sayHi.call(input);
