let percent = 60;
let answer = "A";

if (percent > 100 || percent < 0){  
    console.log("ERRO: Value out of range");
} else {
    if (percent < 90) {
        answer = "B";
        if (percent < 80) {
            answer = "C";
            if (percent < 70) {
                answer = "D";
                if (percent < 60) {
                    answer = "E";
                    if (percent < 50) {
                        answer = "F";
                    }
                }
            }
        } 
    }
    console.log(answer);  
}

// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.