const paises = ["Argentina", "Brasil", "Peru", "Colombia", "Uruguay"];

function listarPaises() {
    paises.sort();
    console.table(paises); //solo para ver mientras depuro
}
//listarPaises();
//console.log(paises[2]);

// for (let i = 0; i <= paises.length-1; i++) {
//     console.log(paises[i]);
// }

function agregarPais() {
    let nuevoPais = prompt("Ingrese el nombre del país").trim();
    if (nuevoPais !== null && nuevoPais.length >= 3) {
        if (paises.includes(nuevoPais)) {
            console.warn("El país ya existe en la lista");
            return;
        }
        paises.push(nuevoPais); //unshift() lo agrega al principio
//        listarPaises();
    }
}
//agregarPais();
//for (pais of paises) {
//    console.log(pais)
//}
//eliminar un país
function EliminarPpais() {
    let paisAEliminar = prompt("Ingrese el nombre del país a eliminar").trim();
    let index = paises.indexOf(paisAEliminar);
    if (index >= -1) {
        paises.splice(index, 1);
        let algunos = paises.slice(index, 1);//otra forma de eliminar pero que retorna un nuevo array
        //tomando el indice y la cantidad de elementos a eliminar desde el 0 del array original
        console.log(`País ${paisAEliminar} eliminado`);
        return algunos;
    } else {
        console.warn("País no encontrado");
    }}
stringPaises = paises.join(', ');
//console.log(stringPaises);
//console.log(EliminarPpais());
//
//listarPaises();

const productos = [];

//agregarProducto ()
function agregarProducto (){
    const productoNuevo = new Producto(
        productos.length,
        prompt("ingrese el nombre del producto: "),
        prompt("Ingrese el precio del producto: ")
    )
    productos.push(productoNuevo)
    let otroMas = confirm("desea agregar otro producto? ")
    debugger
    if (otroMas) {return agregarProducto ()}

}
//console.log(productos)

function tirarDados () {
    return parseInt(Math.random()*10)
}

let tirarConFlecha = () => parseInt(Math.random()*10)

function agregarListaProductos(){
    productos.push(new Producto(7, "pinza", 24))
    productos.push(new Producto(8, "metro", 14))
    productos.push(new Producto(9, "llave francesa", 11))
}
agregarListaProductos()

function buscarPorId (x) {
    for(p of productos){
        if(p.id === x){        
        return p.nombre + " - Precio final " + p.precioFinal()}
    }
}

const nros = [1, 5, 3, 8, 4, 5];

function listar(arr, fn){
    nros.sort()
    for(elem of nros){
        fn(elem)
    }    
    alert(`Los nros son ${nros.join(", ")}`)
}
//listar(nros, console.log)

function recorrerProductos(miArray){
    miArray.forEach(x => console.log(x))
}
console.time(nros)
console.timeEnd(nros)
const listaNros = nros.forEach(e => console.log(e))

function buscarProducto(miArray, nombre){
    miArray.find(x.nombre == nombre)
    return miArray.x
}