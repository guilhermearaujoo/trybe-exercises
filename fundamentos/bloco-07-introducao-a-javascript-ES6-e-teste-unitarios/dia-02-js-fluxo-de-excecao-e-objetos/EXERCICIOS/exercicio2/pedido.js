const order = {
  name: "Guilherme Araujo",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const pedido = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${
    order.name
  }, Telefone: ${order.phoneNumber}, ${Object.values(order.address)} `;

  console.log(pedido);
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // let preco = 0;
  // const pizzas = Object.values(order.order.pizza);
  // for (let index = 0; index < pizzas.length; index += 1) {
  //   preco += Number(pizzas[1].price);
  // }

  // const precoCoke = order.order.drinks.coke.price;
  // preco += Number(precoCoke);

 order.payment.total = '50';

  const pagamento = `Olá ${order.name}, o total do seu pedido de ${Object.keys(
    order.order.pizza
  )} e ${order.order.drinks.coke.type} é R$ ${order.payment.total}`;

  console.log(pagamento);
};

orderModifier(order);

// Complete a função customerInfo() para que seu retorno seja similar a “Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701”.

// 💡 Note que o parâmetro da função já está sendo passado na chamada da função.

// Complete a função orderModifier() para que seu retorno seja similar a “Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.”

// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.
