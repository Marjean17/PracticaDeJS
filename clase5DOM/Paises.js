// class Pais {
//     constructor(nombre) {
//         this.nombre = nombre;
//     }
// }

function agregarPais(){
    let p = prompt("ingrese el pais a agregar");
    if(paises.includes(p)){alert("Ese pais ya esta agregado")}
    else{paises.push(p);}    
    mostrarPaises();
}

function eliminarPais(){
    let p = prompt("ingrese el pais a eliminar");
    if(!(paises.includes(p))){alert("Ese pais no esta agregado")}
    else{
        let indice = paises.indexOf(p)
        paises.splice(indice, 1);
    }
    mostrarPaises();
}