/* В программе объявлен объект props, у которого задан набор свойств. 
Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами и их значениями (без методов). 
Привяжите объект props в качестве контекста функции getValue() и присвойте получившуюся функцию переменной getValue. */

let props= { 
    name: "Анатолий", 
    age: 29,
    sayHi: ()=>"привет"
}

function getValue() {
    let i = '';
    for (var prop in props) {
        if (typeof props[prop] !== 'function') i +=`${prop}: ${props[prop]}, `;
    }
    return `Значения свойств объекта props (${i.slice(0, i.length - 2)})`
}

getValue = getValue.bind(props);

console.log(getValue());