let inventario = [
  { nombre: "Laptop", cantidad: 10, categoria: "Eletronica"},
  { nombre: "Telefono", cantidad: 5, categoria: "Eletronica"},
  { nombre: "Escritorio", cantidad: 2, categoria: "Muebles"},
  { nombre: "Silla", cantidad: 15, categoria: "Muebles"},
  { nombre: ["Taza", "Plato"], cantidad: 8, categoria: "Cocina"},
];


inventario.push({nombre: "Monitor", cantidad: 7, categoria:"Eletronica"});
console.log("Mostrar inventario", inventario);

const indexTelefono = inventario.findIndex(item => item.nombre === "Telefono")
console.log("indexTelefono: ", indexTelefono);

if(indexTelefono !== -1){
  inventario.splice(indexTelefono, 1);
} 
console.log("Mostrar inventario", inventario);

const indexSilla = inventario.findIndex(item => item.nombre === "Silla");
console.log("Silla se encuentra en inventario: ", indexSilla);

const estaLaptopEnInventario = inventario.some(item => item.nombre === "Laptop");
console.log("Se encuntra la Latop se encuentra en inventario?: ", estaLaptopEnInventario ? "Si" : "No");

const nombresDeProductos = inventario.map(item => [item.nombre]);
console.log("Nombres de Productos (Unflatten): ", nombresDeProductos);
console.log("Nombres de Productos (Flatten): ", nombresDeProductos.flat(2));

inventario.sort((a, b) => {
  const nombreA = Array.isArray(a.nombre) ? a.nombre[0] : a.nombre;
  const nombreB = Array.isArray(b.nombre) ? b.nombre[0] : b.nombre;
  return nombreB.localeCompare(nombreA);
});

console.log("Mostrar inventario", inventario);

inventario.reverse();
console.log("Mostrar inventario", inventario);

const muebles = inventario.filter(item => item.categoria ===  "Muebles");
console.log("Mostrar Muebles", muebles);

inventario = inventario.map(item => {
  return { ...item, nombre:  `Producto ${Array.isArray(item.nombre) ? item.nombre.join(",") : item.nombre}`}
});

console.log("Mostrar inventario", inventario);


let totalEnInventario = inventario.reduce((total, item) => total + item.cantidad, 0);


console.log("Total en Inventario", totalEnInventario);

const eliminadoPrimero = inventario.shift();
console.log("Primero Eliminado", eliminadoPrimero);
console.log("Total en Inventario", totalEnInventario);
totalEnInventario = inventario.reduce((total, item) => total + item.cantidad, 0);
console.log("Total en Inventario", totalEnInventario);

const eliminadoUltimo = inventario.pop();
console.log("Ultimo Eliminado", eliminadoUltimo);


totalEnInventario = inventario.reduce((total, item) => total + item.cantidad, 0);
console.log("Total en Inventario", totalEnInventario);

inventario.unshift({nombre: "Teclado", cantidad: 12, categoria: "Electronica"});

totalEnInventario = inventario.reduce((total, item) => total + item.cantidad, 0);
console.log("Total en Inventario", totalEnInventario);

console.log("Mostrar inventario", inventario);

const nombreProductos = inventario.map(item => item.nombre).join(", ");

console.log("Listar Productos: ", inventario.map(item => item.nombre).join(", "));
