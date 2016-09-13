/*
 ЗАДАНИЕ 2
 Написать функцию которая преобразует элементы в
 массиве в camelCase формат
 var styles = [
 'font-size',
 'background-position',
 'background-color',
 'border-top-right-radius',
 'z-index'
 ];
 // fontSize
 */


function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function toCamelCase(phraze) {
    var words = phraze.split('-');
    return words[0] + words.slice(1, words.length).map(capitalize).join("");
}

var styles = [
    'font-size',
    'background-position',
    'background-color',
    'border-top-right-radius',
    'z-index'
];

console.log("Task 5.2");
var styles1 = styles.join(", ");
console.log(toCamelCase(styles1));