
//cancionJson = null;
nombreArchivo = "";

if (!(window.File && window.FileReader && window.FileList && window.Blob)) {


	alert("Tu navegador no soporta la lectura de de archivos");

} else {






	function cogerMidi(evento, resultado){
				//coge rl archivo
		var files = evento.target.files;
		if (files.length > 0){
			var file = files[0];
			nombreArchivo = file.name;
			parseFile(file, resultado);
		}
	}
}



function parseFile(file, resultado){
	//lee el archivo
	var reader = new FileReader();
	
	reader.onload = function(e){
				
		var partsData = MidiConvert.parse(e.target.result);
				
		document.querySelector(resultado).value = JSON.stringify(partsData, undefined, 2);

	};
	reader.readAsBinaryString(file);

	
}

