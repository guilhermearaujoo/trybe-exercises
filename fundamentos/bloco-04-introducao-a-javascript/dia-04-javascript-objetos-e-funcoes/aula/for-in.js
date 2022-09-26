let pizzas = {
    sabor: "Palmito",
    preco: 39.90,
    bordaCatupiry: true,
}

for(let key in pizzas){
    console.log(pizzas[key]);
}
for(let key in pizzas){
    console.log(key);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for(let key in pizzasDoces){
    console.log(key);
}

for(let key in pizzasDoces){
    console.log(pizzasDoces[key]);
}

let cars = ['volks', 'bmw', 'ford'];
for(index of cars) {
    console.log(index);
}