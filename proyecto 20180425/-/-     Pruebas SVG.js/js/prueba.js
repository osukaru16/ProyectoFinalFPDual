/*
var width = 1000;

var height = 1000;
*/
/*

var canvas = SVG('prueba').size('100%', '100%').viewbox(0,0,800,1000)
  , rect = canvas.rect(100, 100);*/


  //<line x1="100" y1="50" x2="100%" y2="50" />

var canvas = SVG('prueba').size('100%', '100%').viewbox(0,0,800,1000)
  , rect = canvas.line(100, 50, 1000, 50);