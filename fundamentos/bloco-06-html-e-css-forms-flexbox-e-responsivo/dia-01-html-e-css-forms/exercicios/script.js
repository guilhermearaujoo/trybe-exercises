let send = document.getElementById('send');
  send.addEventListener('click', function(event) {
    event.preventDefault();

    let check = document.getElementById('fotos');
    let fullName = document.getElementById('fullName');
    let email = document.getElementById('e-mail');
    let textArea = document.getElementById('texto');

    if ((check.checked === true) && (fullName.value.length < 41 &&  fullName.value.length > 9) && (email.value.length < 51 && email.value.length > 9) && (textArea.value.length < 501)) {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    } else {
      alert('Dados Inválidos');
    }
  }
)
