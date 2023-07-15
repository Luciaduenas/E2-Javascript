const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// EJERCICIOS ---
// a)  Las pizzas que tengan un id impar.
console.log ("_____a)  Las pizzas que tengan un id impar._____")
pizzas.forEach((pizzas) => {
  if (pizzas.id %2 === 0) {
    console.log ("La " + pizzas.nombre + " es par")
  }
});


//b) Responder: ¿Hay alguna pizza que valga menos de $600?
console.log(".....................")
console.log ("_____b) Responder: ¿Hay alguna pizza que valga menos de $600?_____")

pizzas.forEach((pizzas) => {
  if (pizzas.precio < 600) {
    console.log ("Si, la " + pizzas.nombre + " vale " + pizzas.precio + " pesos.")
  }
  else {
    console.log ("No.")
  }
});


//c) El nombre de cada pizza con su respectivo precio.
console.log(".....................")
console.log ("_____c) El nombre de cada pizza con su respectivo precio._____")
pizzas.forEach((pizzas) => {
  console.log( "La " + pizzas.nombre + " $" + pizzas.precio + " pesos.")
});


//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes. 
console.log(".....................")
console.log ("_____d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo._____")
pizzas.forEach((pizzas) => {
  console.log ("Los ingredientes de la " + pizzas.nombre + " son: " + pizzas.ingredientes)    
});
