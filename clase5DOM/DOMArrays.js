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
//     tipoDeTag#iDdelTag.selectoresCssDelTag

//-----------------------------------------------------------------------------------
//creamos un objeto que estara asociado a un Tag para modificarlo
const listarPaises = document.querySelector("ul") //conecta con el 1er tag que cumple
//-----------------------------------------------------------------------------------
// Y lo poblamos recorriendo el array paises y escribiento en el html o usando createElement()
function mostrarPaises() {
    listarPaises.innerHTML = ""; //vacio el objeto para cara recarga
    paises.forEach(x => {
        
        //escribimos el html
        // listarPaises.innerHTML += "<li>" + x + "</li>" 
        // listarPaises.innerHTML += "<li id='" + "id-" + x +"'>" + x + "</li>" //con id

            //tambien podemos usar plantillas HTML con backsticks `` y agregar literales ${}
            listarPaises.innerHTML += `<li id="id-${x}">${x}</li>`;

        //o usamos createElement
        // const lix = document.createElement("li");   
        // lix.id = "id-" + x;
        // lix.setAttribute("personas", 150000) //podemos agregar atributos
        // lix.innerText = x;
        // lix.hasAttributes("nombre")
        // // listarPaises.append(lix, "---- ", paises); //append permite agregar incluso arrays
        // listarPaises.append(lix)
    })
}

function eliminarElemento(id){
    const elementoHtml = document.getElementById(id);
    elementoHtml.remove();
}

mostrarPaises()
