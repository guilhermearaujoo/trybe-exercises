#ifndef TRIANGULO_H
#define TRIANGULO_H

#include "ponto.h"
class Triangulo{
    Ponto m_a, m_b, m_c;
    double distancia(Ponto a, Ponto b);
    public:
    Triangulo(Ponto a, Ponto b, Ponto c);
    double perimetro();
};

#endif