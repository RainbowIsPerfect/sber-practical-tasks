/* В программе задана переменная tickets, которая хранит в себе строковое значение. 
В этой переменной указаны номера билетов на поезд (после слова Train) и на самолет (после слова Airplane). 
Необходимо написать скрипт, который на основе строки из переменной tickets формирует объект. 
Он должен хранить в себе два ключа (train, airplane), а в качестве значений — массивы с номерами билетов для поезда и самолета соответственно. */

let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140.";

function createObject(tickets) {
    let airplaneTickets = tickets.slice(tickets.lastIndexOf(':'), tickets.lastIndexOf('.')).replace(/[,:]/g, '').trim().split(' ');
    let trainTickets = tickets.slice(tickets.indexOf(':'), tickets.indexOf('.')).replace(/[,:]/g, '').trim().split(' ');
    let obj = {
        'train': [],
        'airplane':[]
    }
    obj.train = trainTickets;
    obj.airplane = airplaneTickets;
    return obj;
}

console.log(createObject(tickets));