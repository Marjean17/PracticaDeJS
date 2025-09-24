// function saludar(nombre) {
//     console.log(`Hola, ${nombre} 😁`);
// }

// function login(){
//     let usuario = prompt("Ingrese su nombre de usuario").trim();
//     if (usuario !== null && usuario.length >= 3) {
//         saludar(usuario);
//     } else {
//         console.warn("El nombre de usuario debe tener al menos 3 caracteres.");
//         login();
//     }
// }

// function sumar() {
//     let a = parseFloat(prompt("Ingrese el primer número"));
//     let b = parseFloat(prompt("Ingrese el segundo número"));
//     return a + b;
// }

//     const productos = [
//         { id: 1, nombre: "Camisa", precio: 1500 },
//         { id: 2, nombre: "Pantalón", precio: 3000 },
//         { id: 3, nombre: "Zapatos", precio: 4500 },             
//     ];

// // //Objetos literales
// function verProductos   (ps) {
// for(p of ps) {    
//     console.log(p.id);
//     console.log(p.nombre); 
//     console.log(p.precio); }
// }   
// verProductos(productos);


//login();
//verProductos();
// let nro = parseInt(prompt("Ingrese el nro del producto"));
// switch(nro){
// case 1:
//     console.log("Camisa");
//     break;  
// case 2:
//     console.log("Pantalón");
//     break;
// case 3:
//     console.log("Zapatos");     
//     break;
// default:
//     console.warn("Producto no encontrado");}


// Var   -  es una variable global
// Let   -  es una variable de bloque
// Const - es una constante, no puede cambiar su valor
// const PI = 3.14;
// let edad = 30;
// let edad2 = 25;
// let nombre = "Juan";
// 'Juan30'
// console.log(edad)
// let nro1 = parseInt(prompt("ingrese 1er nro "))
// let nro2 = parseInt(prompt("ingrese 2do nro ")) 
// let operacion = prompt ("ingrese operacion\npara sumar s\n para restar r\npara multiplicar m\npara dividir d")
// let resultado;

// if (operacion == "s") {
// resultado = nro1 + nro2
// console.log("El resultado fue: " + resultado)
// }
// if (operacion == "m") {
// resultado = nro1 * nro2
// console.log("El resultado fue: " + resultado)
// }
//let rta = nro1 / nro3 
//console.log(rta)