function saludar(mensajito, nombre, apellido, edad) {
    console.log(mensajito);
}

saludar("Hola","Daniel", "Rivas", 20);

function saludar(nombre) {
    return `¡Qué gusto verte, ${nombre}!`;
  }
  
  console.log(saludar("Daniel Felipe Rivas"));
  