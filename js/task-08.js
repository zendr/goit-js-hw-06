/*
Напиши скрипт управління формою логіна.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/


const formEl = document.querySelector('.login-form');
const inputEmailEl = document.querySelector('input[type="email"]');
const inputPasswordEl = document.querySelector('input[type="password"]');
const btnSubmitEl = document.querySelector('button[type="submit"]');
// console.log(inputEmailEl);
// console.log(inputPasswordEl);
// console.log(btnSubmitEl);


  formEl.addEventListener('submit', onFormSubmit);


 function onFormSubmit(event) { 
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
     
     if (formElements.email.value === "" || formElements.password.value === "") {
          console.log('!!');
        return alert('Увага! Всі поля повинні бути заповнені!');
     }

        const formData = {
            mail, password
        };
     
     console.log(formData);   
    
   //  event.currentTarget.reset();   
    formEl.reset();

     
};
