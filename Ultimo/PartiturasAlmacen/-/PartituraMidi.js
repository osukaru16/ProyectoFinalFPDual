







function PartituraMidi(event){

	this.event = event;

	this.files = event.target.files;

	this.reader;

	this.titulo;

	this.file;

	this.partituraJSON;

	this.entrar = false;

	this.worker = new Worker("workerFileReader.js");


	this.worker.addEventListener("message");




	

}





PartituraMidi.prototype.buscaTitulo = function(){
	

	if (this.files.length > 0){
		this.file = this.files[0];

		this.titulo = this.file.name;
		this.generaJSON();



		this.worker.postMessage(this.file);



	}





}

PartituraMidi.prototype.getTitulo = function(){

	this.buscaTitulo();
	
	return this.titulo;
}


PartituraMidi.prototype.getPartituraJSON = function(){


		return this.partituraJSON;

}

PartituraMidi.prototype.setPartituraJSON = function(jsonPartitura){
	this.partituraJSON = jsonPartitura;

}


PartituraMidi.prototype.generaJSON = function(){
	/*
	//this.buscaTitulo();
	var reader = new FileReader();
	reader.onload = function(e){
				
		var partsData = MidiConvert.parse(e.target.result);
		//document.querySelector("#ResultsText").value = JSON.stringify(partsData, undefined, 2);


		this.partituraJSON = JSON.stringify(partsData, undefined, 2);


				//alert(JSON.stringify(partsData, undefined, 2));


	};

	reader.readAsBinaryString(this.file);
	*/

	//jsonMidi(this.file);

	//this.partituraJSON = jsonMidi(this.file);


//readyState
	
		//this.reader = new FileReader();



		//this.partituraJSON = JSON.stringify(MidiConvert.parse(this.reader.result), undefined, 2);

		//alert(this.reader)
		
	

	//if (!this.entrar) {
		//this.reader.readAsBinaryString(this.file);
		//this.entrar = true;
	//}

	//if(this.reader.readyState != 2){
		//setTimeout(this.jsonMidi.bind(this), 1000);


		//setTimeout(this.reader.readAsBinaryString(this.file));

		//this.partituraJSON = JSON.stringify(MidiConvert.parse(this.reader.result), undefined, 2);
	//}
	//window.setTimeout(PartituraMidi, 1000);
	//PartituraMidi
	//window.setTimeout(ReadFile, 1000); //Una linea muy importante
	/*var that = this;
 		setTimeout(function () {
     	that.doStuff();
 		}, 4000);*/

 	//setTimeout(this.doStuff.bind(this), 4000);
/*
	var that = this;
	this.reader.onload = function(e){

		while(that.reader.readyState != 2){

			alert(that.reader.readyState);

		}

		//setTimeout(that.jsonMidi.bind(that),1000);

		that.partituraJSON = JSON.stringify(MidiConvert.parse(e.target.result), undefined, 2);


	}
	this.reader.readAsBinaryString(this.file);
	
*/

	//this.reader.readAsBinaryString(this.file);

	//this.partituraJSON = JSON.stringify(MidiConvert.parse(this.reader.result), undefined, 2);
	


}





PartituraMidi.prototype.jsonMidi = function(){


	//if(this.reader.readyState == 2){
		//this.partituraJSON = JSON.stringify(MidiConvert.parse(this.reader.result), undefined, 2);
	//}
	//this.buscaTitulo();
	//var jsmidi;
	//var comprobador = false;
	//var reader = new FileReader();

	//var prueba = reader.readyState;

	//var prueba2 = reader.readAsBinaryString(file);

	//var partsData;

	/*
		reader.onload = function(e){


					
			partsData = MidiConvert.parse(e.target.result);
			//document.querySelector("#ResultsText").value = JSON.stringify(partsData, undefined, 2);


			


					//alert(JSON.stringify(partsData, undefined, 2));
					//alert(prueba);
			//comprobador = true;
		};

	*/

 

	
	//reader.readAsBinaryString(file);


	
	//this.partituraJSON = JSON.stringify(MidiConvert.parse(reader.result), undefined, 2);


}





