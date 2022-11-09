import validator from 'validator';
import './style.css';

const button = document.querySelector('.btn-submit');
const input = document.querySelector('#input-text');
const h2 = document.querySelector('h3');

// validates for each option
button.addEventListener('click', (event) => {
  event.preventDefault();
  h2.style.backgroundColor = 'transparent';
  h2.style.padding = '0';

  const option = document.getElementById('selected');

  let message = 'not a hexcolor';
  switch (option.value) {
  case 'isAlpha':
    if (validator.isAlpha(input.value)) message = 'Is a letter';
    else message = 'Not a letter';
    break;
  case 'isAlphaNumeric':
    if (validator.isAlphanumeric(input.value)) message = 'Is a letter ou number';
    else message = 'Not a letter or number';
    break;
  case 'isEmpty':
    if (validator.isEmpty(input.value)) message = 'Is empty';
    else message = 'Not empty';
    break;
  case 'isHexColor':
    if (validator.isHexColor(input.value)) {
      message = 'Is A HEXCOLOR';
      h2.style.backgroundColor = input.value;
      h2.style.padding = '20px';
    }
    break;
  case 'isEmail':
    if (validator.isEmail(input.value)) message = `${input.value} is a email`;
    else message = `${input.value} is not a email`;
    break;
  default:
    message = 'nothing to avaluate!';
  }
  h2.innerHTML = message;
});
