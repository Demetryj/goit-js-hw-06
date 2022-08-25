const categories = document.querySelectorAll('#categories li.item');
const quantityCategories = categories.length;
console.log(`Number of categories: ${quantityCategories}`);
console.log('');

categories.forEach(category => {
  const titleOfCategoty = category.firstElementChild.textContent;
  const numbersOfElements = category.lastElementChild.children.length;
  console.log(`Category: ${titleOfCategoty}`);
  console.log(`Elements: ${numbersOfElements}`);
  console.log('');
});

// // const getResult = function (categories) {
// categories.forEach(category => {
//   const titleOfCategoty = category.firstElementChild.textContent;
//   const numbersOfElements = category.lastElementChild.children.length;
//   console.log(`Category: ${titleOfCategoty}`);
//   console.log(`Elements: ${numbersOfElements}`);
//   console.log('');
//   // return;
// });
// //   return;
// // };

// // getResult(categories);
