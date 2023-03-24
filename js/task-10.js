/*
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

const numberBoxEl = document.querySelector('input[type="number"]');
const bgCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const containerBoxesEl = document.querySelector('#boxes');
const boxEl = document.querySelector('.div-item');

let originalSize = 30;
const nullSize = 0;

// console.log(numberBoxEl);
// console.log(bgCreateEl);
// console.log(btnDestroyEl);
// console.log(containerBoxesEl);

bgCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);

function onFindAmount() {
let amount = numberBoxEl.value;
// console.log('amount', amount); 
  return amount;
};  

function createBoxes(amount) {
  if (onFindAmount() >= 1) {
   
    let amount = onFindAmount();

      for (let i = 1; i <= amount; i += 1) {
        
        const boxEl = document.createElement("div");

        boxEl.style.width = `${originalSize}px`;
        boxEl.style.height = `${originalSize}px`;
        originalSize += 10;
        const randomColor = getRandomHexColor();
// console.log('randomColor', randomColor);
        boxEl.style.backgroundColor = randomColor;
// console.log(boxEl);
        containerBoxesEl.append(boxEl);
      } 
    
  } else
  return alert('Введіть число!');
};

function destroyBoxes() {
  containerBoxesEl.innerHTML = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


