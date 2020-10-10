
// Recojo unos datos y tarda 5 segundos

var datos = [];


function recogerDatos(callback) {
    
    setTimeout(function(){
       
        datos = ["Televisor", "Crucero", "coche"];

        console.log('Los premios del sorteo son ' + datos);

        callback();

    },5000);
}


// capturo el boton

let boton = document.querySelector('#btn');

// Imprimo los datos recogidos en pantalla . para ello creo la funcion que lo haría y la llamo desde el callback de recoger datos 

function pintaDatos(callback) {

    setTimeout(function(){

        const pintaPantalla = document.querySelector("#paintHere");
        let contenidoParaPintar = `Los premios del sorteo son: ${datos}`;
        pintaPantalla.innerHTML = contenidoParaPintar;

        // quito la clase que ocultaba el botón
        boton.classList.remove('visibility');

        callback();
    },8000);


}

// funcion para deshabilitar el botón pasados 10 segundos

function deshabilitaBoton() {

    setTimeout(function(){

        boton.setAttribute("disabled", true);
    },18000);

}


// Llamada a las funciones, resolución de ejercicio

recogerDatos(pintaDatos(deshabilitaBoton()));