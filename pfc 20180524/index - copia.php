<?php


/* codigo de lectura
	$file = fopen("pruebas.txt", "r");

	while(!feof($file)) {

		echo fgets($file). "<br />";

	}

	fclose($file);
*/


	$file = fopen("pruebas.txt", "r");


	$texto ="";

	while(!feof($file)) {

		$texto .= fgets($file);

	}


	fclose($file);

	$texto = substr(trim($texto), 0, -4);

	$textoNuevo = "{titulo:'blabla', partitura:[A#5,B7]}";

	$file = fopen("pruebas.txt", "w");

	fputs($file, $texto.$textoNuevo.", \r\n}}\";");

	fclose($file);

	echo "neko";



?>