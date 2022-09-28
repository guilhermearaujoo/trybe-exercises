let twoYears = document.getElementsByTagName('p')[1];

twoYears.innerHTML = 'Two years from now I see myself working in a multinacional enterprise, winning more than 4 thousand dollars month and having more than 1 project assigned in my name.'

document.querySelector('.main-content').style.backgroundColor = 'rgb(76,164,109)';

document.querySelector('.main-content .center-content').style.backgroundColor = 'white';

document.getElementsByTagName('h1')[0].innerHTML = 'Exercício - JavaScript';


function paragraphUpperCase() {
  let paragraph = document.getElementsByTagName('p')[0];

  paragraph.innerHTML = paragraph.innerHTML.toUpperCase()
}

paragraphUpperCase();

function allClasses() {
  let allP = document.getElementsByTagName('p');
  for (let index = 0; index < allP.length; index++) {
    console.log(allP[index].innerHTML);
  }
}

allClasses(); 