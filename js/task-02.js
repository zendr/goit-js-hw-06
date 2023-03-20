/*
HTML містить порожній список ul#ingredients.

<ul id="ingredients"></ul>

JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createIngredientsEl = elements => {
  return ingredients.map(elem => {
    const ingredientEl = document.createElement('li');
  //  console.log(elem);
    ingredientEl.textContent = elem;
    ingredientEl.classList.add('item');
  //  console.log(ingredientEl);
  
    return ingredientEl;
  });
};

const ingredientsListEl = document.querySelector('#ingredients');
console.log('Список ul#ingredients ', ingredientsListEl);

const listItemsEl = createIngredientsEl();
console.log('Список зачень елементів <li> ', ...listItemsEl);

ingredientsListEl.append(...listItemsEl);
