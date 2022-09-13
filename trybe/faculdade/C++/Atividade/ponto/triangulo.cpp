#include "triangulo.h"
#include <cmath>


double Triangulo::distancia(Ponto a, Ponto b){
    return(std::sqrt(std::pow(a.x-b.x, 2)+std::pow(a.y-b.y, 2)));
};
 
Triangulo::Triangulo(Ponto a, Ponto b, Ponto c) : m_a{a}, m_b{b}, m_c{c}
{};

double Triangulo::perimetro()
{
    return(distancia(m_a, m_b) + distancia(m_a, m_c) + distancia(m_b, m_c));
};