#include "feetinches1.h"

void FeetInches::simplify(){

    if(inches >= 12){
        feet += (inches/12);
        inches = inches%12;
        
    } else if(inches < 0) {
        feet -= (inches/12)+1;
        inches  = (inches%12)+12;
    }
};


FeetInches FeetInches::operator + (const FeetInches &dir){
    FeetInches c1;
    c1.setFeet(this->getFeet() + dir.getFeet());
    c1.setInches(this->getInches() + dir.getInches());

    c1.simplify();
    return c1;
};

FeetInches FeetInches::operator - (const FeetInches &dir){
     FeetInches c2;
    c2.setFeet(this->getFeet() - dir.getFeet());
    c2.setInches(this->getInches() - dir.getInches());

    c2.simplify();
    return c2;

 };