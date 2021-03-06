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
 		contador.textContent = "140";
	});

	function mensajes (texto) {
    	var contenedorMensaje = document.createElement("div");
		contenedorMensaje.innerHTML = texto;
    	var mensajes = document.getElementById("mensaje");
    	mensajes.insertBefore(contenedorMensaje, mensajes.childNodes[0]);
    	horaPost(contenedorMensaje);
	}

	function resize(){
		txtArea.style.cssText = 'height:auto';
	}

	function horaPost(nombre){
		var fecha = new Date();
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();
            if (minuto < 10) {
                minuto = "0" + minuto;
            }
        var post = "Posted " + hora + " : " + minuto + " ";
        var hora = document.createElement("span");
		hora.innerText = post;

		nombre.insertBefore(hora,nombre.childNodes[0]);  
    }

    var texto = document.getElementById("texto");
	texto.addEventListener("keyup", function (){
		boton.disabled = false;
		caracteres(maximo, color);
	}) 

	function caracteres (maximo, color) {
		var texto = document.getElementById("texto");
		var cantidadCaracteres = texto.value.length;
		var limite = 140;
		var contador = document.getElementById("contador");
		contador.innerHTML = limite - cantidadCaracteres;

       if(cantidadCaracteres >= maximo[0] && cantidadCaracteres < maximo[1]) {  //cantidadCaracteres >= 120 y cantidadCaracteres < 130
               contador.classList.remove(color[1]);
                contador.classList.add(color[0]);
       } else if(cantidadCaracteres >= maximo[1] && cantidadCaracteres < maximo[2]) {  //cantidadCaracteres >= 130 y cantidadCaracteres < 140
               contador.classList.remove(color[0]);
               contador.classList.remove(color[2]);
               contador.classList.add(color[1]);    
       } else if(cantidadCaracteres >= maximo[2]){//cantidadCaracteres >= 140
               contador.classList.remove(color[1]);
               contador.classList.add(color[2]);
               boton.disabled = true;
       } else {
               for(var i = 0; i < maximo.length-1; i++){
                   contador.classList.remove(color[i]);        
               };
       }
	}

	var textarea = document.querySelector('textarea');
	textarea.addEventListener('keypress', autosize);
	boton.disabled = false;

	function autosize(){
	  var parrafo = this;
	  setTimeout(function(){
	    parrafo.style.cssText = 'height:auto; padding:0';
	    // for box-sizing other than "content-box" use:
	    // parrafo.style.cssText = '-moz-box-sizing:content-box';
	    parrafo.style.cssText = 'height:' + parrafo.scrollHeight + 'px';
	  },0);
	}
});

