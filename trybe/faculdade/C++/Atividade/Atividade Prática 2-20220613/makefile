all:	feetinches
 
feetinches: over2.o feetinches2.o
	g++ -o feetinches over2.o feetinches2.o
 
over2.o: over2.cpp feetinches2.h
	g++ -o over2.o over2.cpp -c -W -Wall -ansi -pedantic -std=c++17

feetinches2.o: feetinches2.cpp feetinches2.h
	g++ -o feetinches2.o feetinches2.cpp -c -W -Wall -ansi -pedantic -std=c++17

clean:
	rm -rf *.o *~ hello