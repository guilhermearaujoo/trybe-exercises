/*
 * Quadrado.cpp
 *
 *  Created on: 29 de out de 2019
 *      Author: ufsc
 */

#include "Quadrado.h"

#include <iostream>

Quadrado::Quadrado(double lado):Retangulo(lado,lado) {
	// TODO Auto-generated constructor stub

}

Quadrado::~Quadrado() {
	// TODO Auto-generated destructor stub
}

void Quadrado::print() {
	std::cout << "Lado: " << base;
}
