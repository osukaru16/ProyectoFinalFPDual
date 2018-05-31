<?php


/* codigo de lectura
	$file = fopen("pruebas.txt", "r");

	while(!feof($file)) {

		echo fgets($file). "<br />";

	}

	fclose($file);
*/
//$_POST["nombre"])


	//$partitura = $_POST['parte1'].$_POST['parte2'];

	$partitura = $_POST['partitura'];

	//$partitura = $_REQUEST['partitura'];

	$archivo = "json/musicasStringJson";

	$file = fopen($archivo, "r");


	$texto ="";

	while(!feof($file)) {

		$texto .= fgets($file);

	}


	fclose($file);

	$texto = substr(trim($texto), 0, -4);

	$textoNuevo = $partitura;

	$file = fopen($archivo, "w");

	fputs($file, $texto.$textoNuevo." \r\n]}'");

	fclose($file);

	//echo "neko";



?>