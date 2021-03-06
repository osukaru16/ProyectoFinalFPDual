/*
Nota: Esta clase se a hace pensando el heptagrama las nota y posiciones se crearan en referencia. 


*/




function Notas(canvas, nota, numero){

	//this.linea = 0;

	this.numero = numero;

	this.nota = nota;

	this.tempo = 3000;

	this.canvas = canvas;

	this.linea = 0;

}


//sets


Notas.prototype.setCanvas = function(canvas){

	this.canvas = canvas; 

}

Notas.prototype.setTempo = function(tempo){
	this.tempo = tempo;

}

Notas.prototype.setNota = function(nota){
	this.nota = nota;

}

Notas.prototype.setNumero = function(numero){
	this.numero = numero;

}


//pintar notas


Notas.prototype.pintaNota = function(){

	var notaLetra = this.nota; 

	var linea = this.notaLinea(notaLetra);

	var posicionX = this.notasPosicionX(linea);

	var posicionY = this.notasPosicionY(linea);

	var colorNota = this.notasColor(linea)

	var nota = this.canvas.circle(30).attr({ cx: posicionX, cy: posicionY }).fill(colorNota);

	return nota;

}







Notas.prototype.notaLinea = function(notaLetra){

	if ((notaLetra == "b")||(notaLetra == "B")) {
		return 1;
	}
	else if ((notaLetra == "a")||(notaLetra == "A")) {
		return 2;
	}
	else if ((notaLetra == "g")||(notaLetra == "G")) {
		return 3;
	}
	else if ((notaLetra == "f")||(notaLetra == "F")) {
		return 4;
	}
	else if ((notaLetra == "e")||(notaLetra == "E")) {
		return 5;
	}
	else if ((notaLetra == "d")||(notaLetra == "D")) {
		return 6;
	}
	else if ((notaLetra == "c")||(notaLetra == "C")) {
		return 7;
	}
	else {
		return null;
	}

}

Notas.prototype.notasColor = function(linea){

	linea--;

	var coloresNota = ["#022486", "#402284", "#02948A", "#00A900", "#FFEE00", "#FF491A", "#F50417"];

	return coloresNota[linea];


}




Notas.prototype.notasPosicionX = function(linea){

	linea--;

	var posicionesX = [788, 788, 788, 788, 788, 788, 788];

	return posicionesX[linea];


}

Notas.prototype.notasPosicionY = function(linea){
	linea--;

	var posicionesY = [50, 100, 150, 200, 250, 300, 350];

	return posicionesY[linea];

}


// //pintar numeros


Notas.prototype.pintaNumero = function(){

	var numero = this.comprobadorNumero();

	var linea = this.notaLinea(this.nota);


	var posicionX = this.numeroPosicionX(linea);

	var posicionY = this.numeroPosicionY(linea);

	var colorTexto = this.textoColor(linea);

	var numeroNota = this.canvas.text(numero).move(posicionX, posicionY).font({ fill: colorTexto, family: 'Inconsolata', size: 35})


	return numeroNota;

}



Notas.prototype.numeroPosicionX = function(linea){

	linea--;

	var posicionNumerosX = [780, 780, 780, 780, 780, 780, 780];

	return posicionNumerosX[linea];

}

Notas.prototype.numeroPosicionY = function(linea){

	linea--;

	var posicionNumerosY = [10, 60, 110, 160, 210, 260, 310];

	//[24, 74, 124, 174, 224, 274, 324];

	return posicionNumerosY[linea];

}





Notas.prototype.comprobadorNumero = function(){

	var numero = this.numero;

	var linea = this.notaLinea(this.nota);

	var datos = this.comprobadorNumeroDatos();

	if ((numero >= datos[linea].min)&&(numero <= datos[linea].max)) {

		return ""+numero;

	}
	else if(numero < datos[linea].min){

		return ""+datos[linea].min;

	}
	else if(numero > datos[linea].max){

		return ""+datos[linea].max;

	}


}










Notas.prototype.comprobadorNumeroDatos = function(){

	var rangoNotasLineas = {
		1:{min:0, max:7},
		2:{min:0, max:7},
		3:{min:1, max:7},
		4:{min:1, max:7},			
		5:{min:1, max:7},
		6:{min:1, max:7},
		7:{min:1, max:8}};

	return rangoNotasLineas;


/*
Nota: Mirar si hay que usar un array 2D o mejor usar objetos

*/



}


Notas.prototype.textoColor = function(linea){

	linea--;

	 var coloresTexto = ["#b30000", "#b30000", "#b30000", "#ffffff", "#022486", "#022486", "#022486"];

	 return coloresTexto[linea];

}



// Aqui sienen los semitos





Notas.prototype.comprobadorSemitono = function(){

	var rangoNotasLineas = {
		1:{sontenido:false, bemol:true},
		2:{sontenido:true, bemol:true},
		3:{sontenido:true, bemol:true},
		4:{sontenido:true, bemol:false},			
		5:{sontenido:false, bemol:true},
		6:{sontenido:true, bemol:true},
		7:{sontenido:true, bemol:false}};

	return rangoNotasLineas;


/*
Nota: Mirar si hay que usar un array 2D o mejor usar objetos

*/



}









//animacion


Notas.prototype.animaNota = function(){

	var linea = this.notaLinea(this.nota) 

	var nota = this.pintaNota();

	var posicionX = this.posicionAnimacionXNotas(linea);

	var posicionY = this.posicionAnimacionYNotas(linea);

	nota.animate(this.tempo).move( posicionX, posicionY );



}




Notas.prototype.posicionAnimacionXNotas = function(linea){

	linea--;

	var posicionesX = [85, 85, 85, 85, 85, 85, 85];

	return posicionesX[linea];


}



Notas.prototype.posicionAnimacionYNotas = function(linea){

	linea--;

	var posicionesY = [35, 85, 135, 185, 235, 285, 335];

	return posicionesY[linea];
}



Notas.prototype.animaNumero = function(){

	var linea = this.notaLinea(this.nota) 

	var nota = this.pintaNumero();

	var posicionX = this.posicionAnimacionXNumeros(linea);

	var posicionY = this.posicionAnimacionYNumeros(linea);

	nota.animate(this.tempo).move( posicionX, posicionY );



}




Notas.prototype.posicionAnimacionXNumeros = function(linea){

	linea--;

	var posicionesX = [92, 92, 92, 92, 92, 92, 92];

	return posicionesX[linea];


}



Notas.prototype.posicionAnimacionYNumeros = function(linea){

	linea--;

	var posicionesY = [17, 67, 117, 167, 217, 267, 317];

	return posicionesY[linea];
}





Notas.prototype.animaTodo = function(){


	this.animaNota();
	this.animaNumero();


}




