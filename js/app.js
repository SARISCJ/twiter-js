window.addEventListener("load", function() {
    var boton = document.getElementById("enviar");
    boton.disabled = true;
    boton.addEventListener("click", function (e){
    	e.preventDefault();
    	var texto = document.getElementById("texto");
    	mensajes(texto.value);
 		texto.value = "";
	});

	function mensajes (texto) {
    	var contenedorMensaje = document.createElement("div");
		contenedorMensaje.innerHTML = texto;
    	var mensajes = document.getElementById("mensaje");
    	mensajes.insertBefore(contenedorMensaje, mensaje.childNodes[0]);
	}

    var texto = document.getElementById("texto");
	texto.addEventListener("keypress", function (){
		boton.disabled = false;
		caracteres();
	}) 

	function caracteres () {
		var texto = document.getElementById("texto");
		var cantidadCaracteres = texto.value.length;
		var limite = 140;
		var contador = document.getElementById("contador");
		contador.innerHTML = limite - cantidadCaracteres;

		if (cantidadCaracteres >= limite) {
			contador.removeClass("white").addClass("red");
			boton.disabled = true;
		} else {
			contador.removeClass("red").addClass("blue");
		}
	}
});

