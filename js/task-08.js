/*     Обробка відправлення форми form.login-form повинна відбуватися 
відповідно до події submit.

    Під час відправлення форми сторінка не повинна перезавантажуватися.

    Якщо у формі є незаповнені поля, виводь alert з попередженням про те, 
що всі поля повинні бути заповнені.

    Якщо користувач заповнив усі поля і відправив форму, 
збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
а значення поля - значенням властивості. 

    Для доступу до елементів форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і 
очисти значення полів форми методом reset.
*/

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const formInputEmail = email.value;

  const formInputPassword = password.value;

  if (formInputEmail === '' || formInputPassword === '') {
    alert(`Усі поля мають бути заповнені!!!!! 
Заповніть, будь ласка, пусте поле.`);
  } else {
    const nameInputEmail = email.name;

    const nameInputPassword = password.name;

    const objectValues = {
      [nameInputEmail]: formInputEmail,
      [nameInputPassword]: formInputPassword,
    };
    console.log(objectValues);
    event.currentTarget.reset();
  }

  return;
}

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formInputEmail = event.currentTarget.email.value;
//   //   console.log(formInputEmail);
//   const formInputPassword = event.currentTarget.password.value;
//   //   console.log(formInputPassword);

//   if (formInputEmail === '' || formInputPassword === '') {
//     return alert(`Усі поля мають бути заповнені!!!!!
// Заповніть, будь ласка, пусте поле.`);
//   } else {
//     const nameInputEmail = email.name;

//     const nameInputPassword = password.name;

//     const objectValues = {
//       [nameInputEmail]: formInputEmail,
//       [nameInputPassword]: formInputPassword,
//     };
//     console.log(objectValues);
//     event.currentTarget.reset();
//   }

//   return;
// }
