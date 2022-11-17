/* В дополнение к заданию 4.7 необходимо правильно обработать случай деления на 0. 
При попытке поделить на 0 программа должна выводить в консоль сообщение: Делить на 0 нельзя!. */

//let a = 2;
//let b = 1;
//let sign = "/";

switch (sign) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "/":
        if (b == 0) {
            console.log("Делить на 0 нельзя!");
            break;
        } else {
            console.log(a / b);
            break;
        }
    case "*":
        console.log(a * b);
        break;
}