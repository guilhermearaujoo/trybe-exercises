let send = document.getElementById('send');
  send.addEventListener('click', function(event) {
    let check = document.getElementById('fotos');
    let fullName = document.getElementById('fullName');
    let email = document.getElementById('e-mail');
    let textArea = document.getElementById('texto');

    if ((check.checked === true) && (fullName.value.length < 41 &&  fullName.value.length > 9) && (email.value.length < 51 && email.value.length > 9) && (textArea.value.length < 501)) {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    } else {
      alert('Dados Inválidos');
    }
  });

// document.getElementById('date-trip').DatePickerX.init();

// const validation = new JustValidate('#form');

// validation
//   .addField('#fullName', [
//     {
//       rule: 'minLength',
//       value: 9,
//       errorMessage: 'Name is invalid!',
//     },
//     {
//       rule: 'maxLength',
//       value: 40,
//       errorMessage: 'Name is invalid!',
//     },
//   ])
//   .addField('#e-mail', [
//     {
//       rule: 'minLength',
//       value: 9,
//     },
//     {
//       rule: 'maxLength',
//       value: 50,
//     }, 
//     {
//       rule: 'e-mail',
//       errorMessage: 'Email is invalid!',
//     },
//   ])
//   .addField('#texto', [
//     {
//       rule: 'maxLength',
//       value: 500,
//     },
//     {
//       rule: 'texto',
//       errorMessage: 'Texto is invalid!',
//     },
//   ])