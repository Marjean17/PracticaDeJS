//declaro una variable con el nombre del id en el html
const miTitulo = document.getElementById("miTitulo")
const parrafo = document.getElementById("parrafo")

/*leemos contenido de un elemento HTML con
- miTitulo.innerText
- miTitulo.textContent
*/
parrafo.innerText = `Trabajamos con DOM y eventos`

// QuerySelector nos permite trabajar con el nombre del 
// tipo de etiqueta y desambiguar con selectores CSS
const listadoPaises = document.querySelector("button.button-grey")

// también puedo usar querySelector anteponiendo # al id
const miTitulo2 = document.querySelector("#miTitulo")
// y puedo ademas indicar el tipo de tag antes del #
const parrafo2 = document.querySelector("p#parrafo")

const