/*
 * Retangulo.h
 *
 *  Created on: 29 de out de 2019
 *      Author: ufsc
 */

#ifndef RETANGULO_H_
#define RETANGULO_H_

#include "Forma2D.h"

class Retangulo: public Forma2D {
protected:
	double base, altura;
public:
	Retangulo(double b, double a);
	double perimetro()const;
	double area()const;
	virtual ~Retangulo();
};

#endif /* RETANGULO_H_ */
