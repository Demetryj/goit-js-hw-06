/* Напиши скрипт, який змінює кольори фону елемента <body> 
через інлайн-стиль по кліку на button.change-color і 
виводить значення кольору в span.color. */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// let randomHexColor = getRandomHexColor();
// console.log(randomHexColor);

const buttonEl = document.querySelector('.change-color');
// console.log(buttonEl);
const bodyEl = document.querySelector('body');
const widgetColor = document.querySelector('.color');

buttonEl.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  let randomHexColor = getRandomHexColor();
  // console.log(randomHexColor);

  bodyEl.style.backgroundColor = randomHexColor;

  widgetColor.textContent = randomHexColor;

  return;
}
