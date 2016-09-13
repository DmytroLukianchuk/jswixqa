// 1. Создайте функцию которая изменит текст заголовка страницы (h1) с помощью свойства элемента innerText.
function chanteText() {
    document.querySelector('h1').innerText = 'changedInnerText';
}

// 2. Создайте функцию которая получит значение атрибута title у элемента с классом content и запишет это значение атрибут alt первому постеру (с годзиллой).
function changeAlt() {
    document.querySelector('img').setAttribute('alt', document.querySelector('.content').getAttribute('title'))
}

// 3. Создайте функцию которая скроет все картинки
function hideAllPics() {
    document.querySelectorAll('img').forEach(img => {img.style.visibility = 'hidden'} )
}

// 4. Создайте функцию которая добавит css класс intro для первого параграфа текста (несколькими способами)
function addClass() {
    document.querySelector('p').classList.add('intro');
    document.querySelector('p').className = document.querySelector('p').className + ' intro'
}

// 5. Создайте функцию которая установит первому постеру ширину картинки 100px
function chageWidthOfFirstPost() {
    document.querySelector('img').style.width = '100px';
}

// 6. Создайте функцию выполнение которой изменит размер всем изображениям на странице, так чтобы размер первого был 100px, и каждого следующего на 20px больше предыдущего.
function changeAllPics() {
    document.querySelectorAll('img').forEach((img, i) => {img.style.width = 100 + i * 20 + 'px' } )
}
