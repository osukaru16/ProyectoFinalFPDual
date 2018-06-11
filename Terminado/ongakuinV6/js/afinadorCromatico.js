
window.AudioContext = window.AudioContext || window.webkitAudioContext;



var soloAfonador = false;

var easyMode = false;

function changeEasyMode(){
	if (easyMode) {
		easyMode = false;
	}else{
		easyMode = true;
	}
	//return "Cambio hecho";
}

function isEasyMode(){
	return easyMode;
}


function errorStream(){
	alert("Error: el sistema no detecta ningun micro");

}




function iniciarAfinador(estadoAfinador){

	soloAfonador = estadoAfinador;
	
    getUserMedia(
    	{
            "audio": {
                "mandatory": {
                    "googEchoCancellation": "false",
                    "googAutoGainControl": "false",
                    "googNoiseSuppression": "false",
                    "googHighpassFilter": "false"
                },
                "optional": []
            },
        }, iniciarStream);

	
}




function getUserMedia(dictionary, callback) {

    try {

        navigator.getUserMedia = navigator.getUserMedia ||
        						 navigator.webkitGetUserMedia ||
        						 navigator.mozGetUserMedia ||
        						 navigator.mediaDevices.getUserMedia || 
    							 navigator.msGetUserMedia;
        						 navigator.getUserMedia(dictionary, callback, errorStream);

      


    } catch (e) {
    	
        alert('getUserMedia threw exception :' + e);
    }
    
}


/*
navigator.getUserMedia = 
        	navigator.getUserMedia ||
        	navigator.webkitGetUserMedia ||
        	navigator.mozGetUserMedia;

*/

/*
navigator.getUserMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);
*/

//window.AudioContext = window.AudioContext || window.webkitAudioContext;


	var audioContext = null;
	
	
	var analyser = null;


	var frecuencia;

	var nota;

	var frecuenciaDetallada;





function iniciarStream(stream) {



	audioContext = new AudioContext();
   
    var mediaStreamSource = audioContext.createMediaStreamSource(stream);

    
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;

    mediaStreamSource.connect( analyser );


    actualizarAfinador();


    

}



/*
Nota: tengo que revisar esta formula que creo 
	  que el hecho de redondear hace que fallen las notas A0, C8 y creo que otras notas tambien fallan


Mirar para que son estas formula:
	Math.floor( 1200 * Math.log( frequency / frequencyFromNoteNumber( note ))/Math.log(2) );

	440 * Math.pow(2,(note-69)/12);

*/


function sacaTono(nota, frecuencia){


	//console.log(nota);


	var arrayFrecuencias = [];

	var arrayTonos = [];

	var frecuencias = new Frecuencias();

	var arrayNotaFrecuenciaTono = frecuencias.getArrayNotaFrecuenciaTono();

	for (var i = 0; i < arrayNotaFrecuenciaTono.length; i++) {

		if (nota == arrayNotaFrecuenciaTono[i][0]) {
			arrayFrecuencias.push(arrayNotaFrecuenciaTono[i][1]);
			arrayTonos.push(arrayNotaFrecuenciaTono[i][2]);
		}


	}

	for (var i = 0; i < arrayFrecuencias.length; i++) {

		if (comprobadorFrecuencia(frecuencia, arrayFrecuencias[i])) {
			return nota+arrayTonos[i];
		}
	}


	return "";

}





function comprobadorFrecuencia(numeroAspirante, numeroComprobador){

	//numeroAspirante = Math.trunc(numeroAspirante);
	//numeroComprobador = Math.trunc(numeroComprobador);

	var rangoMedida = 100;

	var aspiranteMenosComprobador = numeroAspirante - numeroComprobador;

	//console.log("numeroAspirante: "+numeroAspirante+"Hz numeroComprobador: "+numeroComprobador+"Hz");

	if (Math.abs(aspiranteMenosComprobador) <= rangoMedida) {
		return true;
	}


	return false;
}





function sacaNota(frecuenciaActual){


	var listaNotas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
	var noteNum = 12 * (Math.log( frecuenciaActual / 440 )/Math.log(2) );

	//return Math.round( noteNum ) + 69;
	return listaNotas[(Math.round( noteNum ) + 69)%12];

}






function crearAfinador( buffer, sampleRate ) {

	var GOOD_ENOUGH_CORRELATION = 0.9;
	var SIZE = buffer.length;
	var MAX_SAMPLES = Math.floor(SIZE/2);
	var best_offset = -1;
	var best_correlation = 0;


	
	var rms = 0;
	/*
	rms es la potencia real. siglas RMS (Root Mean Square) en la musica.
	*/



	var foundGoodCorrelation = false;
	var correlations = new Array(MAX_SAMPLES);

	for (var i=0;i<SIZE;i++) {
		var val = buffer[i];
		rms += val*val;
	}


	

	rms = Math.sqrt(rms/SIZE);






	if (rms<0.01) // esto es para evitar un poco de ruido
		return -1;

	var lastCorrelation=1;
	for (var offset = 0; offset < MAX_SAMPLES; offset++) {
		var correlation = 0;

		for (var i=0; i<MAX_SAMPLES; i++) {
			correlation += Math.abs((buffer[i])-(buffer[i+offset]));
		}
		correlation = 1 - (correlation/MAX_SAMPLES);
		correlations[offset] = correlation; // store it, for the tweaking we need to do below.
		if ((correlation>GOOD_ENOUGH_CORRELATION) && (correlation > lastCorrelation)) {
			foundGoodCorrelation = true;
			if (correlation > best_correlation) {
				best_correlation = correlation;
				best_offset = offset;
			}
		} else if (foundGoodCorrelation) {

				var shift = (correlations[best_offset+1] - correlations[best_offset-1])/correlations[best_offset];  
			return sampleRate/(best_offset+(8*shift));

		}
		lastCorrelation = correlation;
	}
	if (best_correlation > 0.01) {

		return sampleRate/best_offset;
	}



	return -1;


	/*
	Nota en este punto es muy probablen que se el optimo para poner codigo para que detecte la nota A0 y similares.



	*/

}









var divAfinador;

function seleccionarDivAfinador(idDiv){

	divAfinador = idDiv;



}



var divComprobador;


function seleccionarDivComprobador(idDiv){

	divComprobador = idDiv;



}




function notaComprobador(notaAfinador, notaPartitura){

	if(easyMode){

		if (notaAfinador.substring(0, 1) == notaPartitura.substring(0, 1)) {
			return true;
		}

	}

	else if (notaAfinador.trim() == notaPartitura.trim()) {
		return true;
	}

	return false;
}



var notaTono;

function actualizarAfinador() {




	var buffer = new Float32Array( 1024 );
	analyser.getFloatTimeDomainData( buffer );
	var afinador = crearAfinador( buffer, audioContext.sampleRate );


	if (afinador != -1) {

		frecuencia = Math.round( afinador ) ;


		nota = sacaNota(frecuencia);

		notaTono = sacaTono(nota, afinador);

	

		
	}else{
		frecuencia = 0;
		nota = "0";
		notaTono = ""
	}





	document.getElementById(divAfinador).innerHTML = notaTono; 



	if(!soloAfonador){

		var notaPartitura = "";

		notaPartitura = document.getElementById(divComprobador).innerText;

		funcionExternaAfinador(notaComprobador(notaTono, notaPartitura));
		
	}
	


	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = window.webkitRequestAnimationFrame;
	var rafID = window.requestAnimationFrame( actualizarAfinador );




	


}







var funcionExternaAfinador;

function informacionComprobacion(funcionExterna){

	funcionExternaAfinador = funcionExterna;
}
