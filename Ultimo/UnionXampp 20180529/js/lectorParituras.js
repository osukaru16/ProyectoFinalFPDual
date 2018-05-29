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

		//$(idDiv).html("<h2>"+partitura.titulo+"</h2>");

		if (partitura.partitura[contadorPosicionNota] != undefined) {

			$(idDiv).html("<div id='notaActual'>"+partitura.partitura[contadorPosicionNota]+"</div>");

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




function tocaNotaActual(){

	var notaActual = $("#notaActual").text();
	tocaNota(notaActual);

	//musicBox(partitura.partitura);


}