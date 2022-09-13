#include <iostream>
#include "time.h"


int main(){
    Date d1;
    Date d2{0, 1, 2};
    Date d3{1, 2, 3};

    d1.universal();
    d2.universal();
    d3.universal();

    d3.nextDay();

    d3.universal();
}