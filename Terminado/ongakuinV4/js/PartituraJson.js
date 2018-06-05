

function PartituraJson(jsonRawString, nombreArchivo){


	this.jsonRawString = jsonRawString;

	this.jsonRaw;

	this.partitura = [];


	this.arrayObjectNotas;

	this.titulo;

	this.nuevoStringJson;

	this.nombreArchivo = nombreArchivo;





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



PartituraJson.prototype.getNuevoStringJson = function(){

	this.creaNuevoStringJson();

	return this.nuevoStringJson;

}





PartituraJson.prototype.jsonParse = function(){

	this.jsonRaw = JSON.parse( this.jsonRawString );

	

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

	if (this.titulo == undefined) {
		this.titulo = "";
	}

}






PartituraJson.prototype.buscaPartitura = function(){

	this.arrayNotas();

	

	for (var i = 0; i < this.arrayObjectNotas.length; i++){

		this.partitura.push(this.arrayObjectNotas[i].name);

	}

	

}



PartituraJson.prototype.creaNuevoStringJson = function(){

	this.nuevoStringJson = ", {\"titulo\":\""+this.nombreArchivo+"("+this.getTitulo()+")\", "+"\"partitura\":"+JSON.stringify(this.getPartitura())+"}";


}

