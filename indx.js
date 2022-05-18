"use strict";

let str = "some";
let strObj = new String(str);

/* console.log(typeof(str));
console.log(typeof(strObj)); */

console.dir([1,2,3]);

const soldier = {
        health: 400,
        armor: 100,

        sayHello: function() {
                console.log("Hello");
        }
};

/* 
const john = {
        health: 100
};

 */

const john = Object.create(soldier); // Создаем обьект, который прототипно наследуется (soldier) !! Важно запомнить

/* Object.setPrototypeOf(john, soldier);  //1 которому назначаем прототип, 2) обьект прототип которого назначаем !! Важно запомнить
 */
john.sayHello();