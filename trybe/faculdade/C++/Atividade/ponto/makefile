all:	ponto
 
ponto: main.o triangulo.o ponto.o
	g++ -o ponto main.o triangulo.o ponto.o
 
main.o: main.cpp triangulo.h ponto.h
	g++ -o main.o main.cpp -c -W -Wall -ansi -pedantic -std=c++17

triangulo.o: triangulo.cpp triangulo.h
	g++ -o triangulo.o triangulo.cpp -c -W -Wall -ansi -pedantic -std=c++17

ponto.o: ponto.cpp ponto.h
	g++ -o ponto.o ponto.cpp -c -W -Wall -ansi -pedantic -std=c++17

clean:
	rm -rf *.o *~ ponto