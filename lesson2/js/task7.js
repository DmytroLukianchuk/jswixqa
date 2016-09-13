/*
 Файл list.html.

 Необходимо создать функцию которая выведет в консоль:

 первый элемент списка
 последний элемент списка
 количество элементов в списке
 */


function firstElement() {
    console.log("First list element is ", document.querySelector('li'));
}

function lastElement() {
    var ss = document.querySelectorAll('li');
    console.log("First last element is ", ss[ss.length - 1]);
}

function quontityOfElements() {
    console.log("The quantity of li elements is  ", document.querySelectorAll('li').length);
}