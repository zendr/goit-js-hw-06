/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/


const inputEl = document.querySelector('#validation-input');
// const validNumberLength = inputEl.dataset.length;
const validNumberLength = Number(inputEl.dataset.length);
// console.log(inputEl);
// console.log(validNumberLength);


// inputEl.addEventListener('blur', onInputValid);
inputEl.addEventListener('blur', onInputInValid);
inputEl.addEventListener('input', onRemoveClass);
inputEl.addEventListener('blur', onRemoveClass);


function onRemoveClass(event) {
    if (event.currentTarget.value.length === 0) {
        inputEl.classList.remove("invalid", "valid");
        // console.log('remove');
    }
//     if (event.currentTarget.value.length === validNumberLength) {
//         inputEl.classList.remove("invalid");
//    } else inputEl.classList.remove("valid");
};


function onInputInValid(event) {

    if (event.currentTarget.value.length !== validNumberLength) {
        console.log('invalid', validNumberLength);
        inputEl.classList.remove("valid");
      inputEl.classList.add("invalid");
// console.log('invalid');

    } else {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }
        

};
