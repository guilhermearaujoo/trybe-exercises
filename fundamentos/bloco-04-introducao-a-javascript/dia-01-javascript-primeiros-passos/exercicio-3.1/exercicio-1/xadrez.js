let piece = "King";

switch (piece.toLowerCase()) {
    case "bishop":
        console.log(piece, "-> diagonals");
        break
    case "knigth":
        console.log(piece, "-> 2 squares horizontally and 1 square vertically or opposite");
        break;
    case "king":
        console.log(piece, "-> One square to any direction");
        break;
    case "queen":
        console.log(piece, "-> Any direction");
        break;
    case "rook":
        console.log("Multiple squares to one direction");
        break;
    case "pawn":
        console.log("vertically forward one square");
        break;
    default:
        console.log("ERROR: Invalid Sintaxe");
}

// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)