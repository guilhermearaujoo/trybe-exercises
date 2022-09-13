#include "vetorm.h"

VetorM::VetorM() : VetorM{20}{ }

VetorM::VetorM(unsigned outra_capacidade):outra_cap{outra_capacidade}{    
    dados = new int[outra_cap];
}

VetorM::VetorM(const VetorM &v){
    dados = new int[v.capacidade()];
    outra_cap = v.outra_cap;
    for(unsigned k=0;k<capacidade();++k){
        dados[k] = v.dados[k];
    }
}

VetorM::~VetorM()
{
    delete[] dados;
}
int VetorM::ler(unsigned posicao) const
{
    if (posicao >= capacidade())
        posicao = 0;
    return dados[posicao];
}
void VetorM::escrever(unsigned posicao, int dado)
{
    if (posicao >= capacidade())
        posicao = 0;
    dados[posicao] = dado;
}

unsigned VetorM::capacidade() const{
    return outra_cap;
}

std::ostream& operator<<(std::ostream& out,VetorM& vet){
    out << "[ ";
    for(unsigned r=0;r<vet.capacidade();++r){
        out << vet[r] << ((r==(vet.capacidade()-1))?' ':',');
    }
    out << " ] "<<'\n';
    return out;
}

int VetorM::operator[](const unsigned pos) const{
    return ler(pos);
}

int& VetorM::operator[](const unsigned pos){
    unsigned p = pos;
    if (pos >= capacidade())
        p = 0;
    return dados[p];
}

VetorM VetorM::operator+(const VetorM &dir)const{
    VetorM retorno{capacidade()+dir.capacidade()};
    for(unsigned i=0;i<capacidade();++i){
        retorno[i]=dados[i];
    }
    for(unsigned i=capacidade();i<retorno.capacidade();++i){
        retorno[i]=dir.dados[i];
    }
    return retorno;
}