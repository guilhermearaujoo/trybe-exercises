let number = -10;

switch (number) {
    case 0: 
        console.log("zero");
        break
    case number:
        if(number >= 1){
            console.log("positive");
            break;    
        } 
    default:
        console.log("negative");
}

// Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.