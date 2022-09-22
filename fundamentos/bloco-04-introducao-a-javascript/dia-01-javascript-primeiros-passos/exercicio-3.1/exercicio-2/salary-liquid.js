// Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)

// Salário bruto até R$ 1.556,94: alíquota de 8%

// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)

// Até R$ 1.903,98: isento de imposto de renda

// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55.

let salarioBruto = 3000;
let salarioDescontadoInss;
let salarioLiquido;

let inssAte1556 =  1 - 0.08;
let inssAte2594 = 1 - 0.09;
let inssAte5189 = 1 - 0.11;
let inssMaior5189 = 570.88;

let irAte1903 = 0;

let irAte2826 = 0.075;
let debitarIrAte2826 = 142.8;

let irAte3751 = 0.15;
let debitarIrAte3751 = 354.80;

let irAte4664 = 0.225;
let debitarIrAte4664 = 636.13;

let irMaior4664 = 0.275;
let debitarIrMaior4664 = 869.36;

if(salarioBruto <= 0) {

    console.log("ERROR: Salary must be a value bigger than 0");

} else {
    if (salarioBruto > 0 && salarioBruto <= 1556.94) {

        salarioDescontadoInss = salarioBruto * inssAte1556;

    } else if (salarioBruto > 1556.94 && salarioBruto <= 2826.65) {

        salarioDescontadoInss = salarioBruto * inssAte2594;

    } else if (salarioBruto > 2826.65 && salarioBruto <= 5189.82) {

        salarioDescontadoInss = salarioBruto * inssAte5189;
        
    } else {

        salarioDescontadoInss = salarioBruto - inssMaior5189;
    }

    /* Outro bloco */

    if (salarioDescontadoInss > 0 && salarioDescontadoInss <= 1903.98) {

        salarioLiquido = salarioDescontadoInss * irAte1903; 

    } else if (salarioDescontadoInss > 1903.98 && salarioDescontadoInss <= 2826.65) {

        salarioLiquido = salarioDescontadoInss - (salarioDescontadoInss * irAte2826 - debitarIrAte2826); 

    } else if (salarioDescontadoInss > 2826.65 && salarioDescontadoInss <= 3751.05) {

        salarioLiquido = salarioDescontadoInss - (salarioDescontadoInss * irAte3751 - debitarIrAte3751); 

    } else if (salarioDescontadoInss > 3751.05 && salarioDescontadoInss <= 4664.68) {

        salarioLiquido = salarioDescontadoInss - (salarioDescontadoInss * irAte4664 - debitarIrAte4664); 

    } else {

        salarioLiquido = salarioDescontadoInss - (salarioDescontadoInss * irMaior4664 - debitarIrMaior4664); 

    }

    console.log("Salario Bruto de:", salarioBruto);
    console.log("Salario descontado alíquota do INSS:", salarioDescontadoInss);
    console.log("Salario Liquido de: ", salarioLiquido);
}

