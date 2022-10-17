window.onload = () => {
  document.addEventListener('click', ()=> {
    if(event.target.id === 'click-me') {
      let clickCount = document.getElementById('clickCount');
      clickCount.innerText = parseInt(clickCount.innerText) + 1;
    }
  })
}