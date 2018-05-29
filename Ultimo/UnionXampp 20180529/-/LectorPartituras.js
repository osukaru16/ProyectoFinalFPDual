/*

Requiere usar jquery

*/




function LectorPartituras(idDiv){

	this.idDiv = idDiv;

	this.jsonObject = null;

	//this.comprobadorJquery();

	//this.seleccionadorPartituras();

}


LectorPartituras.prototype.comprobadorJquery = function(){

	if (jQuery) {
     	alert("Requiere usar jquery");
	} 

}


LectorPartituras.prototype.seleccionadorPartituras = function(){


	$.ajax({url:"json/musicasStringJson", success: function( jsonText ) {
	var newJsonString = jsonText.substring(1, jsonText.length -1);
	jsonObject = JSON.parse(newJsonString);
	console.log(jsonObject);
	this.creaSelect();
	}});


}



LectorPartituras.prototype.seleccionadorPartituras = function(){


	
}






LectorPartituras.prototype.creaSelect = function(){

	$(this.idDiv).html(this.creaSelectHtml());



		/*function(){

		var textHtml = "";
		var musicas = this.jsonObject.musicas;


		textHtml = "<select>";
		for (var i = 1; i < musicas.length; i++) {
			textHtml += "<option value="+i+">"+musicas[i].titulo+"</option>";
		}
		textHtml += "</select>";

		return textHtml;

	});
	*/

}



LectorPartituras.prototype.creaSelectHtml = function(){


		var textHtml = "";
		var musicas = this.jsonObject.musicas;


		textHtml = "<select>";
		for (var i = 1; i < musicas.length; i++) {
			textHtml += "<option value="+i+">"+musicas[i].titulo+"</option>";
		}
		textHtml += "</select>";

		return textHtml;

	


}
