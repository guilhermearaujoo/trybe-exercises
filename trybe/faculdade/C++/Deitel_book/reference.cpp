#include <iostream>

using namespace std;

void foo(unsigned int& a){
    a++;
}

// se eu disser que o parametro é const então a função não pode modificar p valor

int main(){
    unsigned int b;
    b = 10;
    foo(b);
    cout << b << endl;

    unsigned int* c = &b;
    foo(*c);
    cout << b << endl;

    unsigned int& d = b;
    foo(d);
    cout << d << endl;
}