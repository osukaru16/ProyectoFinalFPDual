/*

Requiere usar jquery

*/
function () {

	if (jQuery) {
     	alert("Requiere usar jquery");
	} 
}



function seleccionadorPartituras(){
	
}


var jsonObject = null;

function selectorJson(idDiv){


	$.ajax({url:"json/musicasStringJson", success: function( jsonText ) {
	var newJsonString = jsonText.substring(1, jsonText.length -1);
	jsonObject = JSON.parse(newJsonString);
	creaSelect(idDiv);
	}});




}



function creaSelect(idDiv){

	$(idDiv).html(function(){

		var textHtml = "";
		var musicas = jsonObject.musicas;


		textHtml = "<select>";
		for (var i = 1; i < musicas.length; i++) {
			textHtml += "<option value="+i+">"+musicas[i].titulo+"</option>";
		}
		textHtml += "</select>";

		return textHtml;

	});


}