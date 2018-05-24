<?php


/* codigo de lectura
	$file = fopen("pruebas.txt", "r");

	while(!feof($file)) {

		echo fgets($file). "<br />";

	}

	fclose($file);
*/
//$_POST["nombre"])

	$archivo = "pruebas.txt";

	$file = fopen($archivo, "r");


	$texto ="";

	while(!feof($file)) {

		$texto .= fgets($file);

	}


	fclose($file);

	$texto = substr(trim($texto), 0, -4);

	$textoNuevo = "{titulo:'blabla', partitura:[A#5,B7]}";

	$file = fopen($archivo, "w");

	fputs($file, $texto.$textoNuevo.", \r\n}}\";");

	fclose($file);

	//echo "neko";



?>