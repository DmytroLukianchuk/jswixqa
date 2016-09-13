/*
 ЗАДАНИЕ 1
 Напишите функцию changeArguments которая возвращать
 массив аргументов, к каждому элементу которого
 добавлена строка «arg-»
 changeArguments(1,2,3); // ['arg-1', 'arg-2', 'arg-3']
 */

function changeArguments(arg1, arg2, arg3) {
    var arr = [arg1, arg2, arg3];

    arr.forEach(function (element, index) {
        arr[index] = "arg-" + element
    });
    return arr;
}

console.log("Task 5.1");
console.log(changeArguments(1, 2, 3));

