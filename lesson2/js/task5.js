/*
 ЗАДАНИЕ 1
 Напишите функцию changeArguments которая возвращать
 массив аргументов, к каждому элементу которого
 добавлена строка «arg-»
 changeArguments(1,2,3); // ['arg-1', 'arg-2', 'arg-3']
 */

function changeArguments(arr) {
    var result = [];

    arr.forEach(e => result.push("arg-" + e));
    return result;
}

console.log("Task 5.1");
console.log(changeArguments([1, 2, 3, 4, 5]));
