#include "time.h"

Time::Time() : hora{0}, minuto(0), segundo{0}{};

Time::Time(unsigned int hora_i,unsigned int minuto_i,unsigned int segundo_i){
    if((hora_i<24 && hora_i >=0) && (minuto_i<60 && minuto_i >=0) && (segundo_i<60 && segundo_i >=0))
    {
        hora = hora_i;
        minuto = minuto_i;
        segundo = segundo_i;
    } else {
        hora = 0;
        minuto = 0;
        segundo = 0;
    }
}

void Time::show(unsigned int hora_i,unsigned int minuto_i,unsigned int segundo_i) const{
    std::string hora_s = "";
    std::string minuto_s = "";
    std::string segundo_s = "";
     if(hora_i<10){
        hora_s = "0";
        hora_s += std::to_string(hora_i);
    } else{
        hora_s = std::to_string(hora_i);
    }

    if(minuto_i<10){
        minuto_s = "0";
        minuto_s += std::to_string(minuto_i);
    } else{
        minuto_s = std::to_string(minuto_i);
    }

    if(segundo_i<10){
        segundo_s = "0";
        segundo_s += std::to_string(segundo_i);
    } else{
        segundo_s = std::to_string(segundo_i);
    }
    std::cout << hora_s << "|" << minuto_s << "|" << segundo_s;
}

void Time::universal() const{
   show(hora, minuto, segundo);
   std::cout << std::endl;
}

void Time::am_pm() const{
    if(hora < 12){
        show(hora, minuto, segundo);
        std::cout << " AM" << std::endl;
    } else{
        show(hora-12, minuto, segundo);
        std::cout << " PM" << std::endl;
    }
}

void Time::tick(){
    segundo++;
    if(segundo == 60){
        segundo = 0;
        minuto++;
        if(minuto == 60){
            minuto = 0;
            hora++;
            if(hora == 24){
                hora = 0;
            }
        } 
    }
}

Date::Date() : dia{0}, mes(0), ano{0}{};
Date::Date(unsigned int dia_i,unsigned int mes_i,unsigned int ano_i){
    if((dia_i<30 && dia_i >=1) && (mes_i<12 && mes_i >=1) && (ano >= 1))
    {
        dia = dia_i;
        mes = mes_i;
        ano = ano_i;
    } else {
        dia = 1;
        mes = 1;
        ano = 1;
    }
}

void Date::universal() const{
    std::string dia_s = "";
    std::string mes_s = "";
    std::string ano_s = "";

     if(dia<10){
        dia_s = "0";
        dia_s += std::to_string(dia);
    } else{
        dia_s = std::to_string(dia);
    }

    if(mes<10){
        mes_s = "0";
        mes_s += std::to_string(mes);
    } else{
        mes_s = std::to_string(mes);
    }

    if(ano<10){
        ano_s = "000";
        ano_s += std::to_string(ano);
    } else if(ano < 100){
        ano_s = "00";
        ano_s += std::to_string(ano);
    } else if(ano < 1000){
        ano_s = "0";
        ano_s += std::to_string(ano);
    }

    std::cout << dia_s << "|" << mes_s << "|" << ano_s << std::endl;
};

void Date::nextDay(){
    dia++;
    if(dia == 30){
        dia = 0;
        mes++;
        if(mes == 30){
            mes = 0;
            ano++;
        }
    }
};