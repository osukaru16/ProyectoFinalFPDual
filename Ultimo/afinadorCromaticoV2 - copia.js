






function errorStream(){
	alert('Stream generation error.');

}




function iniciarAfinador(){

	
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
        						 navigator.mediaDevices.getUserMedia;
        						 navigator.getUserMedia(dictionary, callback, errorStream);

      


    } catch (e) {
    	
        alert('getUserMedia threw exception :' + e);
    }
    
}







window.AudioContext = window.AudioContext || window.webkitAudioContext;

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
function sacarNotaPorFrecuencia(frecuenciaActual) {

	/*var listaNotas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
	var noteNum = 12 * (Math.log( frecuencia / 440 )/Math.log(2) );

	//return Math.round( noteNum ) + 69;
	return listaNotas[(Math.round( noteNum ) + 69)%12];*/
	//frecuenciaActual = frecuenciaActual +1;
	var nota = sacaNota(frecuenciaActual);

	var opcionesNota = [];

	var frecuencias = new Frecuencias();

	var arrayNotaFrecuenciaTono = frecuencias.getArrayNotaFrecuenciaTono();


	for (var i = 0; i < arrayNotaFrecuenciaTono.length; i++) {


		if (comprobadorFrecuencia(frecuenciaActual, arrayNotaFrecuenciaTono[i][1])) {
			opcionesNota.push(arrayNotaFrecuenciaTono[i][0]+arrayNotaFrecuenciaTono[i][2]);
		}

		//console.log(Math.trunc(frecuenciaActual)+"|"+Math.trunc(arrayNotaFrecuenciaTono[i][1]));

		//console.log(frecuenciaActual+"|"+arrayNotaFrecuenciaTono[i][1]);
	}

	for (var i = 0; i < opcionesNota.length; i++) {
		if (separadorNotaTono(opcionesNota[i]) == nota) {

			return arrayNotaFrecuenciaTono[i][0]+arrayNotaFrecuenciaTono[i][2];
		}

	}

	console.log(opcionesNota);

}



function separadorNotaTono(notaTono){

	var nota;

	if (notaTono.length == 3) {
		nota = notaTono.charAt(0)+notaTono.charAt(1);
		//tono = notaTono.charAt(2);
	}else if(notaTono.length == 2) {
		nota = notaTono.charAt(0);
		//tono = notaTono.charAt(1);
	}

	return nota;

}




function comprobadorFrecuencia(numeroComprobacion, numeroComprobador){

	numeroComprobacion = Math.trunc(numeroComprobacion);
	numeroComprobador = Math.trunc(numeroComprobador);

	for (var i = 0; i < 3; i++) {
		//console.log(numeroComprobacion);
		if (numeroComprobacion == numeroComprobador + i){

			return true;

		}else if(numeroComprobacion == numeroComprobador - i){

			return true;
		}
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

	//alert("Nyan "+divAfinador);


}










function actualizarAfinador() {



	

	//var listaNotas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];


	var buffer = new Float32Array( 1024 );
	analyser.getFloatTimeDomainData( buffer );
	var afinador = crearAfinador( buffer, audioContext.sampleRate );

	//alert(afinador);

	if (afinador != -1) {

		frecuencia = Math.round( afinador ) ;

		frecuenciaDetallada = afinador;

		nota =  sacarNotaPorFrecuencia( afinador.toFixed(4) );

		//console.log(afinador);
		//console.log(afinador+"|"+ afinador.toFixed(4));

		//nota = listaNotas[nota%12];

		//alert(this.sacarNotaPorFrecuencia( afinador ));


		/*

		// Nota: mirar que hace este codigo

		if (!window.requestAnimationFrame)
			window.requestAnimationFrame = window.webkitRequestAnimationFrame;
		rafID = window.requestAnimationFrame( actualizarAfinador );
		*/

		
	}else{
		frecuencia = 0;
		nota = "0";
	}



	//var afinador = new AfinadorCromatico();

	//afinador.setFrecuencia(frecuencia);
	//afinador.setNota(nota);


	//alert(divAfinador);

	document.getElementById(divAfinador).innerHTML = nota; //Esto hay que repararlo

	//console.log(nota +":"+frecuencia);

/*
	var afinador = new AfinadorCromatico();
	afinador.setNota(nota);
*/


	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = window.webkitRequestAnimationFrame;
	var rafID = window.requestAnimationFrame( actualizarAfinador );




	


}










