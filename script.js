//Obtener datos desde los elementos
//textarea
const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

//Llama a la funcion encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value=""
}

//Aplicar las reglas 
//Funcion de encriptar - recibe el parametro - valor
function encriptar(stringEncriptada) {
    //Utilizando Matriz - lista sobre lista
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    //validar - pasa letras minusculas
    stringEncriptada = stringEncriptada.toLowerCase();

    //verificar letras dentro del texto - for
    for (let i = 0; i < matrizCodigo.length; i++) {
        
        //validar que la letra sea vocal
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            //reemplazando caracteres(vocal) por texto
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }        
    }
    return stringEncriptada;
}

//Llama a la funcion desencriptar
function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    //mensaje.style.backgroundImage = "none"
    inputTexto.value=""
}

//Aplicar las reglas 
//Funcion de Desencriptar - recibe el parametro - valor
function desencriptar(stringDesencriptada) {
    //Utilizando Matriz - lista sobre lista
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];

    //validar - pasa letras minusculas
    stringDesencriptada = stringDesencriptada.toLowerCase();

    //verificar letras dentro del texto - for
    for (let i = 0; i < matrizCodigo.length; i++) {
        
        //validar que la letra sea vocal
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            //reemplazando caracteres(vocal) por texto
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }        
    }
    return stringDesencriptada;
}

//Copiar
function copiar(params) {
    mensaje.select();
    //buscar documentacion de navigator
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("Texto copiado")
}