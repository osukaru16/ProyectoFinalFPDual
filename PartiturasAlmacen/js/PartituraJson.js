

function PartituraJson(jsonRawString){


	this.jsonRawString = jsonRawString;

	this.jsonRaw;

	this.partitura = [];


	this.arrayObjectNotas;



	//rawJson.tracks[1].notes




}


/*
PartituraJson.prototype.getJsonRaw = function(){

	return this.jsonRaw;

}*/

PartituraJson.prototype.getJsonRaw = function(){

	return this.jsonRaw;

}




PartituraJson.prototype.jsonParse = function(){

	this.jsonRaw = JSON.parse( this.jsonRawString );

	//return this.jsonRaw;

}






PartituraJson.prototype.arrayNotas = function(){
	this.jsonParse();

	this.arrayObjectNotas = this.jsonRaw.tracks[1].notes;


}


PartituraJson.prototype.creaPartitura = function(){

	this.arrayNotas();

	//rawJson.tracks[1].notes
	//rawJson.tracks[1].notes[0].name

	//var tracks = this.jsonRaw.tracks;

	//alert(this.arrayObjectNotas[0].name)

	for (var i = 0; i < this.arrayObjectNotas.length; i++){

		this.partitura.push(this.arrayObjectNotas[i].name);

	}

	return this.partitura;


}