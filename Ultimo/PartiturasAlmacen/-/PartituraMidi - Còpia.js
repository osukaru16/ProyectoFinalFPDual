







function PartituraMidi(e){

	this.files = e.target.files;

	this.titulo;

	this.file;

	this.partituraJSON;


}





PartituraMidi.prototype.buscaTitulo = function(){
	

	if (this.files.length > 0){
		this.file = this.files[0];
		this.titulo = this.file.name;
	}



}

PartituraMidi.prototype.getTitulo = function(){
	this.buscaTitulo();
	return this.titulo;
}


PartituraMidi.prototype.getPartituraJSON = function(){
	this.generaJSON();
	return this.partituraJSON

}


PartituraMidi.prototype.generaJSON = function(){
	//this.buscaTitulo();
	var reader = new FileReader();
	reader.onload = function(e){
				
		var partsData = MidiConvert.parse(e.target.result);
		//document.querySelector("#ResultsText").value = JSON.stringify(partsData, undefined, 2);


		this.partituraJSON = JSON.stringify(partsData, undefined, 2);


				//alert(JSON.stringify(partsData, undefined, 2));


	};

	reader.readAsBinaryString(this.file);

}






