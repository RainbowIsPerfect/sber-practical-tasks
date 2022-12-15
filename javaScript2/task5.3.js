/* В программе объявлены переменные firstName и lastName. Создайте объект user со свойствами firstName и lastName и добавьте getter и setter fullName. 
Сеттер fullName должен принимать имя и фамилию пользователя через пробел, разделять и присваивать свойствам firstName и lastName соответственно. 
Геттер fullName должен формировать строку, состоящую из имени и фамилии через пробел. */

let firstName = "Александр", lastName = "Петров";

let user = {
    firstName,
    lastName,
    set fullName(value) {
        value = value.split(' ')
        this.firstName = value[0];
        this.lastName = value[1];
    },
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

user.fullName = `${firstName} ${lastName}`;

console.log(user.fullName);
