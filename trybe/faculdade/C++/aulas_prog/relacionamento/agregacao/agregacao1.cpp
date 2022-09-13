#include <iostream>
using namespace std;

class Roda {
	int tamanho;
public:
	enum class Posicao {
		E_DIANTEIRO, E_TRASEIRO, D_DIANTEIRO, D_TRASEIRO
	};
	Roda(int t) :
			tamanho { t } {
		cout << "Roda[" << tamanho << "]\n";
	}
	~Roda() {
		cout << "Destruiu Roda[" << tamanho << "]\n";
	}
};

class Porta {
	string cor;
public:
	enum class Tipo {
		E_DIANTEIRO, E_TRASEIRO, D_DIANTEIRO, D_TRASEIRO, MALA
	};
	Porta(string t) :
			cor { t } {
		cout << "Porta[" << cor << "]\n";
	}
	~Porta() {
		cout << "Destruiu Porta[" << cor << "]\n";
	}

	string qcor() const {
		return cor;
	}
};

class Carro {
	Roda *esq_dia, *dir_dia, *esq_tra, *dir_tra;
	Porta *p_motorista, *p_passageiro, *p_esq_tra, *p_dir_tra, *porta_mala;
public:
	Carro() {
		esq_dia = dir_dia = esq_tra = dir_tra = nullptr;
		p_motorista = p_passageiro = p_esq_tra = p_dir_tra = porta_mala =
				nullptr;
	}
	~Carro() {
		cout << "Destruiu Carro\n";
	}
	void trocaPorta(Porta* nova, Porta::Tipo tipo) {
		if (nova != nullptr)
			cout << "Porta de cor: " << nova->qcor() << endl;
		switch (tipo) {
		case Porta::Tipo::D_DIANTEIRO:
			p_passageiro = nova;
			break;
		case Porta::Tipo::E_DIANTEIRO:
			p_motorista = nova;
			break;
		case Porta::Tipo::D_TRASEIRO:
			p_dir_tra = nova;
			break;
		case Porta::Tipo::E_TRASEIRO:
			p_esq_tra = nova;
			break;
		case Porta::Tipo::MALA:
			porta_mala = nova;
			break;
		}
	}
	void trocaRoda(Roda* nova, Roda::Posicao pos) {
		switch (pos) {
		case Roda::Posicao::D_DIANTEIRO:
			dir_dia = nova;
			break;
		case Roda::Posicao::E_DIANTEIRO:
			esq_dia = nova;
			break;
		case Roda::Posicao::D_TRASEIRO:
			dir_tra = nova;
			break;
		case Roda::Posicao::E_TRASEIRO:
			esq_tra = nova;
			break;
		}
	}

	void listaEstrutura() const {
		cout << "O carro: \nRodas: ";
		cout << esq_dia << dir_dia << esq_tra << dir_tra;
		cout << "\nPortas: ";
		cout << p_motorista << p_passageiro << p_esq_tra << p_dir_tra
				<< porta_mala << endl;

	}

};

int main() {

	Porta p1 { "Branco" };
	{
		Carro up;
		up.listaEstrutura();
		up.trocaPorta(&p1, Porta::Tipo::MALA);
		up.listaEstrutura();
	}

	return 0;
}













