var botonencriptar = document.querySelector(".encriptar");
var botondesencriptar =document.querySelector(".desencriptar");
var botoncopiar=document.querySelector(".boton-copiar")
var imgMunheco = document.querySelector(".imagen1");
var imgMunheco2 = document.querySelector(".imagen2");
var resultadotexto = document.querySelector(".resultado");


botonencriptar.onclick=encriptar;
botondesencriptar.onclick=desencriptar;
botoncopiar.onclick=copiar;


function encriptar(){
    imgOcultar();
    var area = cajaRecuperada()
    resultadotexto.textContent = encriptarArea(area);
}

function desencriptar(){
    imgOcultar();
    var area = cajaRecuperada()
    resultadotexto.textContent = desencriptarArea(area);
}



function copiar(){
    var resultadotexto = document.querySelector(".resultado");
    var seleccion = document.createRange();
    seleccion.selectNodeContents(resultadotexto);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
    alert("mensaje copiado")
}

function cajaRecuperada(){
    var texto = document.querySelector(".input-text__area");
    return texto.value;
}


function imgOcultar(){
    imgMunheco.classList.add("ocultar");
    imgMunheco2.classList.add("ocultar");
}

function encriptarArea(mensaje){

    var texto = mensaje;
    var textofinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "ai"
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "enter"
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "imes"
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "ober"
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "ufat"
        }
        else{
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal

}
function desencriptarArea(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "a"
            i=i+1
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "e"
            i=i+4
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "i"
            i=i+3
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "o"
            i=i+3
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "u"
            i=i+3
        }
        else{
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal

}