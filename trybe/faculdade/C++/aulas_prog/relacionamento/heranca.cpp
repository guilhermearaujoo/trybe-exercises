#include <iostream>

using namespace std;

//classe mãe
class Pessoa {
    std::string nome, sobrenome;
};

//clase filha
class Aluno : Pessoa {
    int nota;
};

class Professor : public Pessoa {
    int nota;
};

int main(){

}