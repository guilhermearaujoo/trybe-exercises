all:	tick
 
tick: main.o time.o 
	g++ -o tick main.o time.o 
 
main.o: main.cpp time.h
	g++ -o main.o main.cpp -c -W -Wall -ansi -pedantic -std=c++17

time.o: time.cpp time.h
	g++ -o time.o time.cpp -c -W -Wall -ansi -pedantic -std=c++17

clean:
	rm -rf *.o *~ tick