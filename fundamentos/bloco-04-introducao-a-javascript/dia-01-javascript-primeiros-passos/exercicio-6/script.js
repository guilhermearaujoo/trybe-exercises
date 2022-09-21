
// mes = 'Trybe';
// let estacaoDoAno = '?';

// switch (mes) {
//     case 'janeiro':
//     case 'fevereiro':
//     case 'março':
//         estacaoDoAno = 'Verão';
//         break;
//     case 'abril':
//     case 'maio':
//     case 'junho':
//         estacaoDoAno = 'Outono';
//         break;
//     case 'julho':
//     case 'agosto':
//     case 'setembro':
//         estacaoDoAno = 'Inverno';
//         break;
//     case 'outubro':
//     case 'novembro':
//     case 'dezembro':
//         estacaoDoAno = 'Primavera';
// }

// console.log(estacaoDoAno); // 'Outono'
let result = "list";

switch(result) {
    case "approved":
        console.log("Congrats! You've been approved");
        break;
    case "list": 
        console.log("You're on waiting list.");
        break;
    case "repproved": 
        console.log("You're repproved.");
        break
    default:
        console.log("Wrong input.");
}