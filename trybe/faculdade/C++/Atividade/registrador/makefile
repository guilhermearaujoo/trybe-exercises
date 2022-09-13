all:	registra
 
registra: main.o 
	g++ -o registra main.o 
 
main.o: main.cpp
	g++ -o main.o main.cpp -c -W -Wall -ansi -pedantic -std=c++17

clean:
	rm -rf *.o *~ registra