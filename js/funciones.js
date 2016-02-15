	/********* Ejercicio 1: Mayor de 3 Números **********/
	function mayor_de_3numeros(){

	
	var numero1 = parseInt(prompt("Ingrese el número 1"));
	if(Number.isInteger(numero1) == false){
		var numero1 = parseInt(prompt("Ingrese sólo números por favor.  Ingrese el número 1 nuevamente"));
	}
	var numero2 = parseInt(prompt("Ingrese el número 2"));
	if(Number.isInteger(numero2) != true){
		var numero2 = parseInt(prompt("Ingrese sólo números por favor.  Ingrese el número 2 nuevamente"));
	}
	var numero3 = parseInt(prompt("Ingrese el número 3"));
	if(Number.isInteger(numero3) != true){
		var numero3 = parseInt(prompt("Ingrese sólo números por favor.  Ingrese el número 3 nuevamente"));
	}

	alert(numero1+" "+numero2+" "+numero3);

	if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3) ){
		console.log("No hay respuestas disponibles para entregar por porfiado!.  Debió ingresar sólo números");
	}
	else{

	if (numero1 == numero2 && numero1 == numero3) {
		console.log("son iguales");
	}
	else if (numero1 > numero2 && numero1 > numero3) {
			console.log("el numero 1 es mayor");
		
	}
	else if(numero2 > numero1 && numero2 > numero3){
			console.log("el número 2 es mayor");
	}
	else if(numero3 > numero1 && numero3 > numero2){
			console.log("el número 3 es mayor");
	}
}

}
/*************** Ejercicio 2: Piedra, Papel o Tijera *******************/

function cachipun(){
	var usuario = prompt("Ingrese 'papel', 'tijera', 'piedra' para entrar a participar");
	usuario = usuario.toLowerCase();
	var computadora = Math.floor((Math.random() * 3) + 1);

	if(usuario == "papel" || usuario == "tijera" || usuario == "piedra"){
	if(usuario == "papel"){
		if(computadora == "1"){
			console.log("Ambos sacaron papel.  Empate!");
		}
		else if(computadora == "2"){
			console.log("Computadora sacó piedra.  Gana usuario!");
		}
		else if(computadora == "3"){
			console.log("Computadora sacó tijera.  Gana computadora!");
		}
	}
	if(usuario == "piedra"){
		if(computadora == "1"){
			console.log("Computadora sacó papel.  Gana computadora!");
		}
		else if(computadora == "2"){
			console.log("Ambos sacaron piedra.  Empate!");
		}
		else if(computadora == "3"){
			console.log("Computadora sacó tijera.  Gana usuario!");
		}
	}
	if(usuario == "tijera"){
		if(computadora == "1"){
			console.log("Computadora sacó papel.  Gana usuario!");
		}
		else if(computadora == "2"){
			console.log("Computadora sacó piedra.  Gana computadora!");
		}
		else if(computadora == "3"){
			console.log("Ambos sacaron tijera.  empate!");
		}
	}
}
	else{
		console.log("Debe escribir sólo una de las tres opciones permitidas para participar, intente nuevamente.");
	}
}



/****************** Ejercicio 3: Cajero **********************************/

function cajero(){
	var monto = parseInt(prompt("Ingresa un monto de dinero"));
	cifra1 = monto /10000;
	calculo_temporal =  monto - (Math.trunc(cifra1) * 10000);
	cifra2 = calculo_temporal/5000;
	calculo_temporal =  calculo_temporal - (Math.trunc(cifra2) * 5000);
	cifra3 = calculo_temporal /2000;
	calculo_temporal =  calculo_temporal - (Math.trunc(cifra3) * 2000);
	cifra4 = calculo_temporal /100;
	calculo_temporal =  calculo_temporal - (Math.trunc(cifra4) * 100);
	cifra5 = calculo_temporal/10;
	calculo_temporal =  calculo_temporal - (Math.trunc(cifra5) * 10);
	cifra6 = calculo_temporal;

	//resto = parseInt(Math.trunc(cifra5)*10) + parseInt(Math.trunc(cifra6));

	console.log("Billetes de $10.000: "+Math.trunc(cifra1));
	console.log("Billetes de $5.000: "+Math.trunc(cifra2));
	console.log("Billetes de $2.000: "+Math.trunc(cifra3));
	console.log("Monedas de $100: "+Math.trunc(cifra4));
	console.log("Sobraron: "+ (parseInt(Math.trunc(cifra5)*10) + parseInt(Math.trunc(cifra6))) +" Pesos");

}