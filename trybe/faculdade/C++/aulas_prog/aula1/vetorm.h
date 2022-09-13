#ifndef VETORM_H
#define VETORM_H

#include <iostream>

class VetorM 
{
    int *dados;
    unsigned outra_cap;
    public:
    explicit VetorM(); //construtor padrão
    explicit VetorM(unsigned outra_capacidade);//construtor de conversão
    VetorM(const VetorM &v);//construtor de cópia
    ~VetorM();
    int ler(unsigned posicao) const ;
    void escrever(unsigned posicao, int dado);
    unsigned capacidade() const;
    friend std::ostream& operator<<(std::ostream& out,VetorM& vet);
    int operator[](const unsigned pos) const;
    int& operator[](const unsigned pos);
    VetorM operator+(const VetorM &dir)const;
};

/* std::ostream& operator<<(std::ostream& out,VetorM& vet); */

#endif