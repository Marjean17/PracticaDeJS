const IVA = 1.21
let ID = 0;
class Producto {
    constructor(ID, nombre, precio,) {
        this.ID = ID,
        this.nombre = nombre,
        this.precio = precio,
        this.precioFinal = this.precio*IVA
    }
    precioFinal () { return this.precio * IVA}
    upperCase () { return this.nombre.toUpperCase() }    
}
const lProductos = [];
lProductos.push(new Producto(ID++,"pala", 500))
lProductos.push(new Producto(ID++,"destornillador", 200))
lProductos.push(new Producto(ID++,"martillo", 400))
lProductos.push(new Producto(ID++,"pinza", 300))

//tbody almacena los tr (row) con sus td (definition)
const table = document.querySelector("table") 
const tbody = document.querySelector("tbody") 

function armarHtml(p){
    return `<tr>
                <td>${p.ID}</td>
                <td>${p.nombre}</td>
                <td>${p.precio}</td>   
                <td>${p.precioFinal}</td>
            </tr>`
        }

function recorrerProductos(){
    tbody.innerHTML = ""
    if(lProductos.length>0){
       lProductos.forEach(p => tbody.innerHTML += armarHtml(p));
    } 
}

