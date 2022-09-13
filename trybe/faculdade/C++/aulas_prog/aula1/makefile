all:	class
 
class: main.o vetorm.o busca.o
	g++ -o class main.o vetorm.o busca.o
 
main.o: main.cpp busca.h vetorm.h
	g++ -o main.o main.cpp -c -W -Wall -ansi -pedantic -std=c++17

vetorm.o: vetorm.cpp vetorm.h
	g++ -o vetorm.o vetorm.cpp -c -W -Wall -ansi -pedantic -std=c++17

busca.o: busca.cpp busca.h
	g++ -o busca.o busca.cpp -c -W -Wall -ansi -pedantic -std=c++17

clean:
	rm -rf *.o *~ hello


