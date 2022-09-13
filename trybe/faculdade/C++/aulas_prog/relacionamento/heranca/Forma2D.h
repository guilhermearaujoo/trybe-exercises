/*
 * Forma2D.h
 *
 *  Created on: 29 de out de 2019
 *      Author: ufsc
 */

#ifndef FORMA2D_H_
#define FORMA2D_H_

#include "Forma.h"

class Forma2D: public Forma {
public:
	Forma2D();
	double perimetro()const;
	double area()const;
	virtual ~Forma2D();
};

#endif /* FORMA2D_H_ */
