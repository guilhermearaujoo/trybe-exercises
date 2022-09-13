#include <iostream>

using namespace std;  

class registrador8{
private:
    int bits = 8;
public:
    int getbits(){
        return bits;
    }
    registrador8(){
        cout << "cria registrador 8" << endl;
    }
    ~registrador8(){
        cout << "destroi registrador 8" << endl;
    }
    friend class registrador8;
};


class registrador16{
private:
    registrador8 rg8;
    int bits = 2*rg8.getbits();
    
public:
    int getbits(){
        return bits;
    }   
    registrador16(){
        cout << "cria registrador 16" << endl;
    }
    ~registrador16(){
        cout << "destroi registrador 16" << endl;
    }
}; 


int main(){
    registrador16 rg16;
    cout << rg16.getbits() << endl;
}