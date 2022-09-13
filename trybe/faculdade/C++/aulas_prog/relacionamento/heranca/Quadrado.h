/*
 * Quadrado.h
 *
 *  Created on: 29 de out de 2019
 *      Author: ufsc
 */

#ifndef QUADRADO_H_
#define QUADRADO_H_

#include "Retangulo.h"

class Quadrado: public Retangulo {
public:
	using Retangulo::Retangulo;
	Quadrado(double lado);
	virtual ~Quadrado();
	void print();
};

#endif /* QUADRADO_H_ */
