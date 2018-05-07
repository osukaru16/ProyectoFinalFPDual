

//creacion del SVG y haciendo referencia al div heptagrama

var canvas = SVG('heptagrama').size('100%', '100%').viewbox(0,0,800,1000);


//pintaHeptagrama(canvas);


var Heptagrama = new Heptagrama(canvas);

Heptagrama.pintaHeptagrama();




//creacion del SVG y haciendo referencia al div heptagrama

//var canvas = SVG('heptagrama').size('100%', '100%').viewbox(0,0,800,1000);

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

//pintaHeptagrama(canvas);

//var notaB = new Notas(canvas,"F", 4, "#");


//notaB.pintaNota();
//notaB.pintaNumero();
//notaB.pintaSemitono();

//notaB.animaTodo();


/*
Pruebas con anime.js
*/

/*

var morphing = anime({
  targets: '#heptagrama .polymorph',
  points: [
    { value: '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369' },
    { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
    { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
    { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
  ],
  easing: 'easeOutQuad',
  duration: 2000,
  loop: true
});


*/









/*

var semitono = "b";


var notaB = new Notas(canvas,"B", 4, semitono);

notaB.animaTodo();

*/




var semitono = "b";


var notaB = new Notas(canvas,"B", 4, semitono);
var notaA = new Notas(canvas,"A", 4, semitono);
var notaG = new Notas(canvas,"G", 4, semitono);
var notaF = new Notas(canvas,"F", 4, semitono);
var notaE = new Notas(canvas,"E", 4, semitono);
var notaD = new Notas(canvas,"D", 4, semitono);
var notaC = new Notas(canvas,"C", 4, semitono);



//notaB.pintaNumero();

//notaB.animaTodo();

//notaB.animaTodo();
//notaA.animaTodo();


//for (var i = 0; i < 1000; i++) {
	notaB.animaTodo();
	notaA.animaTodo();
	notaG.animaTodo();
	notaF.animaTodo();
	notaE.animaTodo();
	notaD.animaTodo();
	notaC.animaTodo();
//}




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






