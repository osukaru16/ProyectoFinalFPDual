/*

Requiere usar jquery

*/
/*
function () {

	if (jQuery) {
     	alert("Requiere usar jquery");
	} 
}

*/





var jsonObject = null;




function creaSelectorJson(idDiv){


	$.ajax({url:"json/musicasStringJson", success: function( jsonText ) {
	var newJsonString = jsonText.substring(1, jsonText.length -1);
	jsonObject = JSON.parse(newJsonString);
	creaSelect(idDiv);
	}});


}


/*
	Nota: creaSelect no usar fuera del js.

*/



function creaSelect(idDiv){

	$(idDiv).html(function(){

		var textHtml = "";
		var musicas = jsonObject.musicas;


		textHtml = "<select id='partituras'><option value='0'> Selecciona una partitura...</option>";
		for (var i = 1; i < musicas.length; i++) {
			textHtml += "<option value='"+i+"'>"+musicas[i].titulo+"</option>";
		}
		textHtml += "</select>";

		return textHtml;

	});

}


//_______________________

// apartir de aqui se gestiona la partitura seleccionada








var partitura = null;
var contadorPosicionNota = 0;
var partituraTerminada = false;
var divNota;

function partituraSelecionada(){

 	var numeroPartitura = document.getElementById('partituras').value;

 	if (numeroPartitura != 0) {

 		partitura = jsonObject.musicas[numeroPartitura];
 	}




}

/*

//alfinal esta funcion no se usa

function pintaTitulo(){
	partituraSelecionada();

	if (partitura != null) {

		$("#tituloPartitura").html("<h2>"+partitura.titulo+"</h2>");
	}

}
*/


function seleccionarDivNota(idDiv){

	divNota = idDiv;
}



function pintaNota(){
	partituraSelecionada();

	if (partitura != null) {

		var notaPartitura = partitura.partitura[contadorPosicionNota];
		
		if ( notaPartitura != undefined) {

			notaPartitura = cambioOctava(notaPartitura);

			$(divNota).html("<div id='notaActual'>"+notaPartitura+"</div>");

			coloreaNota("#notaActual");

		}else{
			partituraTerminada = true;
			$("#notaActual").html("FIN");
		}

	}


}


function pintaSiguienteNota(){

	contadorPosicionNota++;

	pintaNota();

}


function reiniciaPartitura(){

	contadorPosicionNota = 0;

	pintaNota();

}





function tocaNotaActual(){

	var notaActual = $("#notaActual").text();
	tocaNota(notaActual);

	//musicBox(partitura.partitura);


}









/*


["B", "A", "G", "F", "E", "D", "C"];



 ["#022486", "#402284", "#02948A", "#00A900", "#FFEE00", "#FF491A", "#F50417"];




*/




function coloreaNota(idDiv){


	var notaActual = $(idDiv).text();

	var notas = ["B", "A", "G", "F", "E", "D", "C"];

	var colorNotas = ["#022486", "#402284", "#02948A", "#00A900", "#FFEE00", "#FF491A", "#F50417"];


	for (var i = 0; i < notas.length; i++) {
		if (notaActual.charAt(0) == notas[i]) {
				$(idDiv).css("color", colorNotas[i]);
		}
	}




} 



var octavaPosicion = 0;

var divOctava;

function cambioOctava(notaTono){

	var tono;
	var nota;

	if (notaTono.length == 3) {
		nota = notaTono.charAt(0)+notaTono.charAt(1);
		tono = parseInt(notaTono.charAt(2));

	}else if(notaTono.length == 2) {
		nota = notaTono.charAt(0);
		tono = parseInt(notaTono.charAt(1));
	}

	var tonoOctava = tono + octavaPosicion

	return nota + tonoOctava;
}




function subeOctava(){

	octavaPosicion++;
	pintaNota();
	pintaOctava();
}


function bajaOctava(){

	octavaPosicion--;
	pintaNota();
	pintaOctava();
}

function reiniciaOctava(){

	octavaPosicion = 0;
	pintaNota();
	pintaOctava();
}


function pintaOctava(){

	$(divOctava).html("<div id='octavaActual'>"+octavaPosicion+"</div>");

}

function seleccionarDivOctava(idDiv){

	divOctava = idDiv;
	pintaOctava();
}
