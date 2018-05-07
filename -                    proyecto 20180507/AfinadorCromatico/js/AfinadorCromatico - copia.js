






function AfinadorCromatico(){

	window.AudioContext = window.AudioContext || window.webkitAudioContext;

	this.audioContext = null;
	//this.isPlaying = false;
	
	this.analyser = null;
	
	//this.mediaStreamSource = null;
	

	//this.pitchElem;
	//this.noteElem;


	//this.audioContext = new AudioContext();


	//this.analyser = this.audioContext.createAnalyser();


	//this.arrayNotas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];


	this.frecuencia;

	this.nota;

	this.test = "Neko1";




}


AfinadorCromatico.prototype.getFrecuencia = function(){

	return this.frecuencia;

}


AfinadorCromatico.prototype.getNota = function(){

	return this.nota;

}


AfinadorCromatico.prototype.error = function(){
	alert('Stream generation error.');

}




AfinadorCromatico.prototype.iniciarAfinador = function(){

	this.audioContext = new AudioContext();
	this.test = "Neko2";

	
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
        }, this.moverStream);

	
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


AfinadorCromatico.prototype.moverStream = function (stream){


	this.gotStream(stream);
	//return stream;

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


AfinadorCromatico.prototype.gotStream = function(stream) {

	//this.neko();
	//alert(stream);

	alert(this.test);

	//this.audioContext = new AudioContext();
   
    var mediaStreamSource = this.audioContext.createMediaStreamSource(stream);

    
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 2048;

    mediaStreamSource.connect( this.analyser );


    this.actualizarAfinador();


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
AfinadorCromatico.prototype.sacarNotaPorFrecuencia = function(frecuencia) {

	var noteNum = 12 * (Math.log( frecuencia / 440 )/Math.log(2) );
	return Math.round( noteNum ) + 69;

}









AfinadorCromatico.prototype.crearAfinador = function( buffer, sampleRate ) {

	var GOOD_ENOUGH_CORRELATION = 0.9; // this is the "bar" for how close a correlation needs to be
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






	if (rms<0.01) // not enough signal
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



















AfinadorCromatico.prototype.actualizarAfinador = function() {



	alert("neko");

	var listaNotas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];


	var buffer = new Float32Array( 1024 );
	this.analyser.getFloatTimeDomainData( buffer );
	var afinador = this.crearAfinador( buffer, this.audioContext.sampleRate );

	if (afinador != -1) {

		this.frecuencia = Math.round( afinador ) ;

		alert(afinador);

		var nota =  this.sacarNotaPorFrecuencia( afinador );

		this.nota = listaNotas[nota%12];

		//alert(this.sacarNotaPorFrecuencia( afinador ));


		/*

		// Nota: mirar que hace este codigo

		if (!window.requestAnimationFrame)
			window.requestAnimationFrame = window.webkitRequestAnimationFrame;
		rafID = window.requestAnimationFrame( updatePitch );
		*/

		
	}else{
		this.frecuencia = 0;
		this.nota = "0";
	}


}






