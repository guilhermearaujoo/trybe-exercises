/*
 * Circulo.cpp
 *
 *  Created on: 29 de out de 2019
 *      Author: ufsc
 */

#include "Circulo.h"

Circulo::Circulo(double r):raio{r} {
}

double Circulo::perimetro() const {
	return 2*Circulo::PI*raio;
}

double Circulo::area() const {
	return Circulo::PI*raio*raio;
}

Circulo::~Circulo() {

}

