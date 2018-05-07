






function AfinadorCromatico(){

	window.AudioContext = window.AudioContext || window.webkitAudioContext;
/*
	this.audioContext = null;
	
	
	this.analyser = null;
*/	


	//this.mediaStreamSource = null;
	

	//this.pitchElem;
	//this.noteElem;


	//this.audioContext = new AudioContext();


	//this.analyser = this.audioContext.createAnalyser();


	//this.arrayNotas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];


	this.frecuencia;

	this.nota;

	//this.test = "Neko1";




}

AfinadorCromatico.prototype.getFrecuenciaDetallada = function(){

	//return this.frecuencia;

	return frecuenciaDetallada;

}


AfinadorCromatico.prototype.getFrecuencia = function(){

	//return this.frecuencia;

	return frecuencia;

}


AfinadorCromatico.prototype.getNota = function(){

	//return this.nota;
	return nota;

}



AfinadorCromatico.prototype.setFrecuencia = function(frecuencia){

	this.frecuencia = frecuencia;

}


AfinadorCromatico.prototype.setNota = function(nota){

	this.nota = nota;

}




AfinadorCromatico.prototype.error = function(){
	alert('Stream generation error.');

}




AfinadorCromatico.prototype.iniciarAfinador = function(){

	this.audioContext = new AudioContext();
	//this.test = "Neko2";

	//alert(this.gotStream);


    this.getUserMedia(
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

	
//this.gotStream
/*

	   this.getUserMedia(
    	{
            "audio": true,
                "optional": []
            
        }, this.gotStream);
*/
	//alert(this.test);

}




AfinadorCromatico.prototype.getUserMedia = function(dictionary, callback) {
	//alert(this.test);
    try {
    	//this.test = "Neko3";
        navigator.getUserMedia = navigator.getUserMedia ||
        						 navigator.webkitGetUserMedia ||
        						 navigator.mediaDevices.getUserMedia;
        						 navigator.getUserMedia(dictionary, callback, this.error);

        //alert(this.test);


    } catch (e) {
    	//this.test = "Neko4";
        alert('getUserMedia threw exception :' + e);
    }
    //alert(this.test);
}









/*
	 Aqui sereinicia y pierden el valor declarado las variable y los metodos
	 por eso lo hare con funciones

*/






window.AudioContext = window.AudioContext || window.webkitAudioContext;

	var audioContext = null;
	
	
	var analyser = null;


	var frecuencia;

	var nota;

	var frecuenciaDetallada;





function iniciarStream(stream) {

	//this.neko();
	//alert(stream);

	//alert(this.test);

	audioContext = new AudioContext();
   
    var mediaStreamSource = this.audioContext.createMediaStreamSource(stream);

    
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;

    mediaStreamSource.connect( analyser );


    actualizarAfinador();


    //this.neko();

}

/*
AfinadorCromatico.prototype.neko = function() {

	alert("neko");

}
*/

/*
Nota: tengo que revisar esta formula que creo 
	  que el hecho de redondear hace que fallen las notas A0, C8 y creo que otras notas tambien fallan


Mirar para que son estas formula:
	Math.floor( 1200 * Math.log( frequency / frequencyFromNoteNumber( note ))/Math.log(2) );

	440 * Math.pow(2,(note-69)/12);

*/
function sacarNotaPorFrecuencia(frecuencia) {

	var listaNotas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
	var noteNum = 12 * (Math.log( frecuencia / 440 )/Math.log(2) );

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






	if (rms<0.01) // esdto es para evitar un poco de ruido
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



















function actualizarAfinador() {



	

	//var listaNotas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];


	var buffer = new Float32Array( 1024 );
	analyser.getFloatTimeDomainData( buffer );
	var afinador = crearAfinador( buffer, audioContext.sampleRate );

	//alert(afinador);

	if (afinador != -1) {

		frecuencia = Math.round( afinador ) ;

		frecuenciaDetallada = afinador;

		nota =  sacarNotaPorFrecuencia( afinador );

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






	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = window.webkitRequestAnimationFrame;
	var rafID = window.requestAnimationFrame( actualizarAfinador );


	


}






