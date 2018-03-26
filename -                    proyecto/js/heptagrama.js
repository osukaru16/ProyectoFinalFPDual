

//creacion del SVG y haciendo referencia al div heptagrama

var canvas = SVG('heptagrama').size('100%', '100%').viewbox(0,0,800,1000);

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

function pintaHeptagrama(canvas){

	var notasArray = ["B", "A", "G", "F", "E", "D", "C"];
	var colorLetras = ["#022486", "#402284", "#02948A", "#00A900", "#FFEE00", "#FF491A", "#F50417"];

	canvas.line(10, 10, 10, 380);
	canvas.line(70, 10, 70, 380);


	canvas.line(10, 12, 70, 12);
	canvas.line(10, 378, 70, 378);



	var posicionesY = 50;
	var posucionLetrasY = 30;

	for (var i = 0; i < 7; i++) {

		canvas.line(70, posicionesY, 1000, posicionesY);
		canvas.circle(30).attr({ cx: 100, cy: posicionesY }).fill('#bfbfbf');
		canvas.circle(5).attr({ cx: 100, cy: posicionesY }).fill('#ffffff');
		canvas.text(notasArray[i]).move(30, posucionLetrasY).fill('#bfbfbf').font({ fill: colorLetras[i], family: 'Inconsolata' });

		posucionLetrasY += 50;
		posicionesY += 50;
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