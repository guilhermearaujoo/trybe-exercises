#ifndef BUSCA_H
#define BUSCA_H

#include "vetorm.h"
struct Retorno
{
    bool encontrou;
    unsigned posicao;
};

class Busca
{
    public:
    static Retorno linear(VetorM vetor, int valor);
};

#endif