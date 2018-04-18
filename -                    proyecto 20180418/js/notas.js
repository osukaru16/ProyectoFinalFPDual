/*
Nota: Esta clase se a hace pensando el heptagrama las nota y posiciones se crearan en referencia. 


*/




function Notas(canvas, nota){

	//this.linea = 0;

	this.numero = 4;

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

	var numeroNota = this.canvas.text(numero).move(posicionX, posicionNotas[linea]-30).font({ fill: colorTexto, family: 'Inconsolata', size: 30})

	return numeroNota;

}

Notas.prototype.comprobadorNumero = function(){

	var numero = this.numero;

	var linea = this.notaLinea(notaLetra);

	var datos = this.comprobadorNumeroDatos();

	if ((numero >= datos[linea].min)&&(numero <= datos[linea].max)) {


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

	 return coloresTexto;

}




//animacion


Notas.prototype.animarNota = function(){

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











