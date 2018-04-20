

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


var notaB = new Notas(canvas,"D", 4, "#");


notaB.pintaNota();
//notaB.pintaNumero();
notaB.pintaSemitono();




/*
var notaB = new Notas(canvas,"B", 4);
var notaA = new Notas(canvas,"A", 4);
var notaG = new Notas(canvas,"G", 4);
var notaF = new Notas(canvas,"F", 4);
var notaE = new Notas(canvas,"E", 4);
var notaD = new Notas(canvas,"D", 4);
var notaC = new Notas(canvas,"C", 4);


//for (var i = 0; i < 1000; i++) {
	notaB.animaTodo();
	notaA.animaTodo();
	notaG.animaTodo();
	notaF.animaTodo();
	notaE.animaTodo();
	notaD.animaTodo();
	notaC.animaTodo();
//}

*/


//nota.animaNota();

//nota.pintaNota();
//nota.setNota("C");

/*
for (var i = 0; i < 1000; i++) {
nota.animaTodo();

nota.setNota("A");

nota.animaTodo();

nota.setNota("G");

nota.animaTodo();

nota.setNota("F");

nota.animaTodo();

nota.setNota("E");

nota.animaTodo();

nota.setNota("D");

nota.animaTodo();

nota.setNota("C");

nota.animaTodo();

nota.setNota("B");

}*/

//nota.animarNota();




/*
var b = dibujaNota(canvas, 1, "4", false);
alert(b);*/

/*
for (var i = 0; i < 1000; i++) {
	linea = pruebasRandomLinea();
	dibujaNota(canvas, linea, pruebasRandomNumero(linea), pruebasRandomSmitono());
}
*/

/*
dibujaNota(canvas, 1, "4", true);
dibujaNota(canvas, 2, "4", true);
dibujaNota(canvas, 3, "4", true);
dibujaNota(canvas, 4, "4", true);
dibujaNota(canvas, 5, "4", true);
dibujaNota(canvas, 6, "4", true);
dibujaNota(canvas, 7, "4", true);
*/


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

	//var tempo = 3000/linea;  // Nota: Para un tempo lento requiere un numero grande recomendable comenzar por 3000


	//linea = linea -1 ;
	linea--;
	var posicionX = 780; 
	var colorNota = colorNotas(linea);
	var colorTexto = colorNumeros(linea);
	var posicionNotas = [50, 100, 150, 200, 250, 300, 350];

	//var listaNotas = {b:0, B:0, a:1, A:1, c:6, C:6, d:5, D:5, e:4, E:4, f:3, F:3, g:2, G:2 }


	var tempo = 3000;  
	// Nota: Para un tempo lento requiere un numero grande recomendable comenzar por 3000, 
	// y creo que la distancia a recorrer importa




	var posicionesYAnimacionCircle = [35, 85, 135, 185, 235, 285, 335]

	var posicionesXAnimacionCircle = [85, 85, 85, 85, 85, 85, 85]


	var posicionesYAnimacionTexto = [22, 72, 122, 172, 222, 272, 322]

	var posicionesXAnimacionTexto = [92, 92, 92, 92, 92, 92, 92]


	var posicionesYAnimacionSemitono = [20, 70, 120, 170, 220, 270, 320]

	var posicionesXAnimacionSemitono = [92, 92, 92, 92, 92, 92, 92]


	canvas.circle(30).attr({ cx: posicionX+8, cy: posicionNotas[linea] }).fill(colorNota)
	.animate(tempo).move( posicionesXAnimacionCircle[linea], posicionesYAnimacionCircle[linea] );

	//var nota = canvas.circle(30).attr({ cx: posicionX+8, cy: posicionNotas[linea] }).fill(colorNota);

	//.animate(tempo).move( posicionesXAnimacionCircle[linea], posicionesYAnimacionCircle[linea] );


	//canvas.text(numero).move(posicionX, posicionNotas[linea]-22).font({ fill: "#ffffff", family: 'Inconsolata', size: 30})
	canvas.text(numero).move(posicionX, posicionNotas[linea]-30).font({ fill: colorTexto, family: 'Inconsolata', size: 30})
	.animate(tempo).move( posicionesXAnimacionTexto[linea], posicionesYAnimacionTexto[linea] );

	//nota.text(numero).move(posicionX, posicionNotas[linea]-30).font({ fill: colorTexto, family: 'Inconsolata', size: 30});
	//.animate(tempo).move( posicionesXAnimacionTexto[linea], posicionesYAnimacionTexto[linea] );


	if(semitono){
		canvas.text("#/b").move(posicionX, posicionNotas[linea]-25).font({ fill: "#ffffff", family: 'Inconsolata', size: 10})
		.animate(tempo).move( posicionesXAnimacionSemitono[linea], posicionesYAnimacionSemitono[linea] );
	}




/*
canvas.circle(30).attr({ cx: 198, cy: 50 }).fill("#022486");
canvas.text("4").move(190, 33).font({ fill: "#ffffff", family: 'Inconsolata'});
//canvas.circle(5).attr({ cx: 198, cy: 50 }).fill("#b3b300");
*/


 //return nota;




}







function colorNotas(linea){

	var coloresNota = ["#022486", "#402284", "#02948A", "#00A900", "#FFEE00", "#FF491A", "#F50417"];
	return coloresNota[linea];

}



function colorNumeros(linea){

	var coloresTexto = ["#b30000", "#b30000", "#b30000", "#ffffff", "#022486", "#022486", "#022486"];
	return coloresTexto[linea];


	//return "#808080";


}


/*

function pruebasRandomLinea(){
	return Math.floor(Math.random() * 7)+1;
}


function pruebasRandomNumero(linea){

	if ((linea == 1 )||(linea == 2 )) {
		return ""+Math.floor(Math.random() * 8);
	}
	else if (linea == 3) {
		return ""+Math.floor(Math.random() * 8)+1;
	}
	else{
		return ""+Math.floor(Math.random() * 7)+1;
	}

}

function pruebasRandomSmitono(){
	numero = Math.floor(Math.random() * 2);
	if (numero == 0) {
		return false;
	}else{
		return true;
	}
}

*/


/*
function moverNotas(){


}

*/



