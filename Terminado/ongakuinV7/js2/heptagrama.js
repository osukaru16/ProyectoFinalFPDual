


/*

// version antigua

function pintaHeptagrama(canvas){

	var notasArray = ["B", "A", "G", "F", "E", "D", "C"];
	var colorLetras = ["#022486", "#402284", "#02948A", "#00A900", "#FFEE00", "#FF491A", "#F50417"];
	var posicionNotas = [50, 100, 150, 200, 250, 300, 350];

	canvas.line(10, 10, 10, 380);
	canvas.line(70, 10, 70, 380);


	canvas.line(10, 12, 70, 12);
	canvas.line(10, 378, 70, 378);



	//var posicionesY = 50;
	var posicionLetrasY = 30;

	for (var i = 0; i < 7; i++) {

		var posicionesY = posicionNotas[i];

		canvas.line(70, posicionesY, 1000, posicionesY);
		canvas.circle(30).attr({ cx: 100, cy: posicionesY }).fill('#bfbfbf').stroke("white");
		//canvas.circle(5).attr({ cx: 100, cy: posicionesY }).fill('#ffffff');
		canvas.text(notasArray[i]).move(30, posicionLetrasY).font({ fill: colorLetras[i], family: 'Inconsolata', size: 30 });

		posicionLetrasY += 50;
		//posicionesY += 50;
	}

}
*/





function Heptagrama(canvas){


	this.canvas = canvas;
	this.notasArray = ["B", "A", "G", "F", "E", "D", "C"];
	this.posicionY = [50, 100, 150, 200, 250, 300, 350];
	

}



Heptagrama.prototype.pintaHeptagrama = function(){

	this.pintaLineas();

	this.pintaCirculos();

	this.pintaNotas();

	


}

Heptagrama.prototype.pintaCirculos = function(){

	var posicionX = 100;
	var tamanyo = 30;


	for (var i = 0; i < this.notasArray.length; i++) {
		this.canvas.circle(tamanyo).attr({ cx: posicionX, cy: this.posicionY[i] }).fill('#bfbfbf').stroke("white");
	}

}


Heptagrama.prototype.pintaLineas = function(){

	var posicionXInicio = 70;
	var posicionXFin = 1000;

	


	this.canvas.line(10, 10, 10, 380);
	this.canvas.line(70, 10, 70, 380);


	this.canvas.line(10, 12, 70, 12);
	this.canvas.line(10, 378, 70, 378);




	for (var i = 0; i < this.notasArray.length; i++) {
		this.canvas.line(posicionXInicio, this.posicionY[i], posicionXFin, this.posicionY[i]);
	}

}





Heptagrama.prototype.pintaNotas = function(){

	var posicionX = 30;

	var posicionY = [30, 80, 130, 180, 230, 280, 330];

	var color = ["#022486", "#402284", "#02948A", "#00A900", "#FFEE00", "#FF491A", "#F50417"];


	for (var i = 0; i < this.notasArray.length; i++) {

		this.canvas.text(this.notasArray[i]).move(posicionX, posicionY[i]).font({ fill: color[i], family: 'Inconsolata', size: 30 });

	}

}





