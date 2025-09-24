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


//Constante de paises
const paises = ["Argentina", "Brasil", "Peru", "Venezuela", "Colombia"]

//indicamos en que parte del html estará listarPaises
const listarPaises = document.querySelector("ul") //conecta con el 1er tag que cumple
// Y lo poblamos escribiento en el html o usando createElement()
function mostrarPaises() {
    paises.forEach(x => {
        listarPaises.innerHTML += "<li>" + x + "</li>" //escribimos el html
        // listarPaises.innerHTML += "<li id='" + "id-" + x +"'>" + x + "</li>" //con id
        // const lix = document.createElement("li");   //o usamos createElement
        // lix.id = "id-" + x;
        // lix.setAttribute("personas", 150000)
        // lix.innerText = x;
        // listarPaises.append(lix);
    })
}

function eliminarElemento(id){
    const elementoHtml = document.getElementById(id);
    elementoHtml.remove();
}

mostrarPaises()