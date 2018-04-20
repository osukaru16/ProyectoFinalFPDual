


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

