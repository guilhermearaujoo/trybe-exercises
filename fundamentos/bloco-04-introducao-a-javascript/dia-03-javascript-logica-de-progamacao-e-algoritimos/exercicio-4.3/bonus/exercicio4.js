// Depois, faça uma pirâmide com n asteriscos de base:

let n = Math.ceil(Math.random()*10+1);

if (n%2 == 0) {
    n += 1;
}

let asteriscosList = new Array(n).fill(" ");
let midd = Math.floor(n/2);
let pLeft = midd;
let pRigth = midd;

asteriscosList[midd] = "*";
for(let i=1; i<=n; i+=1) {
    if(i%2 != 0){
        console.log(asteriscosList.join(""));
        pLeft += 1;
        pRigth -= 1;
        asteriscosList[pLeft] = "*";
        asteriscosList[pRigth] = "*";
    }  
}


