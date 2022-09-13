#include <iostream>
#include "triangulo.h"

int main(){
    Triangulo t1{{0,0},{0,5},{5,0}};
    // se usar explicito no construtor so consigo criar assim:
    //Triangulo t1{Ponto{0,0},Ponto{0,5},Ponto{5,0}};

    std::cout << "Perimetro: " << t1.perimetro() << "\n";
}