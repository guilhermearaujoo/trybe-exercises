all:	feetinches
 
feetinches: over3.o feetinches3.o
	g++ -o feetinches over3.o feetinches3.o
 
over3.o: over3.cpp feetinches3.h
	g++ -o over3.o over3.cpp -c -W -Wall -ansi -pedantic -std=c++17

feetinches3.o: feetinches3.cpp feetinches3.h
	g++ -o feetinches3.o feetinches3.cpp -c -W -Wall -ansi -pedantic -std=c++17

clean:
	rm -rf *.o *~ hello