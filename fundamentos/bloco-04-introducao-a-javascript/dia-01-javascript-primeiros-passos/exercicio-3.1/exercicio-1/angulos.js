let angulo1 = 10;
let angulo2 = 20;
let angulo3 = 150;

if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
    console.log("ERROR: Negative values are not allowed");
} else {
    if ( (angulo1 + angulo2 + angulo3) === 180 ) {
        console.log(!0);
    } else {
        console.log(!angulo1);
    }
}

// Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.