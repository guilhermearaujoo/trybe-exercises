/*
 * Retangulo.cpp
 *
 *  Created on: 29 de out de 2019
 *      Author: ufsc
 */

#include "Retangulo.h"

Retangulo::Retangulo(double b, double a):base{b}, altura{a} {
	// TODO Auto-generated constructor stub

}

double Retangulo::perimetro() const {
	return base*2+altura*2;
}

double Retangulo::area() const {
	return base*altura;
}

Retangulo::~Retangulo() {
	// TODO Auto-generated destructor stub
}

