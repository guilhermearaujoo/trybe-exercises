// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

let pai = document.getElementById('pai');

let paiList = pai.childNodes;

for (let index = paiList.length - 1; index >= 0 ; index -= 1) {  
  let children = paiList[index];
  if(children.id !== 'elementoOndeVoceEsta') {
    children.remove();
  }
}

let segundoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoFilhoDoFilho.remove();