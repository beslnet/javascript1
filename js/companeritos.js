var edad_mujeres = 0;
var edad_hombres = 0;
var edad_total = 0;

function Alumnos(nombre, edad, genero){
	this.nombre = nombre
	this.edad = edad
	this.genero = genero
}

var juancri = new Alumnos("Juan Cristobal", 31, "Masculino");
var david = new Alumnos("David Wazoski", 27, "Masculino");
var carlos = new Alumnos("Carlos Salas", 25, "Masculino");
var gonzalo = new Alumnos("Gonzalo Alarcón", 31, "Masculino");
var daniela = new Alumnos("Daniela Mora", 26, "Femenino");
var sebastian = new Alumnos("Sebastián Meza", 24, "Masculino");
var cristobal = new Alumnos("Cristobal Dominguez", 35, "Masculino");
var manuel = new Alumnos("Manuel Saez", 32, "Masculino");
var alejandra = new Alumnos("Alejandra Quintana", 28, "Femenino");
var nathalie = new Alumnos("Nathalie Ravilet", 28, "Femenino");
var rodrigo = new Alumnos("Rodrigo Hein", 28, "Masculino");
var joaquin = new Alumnos("Joaquín Sepulveda", 24, "Masculino");
var benjamin = new Alumnos("Benjamín Silva López", 35, "Masculino");
var belen = new Alumnos("Belén Guede", 18, "Femenino");
var diego = new Alumnos("Diego Guajardo", 32, "Masculino");

var arreglo_alumnos = [juancri, david, carlos, gonzalo, daniela, sebastian, cristobal, manuel, alejandra, nathalie, rodrigo, joaquin, benjamin, belen, diego];

var arreglo_mujeres = arreglo_alumnos.filter(function(elem){
	if(elem.genero === "Femenino"){
		return elem.nombre;
	}
});

var arreglo_hombres = arreglo_alumnos.filter(function(elem){
	if(elem.genero === "Masculino"){
		return elem.nombre;
	}
});

arreglo_alumnos.forEach(function(elem){
	if(elem.genero === "Femenino"){
		edad_mujeres = edad_mujeres + elem.edad;
	}
});

arreglo_alumnos.forEach(function(elem){
	if(elem.genero === "Masculino"){
		edad_hombres = edad_hombres + elem.edad;
	}
});

arreglo_alumnos.forEach(function(elem){
		edad_total = edad_total + elem.edad;
});