/* Створи функцію createBoxes(amount), яка приймає один параметр - число. 
Функція створює стільки <div>, скільки вказано в amount і 
додає їх у div#boxes.

    Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і 
вищим від попереднього на 10px.
    Всі елементи повинні мати випадковий колір фону у форматі HEX. 
Використовуй готову функцію getRandomHexColor для отримання кольору. 
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  let width = 20;
  let height = 20;

  let arrayStringsOfTags = [];

  for (let i = 1; i <= amount; i += 1) {
    // console.log(i);
    width += 10;
    height += 10;

    const divBox = document.createElement('div');
    const colorOfBox = getRandomHexColor();

    divBox.style.width = `${width}px`;
    divBox.style.height = `${height}px`;
    divBox.style.backgroundColor = colorOfBox;
    divBox.style.marginBottom = '10px';
    // console.log(divBox);
    arrayStringsOfTags.push(divBox);
  }
  boxesEl.prepend(...arrayStringsOfTags);
  // return;
}

const inputEl = document.querySelector('input');

const btnCreateEl = document.querySelector('[data-create]');
btnCreateEl.addEventListener('click', onbtnCreateClick);
function onbtnCreateClick(event) {
  const inputElValue = inputEl.value;

  createBoxes(inputElValue);

  // return;
}

const btnDestroyEl = document.querySelector('[data-destroy]');
btnDestroyEl.addEventListener('click', event => {
  boxesEl.innerHTML = '';
  inputEl.value = '';
  // return;
});
