/*
 * Forma.h
 *
 *  Created on: 29 de out de 2019
 *      Author: ufsc
 */

#ifndef FORMA_H_
#define FORMA_H_

#include <iostream>

class Forma {
	std::string _nome;
public:
	static const double PI;
	Forma();
	virtual ~Forma();

	std::string getNome() const {
		return _nome;
	}

	void setNome(std::string nome) {
		_nome = nome;
	}
};



#endif /* FORMA_H_ */
