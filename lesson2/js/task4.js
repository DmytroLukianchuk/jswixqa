/*
 Занятие 3.
 Напишите функцию arraySearch для поиска в массиве, при нахождении элемента она должна возвращать true, и если не найдет — false.
 arraySearch(['alien', 'zombie', 'vampire'], 'zombie'); // true
 arraySearch(['alien', 'zombie', 'vampire'], 'alien'); // true
 arraySearch(['alien', 'zombie', 'vampire'], 'human'); // false
 Дополнительно: сделать проверку на вхождение в строке, если элемент массива - строка:
 arraySearch([23, 'vampire', true, 'alien'], 'vam'); // true
 */

function arraySearch(array, searchWord) {
    return console.log(array.indexOf(searchWord) >= 0)
}
console.log("Task 4.1");
arraySearch(['alien', 'zombie', 'vampire'], 'zombie');
arraySearch(['alien', 'zombie', 'vampire'], 'alien');
arraySearch(['alien', 'zombie', 'vampire'], 'human');

function isStringInArray(array) {
    for (var i = 0; i < array.length; i++) {
       if (typeof(array[i]) === "string") {
           return true;
       }
    } return false;
}
console.log("Task 4.2");
console.log(isStringInArray([23, 'vampire', true, 'alien'], 'vam'));

