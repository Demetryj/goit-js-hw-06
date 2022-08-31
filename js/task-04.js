/* Створи змінну counterValue, в якій буде зберігатися поточне значення 
     лічильника та ініціалізуй її значенням 0.
     Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй 
     значення лічильника.
     Оновлюй інтерфейс новим значенням змінної counterValue. */

let counterValue = 0;

const buttonDecrEl = document.querySelector('[data-action="decrement"]');
console.log(buttonDecrEl);
const buttonIncrEl = document.querySelector('[data-action="increment"]');
console.log(buttonIncrEl);
const result = document.querySelector('#value');

buttonDecrEl.addEventListener('click', event => {
  counterValue -= 1;
  result.textContent = counterValue;
  // return;
});

buttonIncrEl.addEventListener('click', event => {
  counterValue += 1;

  result.textContent = counterValue;
  // return;
});
