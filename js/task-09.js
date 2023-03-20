/*
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
*/


const bgColorEl = document.querySelector('.color');
const btnChangeColorEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

// console.log(bodyEl);
// console.log(bgColorEl);
// console.log(btnChangeColorEl);
// console.log(bgColorEl.textContent);

btnChangeColorEl.addEventListener('click', onBtnChangeColorClick);

function onBtnChangeColorClick(event) {
  const randomColor = getRandomHexColor();
  console.log('randomColor', randomColor);
  bgColorEl.textContent = randomColor;
  bodyEl.style.backgroundColor = randomColor;
};

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
