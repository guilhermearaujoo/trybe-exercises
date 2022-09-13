#include "busca.h"

Retorno Busca::linear(VetorM vetor, int valor)
{
    for (unsigned i = 0; i< vetor.capacidade(); i++)
    {
        if (vetor[i] == valor)
        {
            return {true, i};
        }
    }
    return {false, 0};
}