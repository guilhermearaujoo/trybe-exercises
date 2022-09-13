#ifndef TIME_H
#define TIME_H

#include <iostream>

class Time
{
private:
    int hora;
    int minuto;
    int segundo;

public:
    //construtor padrão
    explicit Time();
    //construtor de conversão
    explicit Time(unsigned int,unsigned int,unsigned int);
    //funcao auxiliar 
    void show(unsigned int,unsigned int,unsigned int) const;
    //mostra em horario universal (HH:MM:SS)
    void universal() const;
    //mostra em horario AM/PM - HH:MM:SS AM ou PM
    void am_pm() const;
    //incrementa o tempo em 1 segundo
    void tick();
};


class Date{
private:
    int dia;
    int mes;
    int ano;

public:
    //construtor padrão
    explicit Date();
    //construtor de conversão
    explicit Date(unsigned int,unsigned int,unsigned int);
    //mostra em data universal (HH:MM:SS)
    void universal() const;
    //incrementa o dia em 1 
    void nextDay();
};

#endif