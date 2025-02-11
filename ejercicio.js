function saludar(mensajito, nombre, apellido, edad) {
    console.log(mensajito);
}

saludar("Hola","Daniel", "Rivas", 20);

function saludar(nombre) {
    return `¡Qué gusto verte, ${nombre}!`;
  }
  
  console.log(saludar("Daniel Felipe Rivas"));
  
  console.log([1, 2, 3, 4].concat([5, 6, 7, 8]));

const resultado = 1===1 ? "Sí, son iguales" : "No, no son iguales";
console.log(resultado);

switch (1) {
    case 1:
        console.log("Uno");
        break;
    case 2:
        console.log("Dos");
        break;
    default:
        console.log("No es ni uno ni dos");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        continue
    }

    console.log("Llegué al final");
}