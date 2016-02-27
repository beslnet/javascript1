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

/****************** Ejercicio 4: Adivinar Password **********************************/

function adivinar_password(){
	var password = prompt("Ingrese la password que debe adivinar");
	password_correcta = "foobar";

	while (password != password_correcta) {
    console.log("no has adivinado aún!");
    var password = prompt("Ingrese nuevamente la password que debe adivinar");
	}
	console.log("Adivinaste!!!");
}

/****************** Ejercicio 5: Sumatoria de números **********************************/

function suma_numeros(){
	var suma = parseInt(prompt("Ingrese el número donde quieres que llegue la sumatoria"));
	var numero = 0;
	var i = 1;
	if(isNaN(suma)){
		console.log("No ingresaste un numero");
	}
	else{
	while(i <= suma){
		i += 1;
		numero += i;

	}
	console.log(numero);
	}
	
}

/****************** Ejercicio 6: Sumatoria de números pares usando while *********************/

function suma_numerospares_while(){
	var suma = parseInt(prompt("Ingrese el número donde quieres que llegue la sumatoria"));
	var numero = 0;
	var i = 1;
	if(isNaN(suma)){
		console.log("No ingresaste un numero");
	}
	else{
	while(i <= suma){
		if(i % 2 == 0){
			console.log(i);
			numero += i;
		}
		i += 1;
	}
	console.log(numero);
	}
	
}

/****************** Ejercicio 7: Sumatoria de números pares usando for ahora ************/

function suma_numerospares_for(){
	var suma = parseInt(prompt("Ingrese el número donde quieres que llegue la sumatoria"));
	var numero = 0;

	if(isNaN(suma)){
		console.log("No ingresaste un numero");
	}
	else{
	for(var i = 1; i <= suma; i++){
		if(i % 2 == 0){
			console.log(i);
			numero += i;
		}
	}
	console.log(numero);
}
}

/****************** Ejercicio 8: Sumatoria de números pares usando for ahora ************/
function binarios(){
	var total = 0;
for(var i = 1; i <= 99; i++){
	if(i % 2 == 0){
		total += "0";
	}
	else{
	total += "1";
	}
}
console.log(total+2);
}

/****************** Ejercicio 9: Invertir un string ************/


function inversa() {
  var cadena = prompt("Ingrese el texto número a invertir");
  var n = cadena.length;
  var cadenaInvertida = "";
 
  while (n >= 0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(n);
    n--;
  }
	console.log(cadenaInvertida);
}

/****************** Ejercicio 10: Pirámide de asteriscos ************/

function piramide_asteriscos(){
	var n = prompt("Ingrese un número para definir la altura del arbolito");
	var asteriscos = '';
    var j = '';
    for(var i = 0; i < n; i = i+1){ 
    	j = i + 1;
        for(j; j < n; j++)
        	{ 
        		asteriscos +=" ";
        	}
        for(j = 0; j < 2*i+1; j++)
        	{ 
        		asteriscos += "*";
        	}
        asteriscos += "\n";
    } 
console.log(asteriscos);
}


/****************** Ejercicio 11: Adivinar número - 3 intentos ************/

function adivinar_numero(){
var numero = parseInt(prompt("Ingrese el número a adivinar"));
var secreto = 4;
var i = 0;

while(numero != secreto){
	i += 1;

	if(i == 3){
		console.log("Excediste el número de intentos");
		break;
	}
	var numero = parseInt(prompt("Ingrese el número a adivinar"));
	if(numero == secreto){
			break;
		}
}
	if(numero == secreto){
	console.log("adivinaste!");
	}
}


/****************** Ejercicio 12: Funciones sobre funciones ************/

function multiplicaPorTres(n){
	return n*3;
}
function aplicaDosVeces(n, miFuncion){
	return	miFuncion(miFuncion(n));
}

//var resultado = aplicaDosVeces(6, multiplicaPorTres);
//console.log(resultado);


/****************** Ejercicio 13:  funciones anónimas************/

var myVar;

function myFunction() {
    myVar = setInterval(alertFunc, 3000);
}

function alertFunc() {
    alert("Hello!");
}

//myFunction();

/****************** Ejercicio 14:  arreglos ************/

/****************** Ejercicio 16: Objetos literales  ************/
function objetos(){
var auto = new Object();
auto.puertas = 5;
auto.marca = "Audi";
auto.color = "Azul";

auto.metodo1 = function(){
	console.log(auto.marca);
}

console.log(auto.color);
}

/****************** Ejercicio 17: Objetos literales 2  ************/
var perro = {
	juegue: function(animal){
		animal.entretenido = true
		animal.felicidad()
	}
}

