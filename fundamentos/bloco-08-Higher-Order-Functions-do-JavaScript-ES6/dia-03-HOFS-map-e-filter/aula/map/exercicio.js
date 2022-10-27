const products = ["Arroz", "Feijao", "Alface", "Tomate"];
const prices = [2.99, 3.99, 1.5, 2];

// Deseja-se juntá-las em apenas uma lista de objetos que fique dessa forma:

// const listProducts = [{ Arroz: 2.99 },...]

const nameAndPrice = (arrayProduct, arrayPrice) =>
  arrayProduct.map((element, index) => ({ 
    [element]: arrayPrice[index] }
    ));

const listProducts = nameAndPrice(products, prices);
console.log(listProducts);
