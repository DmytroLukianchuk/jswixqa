/*
 Занятие 3. Задание

 Необходимо создать функцию Welcome которая будет принимать 2 аргумента — имя и фамилия, и выводить в консоль сообщение "Приветствую, Имя Фамилия" со значениями из аргументов.
 Дополнительно: сделать так чтобы функция принимали только строки в качестве аргументов, в противном случае выводила в консоль сообщение об ошибке.
 */

function Welcome(firstName, lastName) {
    if (typeof(firstName) === "string" && typeof(lastName) === "string") {
        console.log("Welcome " + firstName + " " + lastName)
    } else {
        console.error("Not correct type of argument")
    }
}

//unit tests :)
console.log("Task 3.1");
Welcome("Dima", "Lukianchuk");

console.log("Task 3.2");
Welcome(12345, "String");