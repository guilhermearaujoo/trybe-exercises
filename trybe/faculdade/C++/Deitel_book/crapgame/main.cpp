#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

unsigned int rollDice();

int main(){

    cout << "Jogo do \"Crap\"" << endl;
    enum Status {CONTINUE, WON, LOSE};

    srand(static_cast<unsigned int>(time(0)));

    unsigned int myPoint = 0; //pontuação na primeira jogada
    Status game = CONTINUE; //pode ter WON, LOST ou CONTINUE
    unsigned int sumOfDice = rollDice(); //primeira jogada de dados

    switch(sumOfDice)
    {
        case 7: //ganha com 7 na primeira jogada
        case 11: // ganha com 11 na primera jogada
            game = WON;
            break;
        case 2: //perde com 2 na primeira jogada
        case 3: //perde com 3 na primeira jogada
        case 12: //perde com 12 na primeira jogada
            game = LOSE;
            break;
        default: //não ganha nem perde então relembra a pontuação
            game = CONTINUE;
            myPoint = sumOfDice;
            cout << "Pontuação é " << myPoint << endl;
            break;
    }

    while(CONTINUE == game){
        sumOfDice = rollDice();

        if(sumOfDice == myPoint){
            game = WON; // ganha chegando no ponto
        } else if(sumOfDice == 7){
            game = LOSE; // perde porque somou 7
        }
    }

    if (WON==game){
        cout << "Jogador Ganhou" << endl;
    } else if(LOSE==game){
        cout << "Jogador Perdeu" << endl;
    }

}

unsigned int rollDice(){
    unsigned int die1 = 1 + rand()%6;
    unsigned int die2 = 1 + rand()%6;

    unsigned int sum = die1 + die2;

    cout << "Jogador rolou " << die1 << " + " << die2 << " = " << sum << endl;

    return sum;
}