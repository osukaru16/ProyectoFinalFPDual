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





//var partituras = document.getElementById('partituras');
/*
select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
  });
*/


/*
	Posiblemente esta parte la pase a pintaPartitura.js



*/



var partitura = null;
var contadorPosicionNota = 0;
var partituraTerminada = false;

function partituraSelecionada(){

 	var numeroPartitura = document.getElementById('partituras').value;

 	if (numeroPartitura != 0) {

 		partitura = jsonObject.musicas[numeroPartitura];
 	}


 	//console.log(numeroPartitura);


}


function pintaTitulo(idDiv){
	partituraSelecionada();

	if (partitura != null) {

		$(idDiv).html("<h2>"+partitura.titulo+"</h2>");
	}

}



function pintaNota(idDiv){
	partituraSelecionada();

	if (partitura != null) {

		var notaPartitura = partitura.partitura[contadorPosicionNota];
		//$(idDiv).html("<h2>"+partitura.titulo+"</h2>");

		if ( notaPartitura != undefined) {

			notaPartitura = cambioOctava(notaPartitura);

			$(idDiv).html("<div id='notaActual'>"+notaPartitura+"</div>");

			coloreaNota();

			//console.log(partitura.titulo[contadorPosicionNota]);
		}else{
			partituraTerminada = true;
		}

	}
	//console.log(partitura);

}


function pintaSiguienteNota(idDiv){

	contadorPosicionNota++;

	pintaNota(idDiv);

}


function reiniciaPartitura(idDiv){

	contadorPosicionNota = 0;

	pintaNota(idDiv);

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




function coloreaNota(){


	var notaActual = $("#notaActual").text();

	var notas = ["B", "A", "G", "F", "E", "D", "C"];

	var colorNotas = ["#022486", "#402284", "#02948A", "#00A900", "#FFEE00", "#FF491A", "#F50417"];


	for (var i = 0; i < notas.length; i++) {
		if (notaActual.charAt(0) == notas[i]) {
				$("#notaActual").css("color", colorNotas[i]);
		}
	}




} 



var octavaPosicion = 0;

var divOctava;

function cambioOctava(notaTono){

	var tono;

	if (notaTono.length == 3) {

		tono = notaTono.charAt(2);

	}else if(notaTono.length == 2) {

		tono = notaTono.charAt(1);
	}

	return tono + octavaPosicion;
}




function subeOctava(){

	octavaPosicion++;
	cambioOctava($("#notaActual").text());
	pintaOctava();
}


function bajaOctava(){

	octavaPosicion--;
	pintaOctava();
}

function reiniciaOctava(){

	octavaPosicion = 0;
	pintaOctava();
}


function pintaOctava(){

	$(divOctava).html("<div id='octavaActual'>"+notaPartitura+"</div>");

}

function seleccionarDivOctava(idDiv){

	divOctava = idDiv;
}
