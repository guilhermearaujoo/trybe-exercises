import './style.css'

const btnDog = document.querySelector('.dog');
const btnCat = document.querySelector('.cat');
const btnSurprise = document.querySelector('.surprise');
const img = document.querySelector('.img');

function setImg(link) {
  img.src = link;
  img.classList.remove('disabled');
}

function getDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => data.message)
    .then((link) => setImg(link));
}

function getCat() {
  fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((data) => data.file)
    .then((link) => setImg(link));
}

function getSurprise() {
  Promise.any ([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://aws.random.cat/meow')])
    .then((response) => response.json())
    .then(({ message, file}) => {
      if(message) setImg(message)
      else setImg(file);
    });
}

btnDog.addEventListener('click', getDog);
btnCat.addEventListener('click', getCat);
btnSurprise.addEventListener('click', getSurprise);