
window.onload = function () {

  function changeBackground (color) {
    let background = document.getElementsByTagName('main')[0];
    background.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
  }


  function changefontColor (color) {

    let paragraphs = document.getElementsByClassName('paragraph');
    for (let index of paragraphs) {
      index.style.color = color;
    }
    localStorage.setItem('fontColor', color);
  }
  
  function changefontSize(size) {

    let paragraphs = document.getElementsByClassName('paragraph');
    for (let index of paragraphs) {
      index.style.fontSize = size;
    }
    localStorage.setItem('fontSize', size);
  }

  function changeLineHeigth(heigth) {

    let paragraphs = document.getElementsByClassName('paragraph');
    for (let index of paragraphs) {
      index.style.lineHeight = heigth;
    }
    localStorage.setItem('lineHeigth', heigth);
  }

  function changefontFamily(family) {

    let paragraphs = document.getElementsByClassName('paragraph');
    for (let index of paragraphs) {
      index.style.fontFamily = family;
    }
    localStorage.setItem('fontFamily', family)
  }

  // Cor de fundo da tela;

  let backgroundColorButtons = document.querySelectorAll("#background-color>button")
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", function(event) {
      changeBackground(event.target.innerHTML)
    })
  }

  // Cor do texto;
  let fontColorButtons = document.querySelectorAll("#font-color>button")
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", function(event) {
      changefontColor(event.target.innerHTML)
    })
  }

  // Tamanho da fonte
  let fontSizeButtons = document.querySelectorAll("#font-size>button")
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", function(event) {
      changefontSize(event.target.innerHTML)
    })
  }

  // Espaçamento entre as linhas do texto;
  let lineHeightButtons = document.querySelectorAll("#line-height>button")
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", function(event) {
      changeLineHeigth(event.target.innerHTML)
    })
  }

  // Tipo da fonte (_Font family_).
  let fontFamilyButtons = document.querySelectorAll("#font-family>button")
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", function(event) {
      changefontFamily(event.target.innerHTML)
    })
  }

  function initialize() {
    let backgroundColor = localStorage.getItem("backgroundColor")
    if (backgroundColor) changeBackground(backgroundColor)

    let fontColor = localStorage.getItem("fontColor")
    if (fontColor) changefontColor(fontColor)

    let fontSize = localStorage.getItem("fontSize")
    if (fontSize) changefontSize(fontSize)

    let lineHeight = localStorage.getItem("lineHeight")
    if (lineHeight) changeLineHeigth(lineHeight)

    let fontFamily = localStorage.getItem("fontFamily")
    if (fontFamily) changefontFamily(fontFamily)
  }

  initialize()

}



// As pessoas devem ter o poder de alterar:

// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte (Font family).
// Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.