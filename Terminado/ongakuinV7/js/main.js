


	window.onload = function() {


	   	creaSelectorJson("#selectorArea");
	  
	   	document.getElementById("botonStart").disabled = true;
	   	document.getElementById("siguienteNota").disabled = true;

	 
	   	seleccionarDivNota("#visorPartitura");
	   	seleccionarDivOctava("#modificadorOctavas");


	   
	   	document.getElementById("botonReiniciar").disabled = true;

	   	document.getElementById("inicioSonido").disabled = true;
	   	document.getElementById("botonSubeOctava").disabled = true;
	  	document.getElementById("botonBajaOctava").disabled = true;
		document.getElementById("botonReiniciaOctava").disabled = true;
	
		document.getElementById("botonAfinador").disabled = false;



	   seleccionarDivAfinador("visorAfinador");
	   seleccionarDivComprobador("visorPartitura");

	   informacionComprobacion(funcionComprobacion);

	 
	 
	}
	




	window.onchange = function(){
		var numeroPartitura = document.getElementById('partituras').value;

 		if (numeroPartitura != 0) {
 			
			document.getElementById("botonStart").disabled = false;

		}else{
			document.getElementById("botonStart").disabled = true;
			document.getElementById("siguienteNota").disabled = true;
			document.getElementById("botonAfinador").disabled = false;
			document.getElementById("botonReiniciar").disabled = true;

			$("#visorPartitura").html("");

		}
		
	}
	




var musicBoxIniciado = false;

	function comenzarPractica(){
		

		iniciarAfinador(false);

		pintaNota();
		
		document.getElementById("siguienteNota").disabled = false;

		document.getElementById("botonReiniciar").disabled = false;

	   
		document.getElementById("inicioSonido").disabled = false;
		document.getElementById("botonSubeOctava").disabled = false;
		document.getElementById("botonBajaOctava").disabled = false;
		document.getElementById("botonReiniciaOctava").disabled = false;

		document.getElementById("botonAfinador").disabled = true;

		musicBoxIniciado = false;


		reiniciaMusica();

		reiniciaNotasTocadas();
	}



	function iniciarMusicBox(){

		musicBoxIniciado = true;
		iniciarAudioContext();
		tocaNotaActual();

	}


	function reiniciaMusica(){


		reiniciaNotasTocadas();
		reiniciaPartitura();
		stopNote();
		musicBoxIniciado = false;

	}




	function tocarSiguienteNota(){
		
		aumentaNotasTocadas();

		pintaSiguienteNota();

		if (musicBoxIniciado) {
			tocaNotaActual();
		}

	}



	function stopNotas(){

		stopNote();
		musicBoxIniciado = false;


	}


	function funcionComprobacion(comprobante){

		if (comprobante) {
			tocarSiguienteNota();

		}



	}


var contadorNotasTocadas = 0;

	function pintaNotasTocadas(){

		$("#notasTocadas").html("Notas tocadas: "+contadorNotasTocadas);

	}

	function aumentaNotasTocadas(){

		contadorNotasTocadas++;
		pintaNotasTocadas();
	}


	function reiniciaNotasTocadas(){

		contadorNotasTocadas = 0;
		pintaNotasTocadas();
	}







function modoFacilAccion(){

	if(!isEasyMode()){
		changeEasyMode();
		$("#botonFacil").css("background-color", "#28a745");
	}else{
		changeEasyMode();
		$("#botonFacil").css("background-color", "#ffa64d");
	}


}



/*

function ayudaNotas(){

	alert("Notas: A = la, B = si, C = do, D = re, E = mi, F = fa, G = sol");
}

*/

