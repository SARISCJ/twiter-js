window.addEventListener("load", function() {
	var color = ["red","violet","purple"];
	var maximo = [120,130,140];
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

	function caracteres (maximo, color) {
		var texto = document.getElementById("texto");
		var cantidadCaracteres = texto.value.length;
		var limite = 140;
		var contador = document.getElementById("contador");
		contador.innerHTML = limite - cantidadCaracteres;

       if(largo >= maximo[0] && largo < maximo[1]) {  //largo >= 120 y largo < 130
               contador.classList.remove(color[1]);
                contador.classList.add(color[0]);
       } else if(largo >= maximo[1] && largo < maximo[2]) {  //largo >= 130 y largo < 140
               contador.classList.remove(color[0]);
               contador.classList.remove(color[2]);
               contador.classList.add(color[1]);    
       } else if(largo >= maximo[2]){//largo >= 140
               contador.classList.remove(color[1]);
               contador.classList.add(color[2]);
               boton.disabled = true;
       } else {
               for(var i = 0; i < maximo.length-1; i++){
                   contador.classList.remove(color[i]);        
               };
       }

	}
});

