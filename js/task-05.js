/* 
Напиши скрипт, який під час набору тексту 
в інпуті input#name-input (подія input), 
підставляє його поточне значення в span#name-output. 
Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
*/

const inputEl = document.querySelector('#name-input');
console.log(inputEl);

inputEl.addEventListener('input', event => {
  const nameOutputEl = document.querySelector('#name-output');

  if (event.currentTarget.value === '') {
    nameOutputEl.textContent = 'Anonymous';
  } else {
    nameOutputEl.textContent = event.currentTarget.value;
  }
  return;
});
