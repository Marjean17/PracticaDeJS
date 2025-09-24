// //debugger
// let nombre = "Pirul";
// console.log (typeof nombre)

// let edad = 22;
// let antiguedad = 5;
// let curso = "JS";
// const PROFESION = "Analista programador"
// let cursoVacio;

// let presentacion = nombre + " " + PROFESION

// if (nombre == "Pirulo") 
// {
// console.log("Hola Pirulo!")
// } else if (nombre == "Virulo") {
// console.log("mensaje para Virulo")
// }
// else {console.warn(nombre, "🤷‍♂️ a vos no te conozco")}

// //-------------------
// let nro = parseInt("3") //typeof number
// let nro3 = ("3") //typeof srtring

/*for (let i = 0; i <= 5; i++){
    let n = prompt(" ingrese nombre nro " + i)
    if (n == "c") {
        continue
    }
    console.log(n + " tiene el turno " + i)
}*/

// estoEsCamelCase 
// EstoEsPascalCase
// esto_es_snake_case

let idJugador = 0;
let jugador = "";
let dado1 = 0;
let dado2 = 0;
let dado3 = 0;
const lJugadores = []

function jugar() {
jugador = prompt ("complete su nombre: ")
console.log(idJugador + " anterior")
idJugador = idJugador + 1; 
console.log(idJugador + " actual")
lJugadores.push(jugador)
alert("bienvenido " + jugador + " su id es el nro " + idJugador)
console.log(lJugadores)
let agregar = confirm("quieres agregar otro user ")
    if(agregar == true ){
    jugar();
    }
}

jugar();
console.table(lJugadores)