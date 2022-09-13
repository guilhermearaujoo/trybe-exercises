/*
 * Circulo.h
 *
 *  Created on: 29 de out de 2019
 *      Author: ufsc
 */

#ifndef CIRCULO_H_
#define CIRCULO_H_

#include "Forma2D.h"

class Circulo: public Forma2D {
	double raio;
public:
	Circulo(double r);
	double perimetro()const;
	double area()const;
	virtual ~Circulo();
};

#endif /* CIRCULO_H_ */
