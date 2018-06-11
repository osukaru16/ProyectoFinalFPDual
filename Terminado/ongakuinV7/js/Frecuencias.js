


function Frecuencias(){


	this.base = 440; // 440Hz es la nota La o A
	this.cantidadNotas = 60; // la cantidad de notas original es el valor por 2. 

	

	this.arrayNotas = new Array("A","A#","B","C","C#","D","D#","E","F","F#","G","G#");
	
	this.arrayFecuencias = new Array();

	this.arrayNotaFrecuenciaTono = new Array();


}






Frecuencias.prototype.getArrayNotaFrecuenciaTono = function(){

	this.calculaFrecuencias();

	return this.arrayNotaFrecuenciaTono;

}




Frecuencias.prototype.calculaFrecuencias = function(){


	this.arrayFecuencias.push(this.base);
	for (var i = 1; i <= this.cantidadNotas; i++) {
		this.arrayFecuencias.push(this.calculoArriba(this.base, i).toFixed(3));
		this.arrayFecuencias.push(this.calculoAbajo(this.base, i).toFixed(3));
	}
	//var arrayPrueba = new Array(90,51,1,54,87,63,25,9,6,56,99,152,150,250,654,8,4,5);
	//Para ordenar de mayor a menor una Array .sort(function (a,b){return b-a;});
	//var resultado = arrayPrueba.sort(function (a,b){return b-a;});
	//alert(arrayFecuencias);
	var cuantaNotas = 0;
	var numeroTono = 9;
	/**
	*Cosas que hay que modificar si se modifica la variable cantidadNotas:
	*las variables cuantaNotas y numeroTono 
	*/
	var arrayOrdenada = this.arrayFecuencias.sort(function (a,b){return b-a;});
	for (var i = 0; i < this.arrayFecuencias.length; i++) {
			


		this.arrayNotaFrecuenciaTono[i] = new Array();
		this.arrayNotaFrecuenciaTono[i][0] = this.arrayNotas[cuantaNotas]; 
		this.arrayNotaFrecuenciaTono[i][1] = arrayOrdenada[i]; 
		this.arrayNotaFrecuenciaTono[i][2] = numeroTono;
			

		//document.getElementById("lista").innerHTML += i+"||  "+arrayOrdenada[i]+" Hz || Nota:"+arrayNotas[cuantaNotas]+"||"+numeroTono+"  <br />";
		if(this.arrayNotas[cuantaNotas] == "C"){
			numeroTono--;
		}
		if(cuantaNotas == 0 ){
			cuantaNotas = this.arrayNotas.length - 1;
		}else{
			cuantaNotas--;
		}
			
		
	}

}





Frecuencias.prototype.calculoArriba = function (base, posicion){
	return  base * Math.pow(2, (posicion/12));  //2 elevado a x/12
}

Frecuencias.prototype.calculoAbajo = function (base, posicion){
	return  base / Math.pow(2, (posicion/12));
}
