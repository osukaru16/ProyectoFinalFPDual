/*

Nota: esta Biblioteca depende de la clase Frecuencias.js


*/






var peine = 0;
//var frecuencias;
var osc = null;
var audioContext





function musicBox(partitura){

	//frecuencias = new Frecuencias();

	playNote(extraerFrecuencia(partitura[peine]));

		
	document.getElementById("notaSonando").innerText = partitura[peine]+"||"+extraerFrecuencia(partitura[peine]);
	peine++;

}


function reiniciar(){
	peine = 0;
}



function iniciarAudioContext(){
	if (audioContext =! null) {
		audioContext = new AudioContext();
	}
}


function extraerFrecuencia(notaTono){

	var frecuencias = new Frecuencias();

	var nota;
	var tono;

	var arrayNotaFrecuenciaTono = frecuencias.getArrayNotaFrecuenciaTono();

	if (notaTono.length == 3) {
		nota = notaTono.charAt(0)+notaTono.charAt(1);
		tono = notaTono.charAt(2);
	}else if(notaTono.length == 2) {
		nota = notaTono.charAt(0);
		tono = notaTono.charAt(1);
	}

	for (var i = 0; i < arrayNotaFrecuenciaTono.length; i++) {
		if((arrayNotaFrecuenciaTono[i][0] == nota)&&(arrayNotaFrecuenciaTono[i][2] == tono)){
			//console.log(arrayNotaFrecuenciaTono[i][0]+"|"+arrayNotaFrecuenciaTono[i][2]);
			return arrayNotaFrecuenciaTono[i][1];
		}
	}

}


window.playNote = function playNote(freq){
	//iniciarAudioContext();
	stopNote();
	osc = audioContext.createOscillator();
	osc.connect(audioContext.destination);
	osc.frequency.value = freq;
	osc.start(0);
};


window.stopNote = function stopNote(){
	if(osc) {
		osc.stop();
		osc.disconnect();
		osc = null;
	}
};





function tocaNota(nota){


	//frecuencias = new Frecuencias();

	var frecuencia = extraerFrecuencia(nota);

	if (Number.isInteger(Math.trunc(frecuencia))) {

		playNote(frecuencia);
	}else{
		stopNote();
	}
}
