/*
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
*/

const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

// console.log('inputEl',inputEl);
// console.log('textEl',textEl);
// console.log('textEl.textContent', textEl.textContent);
// console.log('inputEl.value', inputEl.value);

inputEl.addEventListener('input', onChangeInputFontSize);


function onChangeInputFontSize(event) {
        textEl.style.fontSize = `${inputEl.value}px`;
};
