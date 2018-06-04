


	window.onload = function(){
		
		document.getElementById("musicBox").disabled = true;
		document.getElementById("stopNote").disabled = true;
		document.getElementById("reiniciar").disabled = true;
		document.getElementById("subirPartitura").disabled = true;
	}

		


	document.querySelector("#midiNuevo").addEventListener("change", function(e){

		cogerMidi(e, "#ResultsText");

		
	});

	var partitura;
	var nuevaPartitura;

	function crearPartituraJson(){

		var archvoJsonRaw = document.querySelector("#ResultsText").value;

		var partituraJson = new PartituraJson(archvoJsonRaw, nombreArchivo);

		

		partitura = partituraJson.getPartitura();

		var titulo = partituraJson.getTitulo();
		

		document.getElementById("musicBox").disabled = false;
		document.getElementById("stopNote").disabled = false;
		document.getElementById("reiniciar").disabled = false;
		document.getElementById("subirPartitura").disabled = false;



		document.querySelector("#ResultsText2").value = partituraJson.getNuevoStringJson();

		iniciarAudioContext();
		


		nuevaPartitura = partituraJson.getNuevoStringJson()




	}



function subirPartituraJson(){
	$.post( "escribirJSON.php", { partitura: nuevaPartitura.trim()});
	alert("Hecho");

}

