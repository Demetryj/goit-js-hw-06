const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listOfGallery = document.querySelector('.gallery');
console.log(listOfGallery);
listOfGallery.style.listStyle = 'none';
listOfGallery.style.display = 'flex';
listOfGallery.style.flexWrap = 'wrap';
listOfGallery.style.justifyContent = 'space-around';

console.log(listOfGallery.style);

const arrayImg = images
  .map(({ url, alt }) => {
    return `<li><img src='${url}' alt='${alt}' width="250" height="150" /></li>`;
  })
  .join('');

listOfGallery.insertAdjacentHTML('afterbegin', arrayImg);

// const arrayImg = images.map(({ url, alt }) => {
//   const itemEl = document.createElement('li');
//

//   const imgEl = document.createElement('img');
//   imgEl.src = url; //imgEl.setAttribute('src', url);
//   imgEl.alt = alt; //imgEl.setAttribute('alt', alt);
//   imgEl.width = 250;
//   imgEl.height = 150;

//   itemEl.append(imgEl);

//   return itemEl;
// });

// listOfGallery.append(...arrayImg);
