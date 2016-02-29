function Persona(nombre, edad){
	this.nombre = nombre
	this.edad = edad
	this.sorbosBebidaNormal = 0
	this.sorbosBebidaAlcoholica = 0
	this.ebriedad = 0
	this.bebidaAlcoholica = 0
	this.bebidaNormal = 0
	this.sorbosTotales = 0
	this.comprar_bebida = function(bebida){
		if(bebida.alcoholica === true){
			if(this.edad > 18){
				this.bebidaAlcoholica += 1;
				console.log("Haz comprado 1 bebida alcoholica");
			}
			else{
				console.log("Eres menor de edad, no puedes comprar bebidas");
			}
		}
		else if(bebida.alcoholica === false){
			this.bebidaNormal += 1;
			console.log("Haz comprado 1 bebida normal");
		}
	}

	this.abrir_bebida = function(tipoBebida){
		if(tipoBebida.alcoholica === true){
			if(this.edad >= 18){
				if(this.bebidaAlcoholica > 0){
					this.sorbosBebidaAlcoholica = this.sorbosBebidaAlcoholica + 10;
					this.bebidaAlcoholica -= 1;
					console.log("Haz abierto una botella de alcohol, ahora puedes tomar!");
				}
				else{
					console.log("No quedan bebidas alcoholicas para abrir, debes comprar más");
				}
			}
			else{
				console.log("No puedes tomar alcohol, eres menor de edad!");
			}
		}
		else if (tipoBebida.alcoholica === false) {
			if(this.bebidaNormal > 0){
				this.sorbosBebidaNormal = this.sorbosBebidaNormal + 10;
				this.bebidaNormal -= 1;
				console.log("Haz abierto una botella de bebida, ahora puedes tomar!");
			}
			else{
				console.log("No quedan más bebidas para abrir, debes comprar más");
			}
		}
		else{
			console.log("No existe esa bebida");
		}
	}

	this.beber_bebida = function(tipoBebida){
		if(tipoBebida.alcoholica === true ){
			if(this.edad > 18){
				if(this.sorbosBebidaAlcoholica > 0){
					if(this.ebriedad < 25 && this.sorbosTotales < 30){
						this.sorbosTotales += 1;
						this.sorbosBebidaAlcoholica -= 1;
						this.ebriedad += 1;
						console.log("Salud y al seco!");
		
						if(this.ebriedad > 15){
						console.log("Ten cuidado, te encuentras en estado de ebriedad");
						}
					}
					else if(this.sorbosTotales === 30){
						console.log("Ha tomado mucho líquido por hoy, no puedes tomar más, lo sentimos");
					}
					else if(this.ebriedad === 25){
						console.log("Ha tomado mucho alcohol por hoy, no puedes tomar más, lo siento");
					}
				}
				else{
					if(this.ebriedad < 25 && this.sorbosTotales < 30){
						console.log("No hay nada para tomar, abre una botellla y podrás tomar!");
					}
					else{
						console.log("Se acabó la botella de copete, pero no puede tomar más por hoy, lo sentimos.");
					}
				}
			}
			else{
				console.log("No puedes abrir una botella de alcohol, eres menor de edad!");
			}
		}
		else if(tipoBebida.alcoholica === false){
				if(this.sorbosBebidaNormal > 0){
					if(this.sorbosTotales < 30){
						this.sorbosTotales += 1;
						this.sorbosBebidaNormal -= 1;
						console.log("Salud!");
					}
					else{
						console.log("Ha tomado mucho líquido por hoy, no puede tomar más");
					}
				}
				else{
					console.log("No hay nada para tomar, abre una botellla y podrás tomar!");
				}
			}
		else{
			console.log("No existe esa bebida");
			}
		}
	}

function Bebida(alcoholica){
	this.alcoholica = alcoholica
}


var Juan = new Persona("Juan Perez", 30);
var Pedro = new Persona("Pedro Solis", 15);

var ChivasRegal = new Bebida(true);
var Jugo = new Bebida(false);