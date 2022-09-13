all:	agrega
 
agrega: agregacao1.o 
	g++ -o agrega agregacao1.o
 
agregacao1.o: agregacao1.cpp
	g++ -o agregacao1.o agregacao1.cpp -c -W -Wall -ansi -pedantic -std=c++17

clean:
	rm -rf *.o *~ tick