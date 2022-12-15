/* В программе объявлены переменные name и phone, которые хранят строки. В name указано название заведения, а в phone — его номер телефона. 
Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте свойство validPhone, 
которое проверяет значение свойства phone на вхождение знака + в начале строки. 
Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true. 
Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. 
Получившийся экземпляр класса запишите в переменную deliveryName. */

let name = "Pizza",
phone = "+81234567890";

class Delivery {
    constructor(name, phone, validPhone) { 
        this.name = name; 
        this.phone = phone;
        this.validPhone = this.phone[0] === '+';
    }
}
let deliveryName = new Delivery(name, phone)

console.log(deliveryName);