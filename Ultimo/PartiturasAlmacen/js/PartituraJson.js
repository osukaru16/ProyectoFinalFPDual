

function PartituraJson(jsonRawString){


	this.jsonRawString = jsonRawString;

	this.jsonRaw;

	this.partitura = [];


	this.arrayObjectNotas;

	this.titulo;



	//rawJson.tracks[1].notes




}


PartituraJson.prototype.getTitulo = function(){

	this.buscaTitulo();

	return this.titulo;

}


PartituraJson.prototype.getPartitura = function(){

	this.buscaPartitura();

	return this.partitura;

}

PartituraJson.prototype.getJsonRaw = function(){

	return this.jsonRaw;

}




PartituraJson.prototype.jsonParse = function(){

	this.jsonRaw = JSON.parse( this.jsonRawString );

	//return this.jsonRaw;

}






PartituraJson.prototype.arrayNotas = function(){
	this.jsonParse();
	if (this.jsonRaw.tracks[0].notes.length == 0) {
		this.arrayObjectNotas = this.jsonRaw.tracks[1].notes;
	}else{
		this.arrayObjectNotas = this.jsonRaw.tracks[0].notes;
	}


}

PartituraJson.prototype.buscaTitulo = function(){

	this.titulo = this.jsonRaw.tracks[0].name;

}






PartituraJson.prototype.buscaPartitura = function(){

	this.arrayNotas();

	//rawJson.tracks[1].notes
	//rawJson.tracks[1].notes[0].name

	//var tracks = this.jsonRaw.tracks;

	//alert(this.arrayObjectNotas[0].name)

	for (var i = 0; i < this.arrayObjectNotas.length; i++){

		this.partitura.push(this.arrayObjectNotas[i].name);

	}

	//return this.partitura;


}