var gato = {
	felicidad: function(){
		console.log('miauuuuuu!!! :3')
	},
	entretenido:false
}

//perro.juegue(gato)
//console.log(gato)

/****************** Ejercicio 18: Objetos literales 3  ************/
var pedro ={
	nombre: 'Pedro',
	edad: 28,
	saludar: function(persona){
		console.log(
			this.nombre +
			' Saluda a ' + 
			persona.nombre)
		persona.saludado = true
	}, 
	saludado: false
};

var juan ={
	nombre: 'Juan',
	edad: 24,
	saludar: function(persona){
		console.log(
			this.nombre +
			' Saluda a ' + 
			persona.nombre)
		persona.saludado = true
	}, 
	saludado: false
};

//pedro.saludar(juan);
//console.log(juan);

/****************** Ejercicio 19: Objetos literales 4  ************/
var juan ={
	nombre: 'Juan',
};

var registro_civil ={
	cambiar_nombre: function(persona, nombre){
		console.log("El registro civil cambió el nombre de "+ persona.nombre + " a " + nombre)
		persona.nombre = nombre
	}, 
};

//registro_civil.cambiar_nombre(juan, "Benjamín");
//console.log(juan.nombre);

/****************** Ejercicio 20: Clases 1 ************/
function Persona(nombre) {
	//propiedad
	this.nombre = nombre
	this.saludado = false
	//metodo
	this.saludar = function(persona){
		console.log(this.persona + ' a saludado a '+ persona.nombre)
		persona.saludado = true
	}
}

/*var persona1 = new Persona()
var persona2 = new Persona()
persona2.nombre = 'Juan'
var persona3 = new Persona()
persona3.nombre = 'Diego'

var persona1 = new Persona('Pedro');
var persona2 = new Persona('Juan');
var persona3 = new Persona('Diego');

console.log(persona1, persona2, persona3) */

/****************** Ejercicio 21: Clases 2 ************/

function Mascota(especie, nombre, edad, onomatopeya){
	this.especia = especie
	this.nombre = nombre
	this.edad = edad
	this.onomatopeya = onomatopeya
	this.acariciada = 0
	this.serAcariciada = function(){
		this.acariciada++
		console.log("mascota acariciada"+this.acariciada)
	}
}

function Persona(nombre, edad) {
	//propiedad
	this.nombre = nombre
	this.edad = edad
	//metodo
	this.acariciar = function(mascota){
		mascota.serAcariciada()
		return this
	}
}

var persona1 = new Persona('Benjamín', '35');
var mascota1 = new Mascota('Perro', 'Kofka', 10, 'Guau !' );

//persona1 .acariciar(mascota1) .acariciar(mascota1)

//var x = new Persona("Javier", "35")

//x.acariciar(mascota1)	
//x.acariciar(mascota1)	

//console.log(mascota1)

/****************** Ejercicio 22: Clases 2 ************/


var deseos2 = [];
var veces = 1;
var deseos = [];
var arreglo = [];
var cantidad = "";	


//var cantidad = parseInt(prompt("Ingrese su cantidad de deseos"));


while(veces <= cantidad){
	var deseos = prompt("Ingrese su deseo "+veces);
	arreglo.push(deseos);
	veces +=1;
}

var largo = arreglo.length;
largo.length;
for(var x = largo-1; x >= 0 ; x--){
	deseos2.push(arreglo[x]);
}
//console.log(deseos2);

/****************** Ejercicio 23:  ************/

function caja_registradora(monto_inicial){
	this.monto_total = parseInt(monto_inicial);

	this.ingresarDinero = function(monto){
		this.monto_total = parseInt(monto) + this.monto_total;
	}
	this.retirarDinero = function(monto){
		monto_tmp = this.monto_total - parseInt(monto);
		if(monto_tmp < 0){
			console.log("No tiene fondos suficientes");
		}
		else{
			this.monto_total = this.monto_total - monto;
		}
	}
}

var movimiento = new caja_registradora("50000");

/****************** Ejercicio 24:  ************/
function SalaClases(){
	this.capacidad = parseInt(10);
	this.vacantes = parseInt(10);

	this.GestionAula = function(edad){
		this.edadAlumno = parseInt(edad);

		if(edad < 18){
			console.log("la persona es muy joven para entrar al aula");
		}
		else{
			if(this.vacantes > 0){
			this.vacantes -= 1;
			console.log("Alumno ingresado con éxito al aula");
			}
			else{
				console.log("No hay más capacidad en esta aula");
			}
		}
	}

}

function Alumno(edad){
	this.edad = parseInt(edad);

	this.ingresarAlumno = function(salaclases, edad){
		//var edad = prompt("Ingrese la edad del alumno");
		salaclases.GestionAula(edad);
		//return this	
	}


}

