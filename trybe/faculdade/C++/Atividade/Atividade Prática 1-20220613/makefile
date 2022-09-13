all:	feetinches
 
feetinches: over1.o feetinches1.o
	g++ -o feetinches over1.o feetinches1.o
 
over1.o: over1.cpp feetinches1.h
	g++ -o over1.o over1.cpp -c -W -Wall -ansi -pedantic -std=c++17

feetinches1.o: feetinches1.cpp feetinches1.h
	g++ -o feetinches1.o feetinches1.cpp -c -W -Wall -ansi -pedantic -std=c++17

clean:
	rm -rf *.o *~ hello