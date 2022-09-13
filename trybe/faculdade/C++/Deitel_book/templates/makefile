all:	templates

templates: main.o
	g++ -o templates main.o

main.o: main.cpp templates.h
	g++ -o main.o main.cpp -c -W -Wall -ansi -pedantic -std=c++17

clean:
	rm -rf *.o *~ templates