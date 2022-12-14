/* В программе объявлен объект hero, свойства которого описывают информацию о герое. 
В объекте в том числе определен метод getPosition, который возвращает позицию героя в игре. 
Определите, почему вызов getPosition работает некорректно. Исправьте эту ошибку. */

let hero = { 
    nick: "FirstHero", 
    position: "Лагерь",
    getPosition() {console.log("Позиция героя: " + this.position)}
};

console.log(hero.getPosition());