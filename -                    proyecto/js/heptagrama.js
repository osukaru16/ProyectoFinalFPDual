

//creacion del SVG y haciendo referencia al div heptagrama

var canvas = SVG('heptagrama').size('100%', '100%').viewbox(0,0,800,1000);

//var listaNotasCreadas = [];

/*

	Nota: he comprobado que stroke-width:10; en muy grande usando el SVG.js
	y lo paso a stroke-width:5; 

	Nota: defenitiva mente las dimension son diferente al prototipo seguramente es por usar 
	el SVG.js


*/




// poniendo las lineas del heptagrama
//<line x1="100" y1="50" x2="100%" y2="50" />
// canvas.line(x1, y1, x2, y2);
//<text x="30" y="50">B#4</text>

pintaHeptagrama(canvas);
dibujaNota(canvas, 1, "4", true);
dibujaNota(canvas, 2, "4", true);
dibujaNota(canvas, 3, "4", true);
dibujaNota(canvas, 4, "4", true);
dibujaNota(canvas, 5, "4", true);
dibujaNota(canvas, 6, "4", true);
dibujaNota(canvas, 7, "4", true);



/*
canvas.circle(30).attr({ cx: 198, cy: 50 }).fill("#022486");
canvas.text("4").move(190, 33).font({ fill: "#ffffff", family: 'Inconsolata'});
//canvas.circle(5).attr({ cx: 198, cy: 50 }).fill("#b3b300");
*/




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


	

	/*
		rect.attr({ x: 20, y: 60 })
		circle.attr({ cx: 50, cy: 40 })

	*/

/*
	<circle cx="550" cy="50" r="20" fill="#022486" /><!-- nota B (si) y = 30 color azul-->
<circle cx="550" cy="50" r="5" fill="#FFFFFF" />
*/


}








function dibujaNota(canvas, linea, numero, semitono){
	//linea = linea -1 ;
	linea--;
	var posucionX = 780; 
	var colorNota = colorNotas(linea);
	var posicionNotas = [50, 100, 150, 200, 250, 300, 350];

	//var listaNotas = {b:0, B:0, a:1, A:1, c:6, C:6, d:5, D:5, e:4, E:4, f:3, F:3, g:2, G:2 }

	canvas.circle(30).attr({ cx: posucionX+8, cy: posicionNotas[linea] }).fill(colorNota);
	canvas.text(numero).move(posucionX, posicionNotas[linea]-22).font({ fill: "#ffffff", family: 'Inconsolata', size: 30});

	if(semitono){
		canvas.text("#/b").move(posucionX, posicionNotas[linea]-25).font({ fill: "#ffffff", family: 'Inconsolata', size: 10});
	}




/*
canvas.circle(30).attr({ cx: 198, cy: 50 }).fill("#022486");
canvas.text("4").move(190, 33).font({ fill: "#ffffff", family: 'Inconsolata'});
//canvas.circle(5).attr({ cx: 198, cy: 50 }).fill("#b3b300");
*/



}







function colorNotas(linea){

	var coloresNota = ["#022486", "#402284", "#02948A", "#00A900", "#FFEE00", "#FF491A", "#F50417"];
	return coloresNota[linea];

}








function moverNotas(){


}