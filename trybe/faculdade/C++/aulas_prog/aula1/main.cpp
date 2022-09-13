#include <iostream>
#include "vetorm.h"
#include "busca.h"

int main(int, char**) {
    
    VetorM b{30},c{35};

    for(unsigned i = 0; i < b.capacidade(); i++){
        b[i] = i+10;
        c[i] = i+2;
    }
    auto d = (b+c);
    std::cout << b << '\n';//operator<<(std::cout, b);
    std::cout << c << '\n';//operator<<(std::cout, b);
    std::cout << d << '\n';//operator<<(std::cout, b);

    if(const auto [achou, pos] = Busca::linear(b, 25);achou){
        std::cout << "Elemento encontrado na posicao " << pos << "\n";
    } else {
        std::cout << "Elemento não encontrado!" << "\n";
    }
     
}