/****************** Ejercicio 24:  ************/
function Perrera(){
	this.capacidad = parseInt(15);
	this.PerrosAtrapados = parseInt(0);

	this.IngresarPerros = function(perro, tipoAnimal){
		//var tipoAnimal = prompt("Ingrese el tipo de animal");
		validacion = perro.validaAnimal(tipoAnimal);
		if(validacion === true){
			if(this.capacidad > 0){
					console.log("Animal ingresado con éxito en la perrera");
					this.capacidad -= 1;
					this.PerrosAtrapados +=1;
				}
			else{
				console.log("No hay más capacidad en la perrera");
			}
		}
		else{
			console.log("Sólo se aceptan perros en esta perrera");
		}
	}

	this.AdoptaPerros = function(nombreClase, cantidadPerros, cantidadAdoptar){
		if(parseInt(this.PerrosAtrapados) > 0){
			if(this.PerrosAtrapados === 1){
				if(cantidadAdoptar > 1){
					console.log("Ĺo lamentamos, sólo nos queda un perrito disponible");
					}
				else{
						nombreClase.AnimalAdoptado(cantidadAdoptar);
						this.PerrosAtrapados = this.PerrosAtrapados - cantidadAdoptar;
						this.capacidad = this.capacidad + cantidadAdoptar;
						console.log("Felicitaciones!, has adoptado "+cantidadAdoptar+" Perro");					
					}

			}			
			else {
					if(cantidadAdoptar < 3)
						{
							if(cantidadAdoptar === 0)
								{
								console.log("Puedes adoptar desde 1 perro hacia arriba!, animo! :)");
								}
							else
								{
								if(cantidadAdoptar === 1 && cantidadPerros === 1)
									{
									nombreClase.AnimalAdoptado(cantidadAdoptar);
									this.PerrosAtrapados = this.PerrosAtrapados - cantidadAdoptar;
									this.capacidad = this.capacidad + cantidadAdoptar;
									console.log("Felicitaciones!, has adoptado "+cantidadAdoptar+" Perro");				
									}

								else if(cantidadAdoptar === 1 && cantidadPerros == 0)
									{
									nombreClase.AnimalAdoptado(cantidadAdoptar);
									this.PerrosAtrapados = this.PerrosAtrapados - cantidadAdoptar;
									this.capacidad = this.capacidad + cantidadAdoptar;
									console.log("Felicitaciones!, has adoptado "+cantidadAdoptar+" Perro");				
									}
								
								else if(cantidadAdoptar === 2 && cantidadPerros === 0)
									{
									nombreClase.AnimalAdoptado(cantidadAdoptar);
									this.PerrosAtrapados = this.PerrosAtrapados - cantidadAdoptar;
									this.capacidad = this.capacidad + cantidadAdoptar;
									console.log("Felicitaciones!, has adoptado "+cantidadAdoptar+" Perro");					
									}
								else
									{
									if(cantidadPerros === 1)
										{
										console.log("Sólo puedes tener dos perros, y ya tienes 1, no puedes adoptar más de 1 :)");
										}
									else
										{
										console.log("No puedes tener más de dos perritos y ya tienes los dos! :)");
										}	
									}
								}	
						}	
					else
						{
						console.log("No puedes adoptar más de 2 perros");
						}
					
				}	
		}
		else{
			console.log("No tenemos esa cantidad de perritos disponibles para ser adoptados en este momento!, lo lamentamos");
			}
		
	}
}

function Perro(){
	this.tipoAnimalPermitido = "perro";
	this.validaAnimal = function(tipo_animal){
		if(tipo_animal === this.tipoAnimalPermitido){
			return true;
		}
		else{
			return false;
		}
	}

}

function Humano(cantidad){
	this.cantidadPerros = parseInt(cantidad);
	this.AdoptarAnimal = function(perrera, cuantosAdoptar){
		perrera.AdoptaPerros(this, this.cantidadPerros, cuantosAdoptar);
	}
	this.AnimalAdoptado = function(cantidad){
		this.cantidadPerros = this.cantidadPerros + cantidad;
	}

	this.devolverAnimal = function(nombreClase1, nombreClase2, tipoAnimal){
		if(this.cantidadPerros > 0)
			{
			nombreClase1.IngresarPerros(nombreClase2, tipoAnimal);
			validacion = nombreClase2.validaAnimal(tipoAnimal);
			if(validacion === true)
				{
				this.cantidadPerros = this.cantidadPerros - 1;	
				console.log("Devolución de perrito efectuada corréctamente :-(");
				}
			}
		else
			{
			console.log("No tienes perros, que quieres devolver? :O");
			}
	}

}

/****************** Ejercicio 25:  ************/