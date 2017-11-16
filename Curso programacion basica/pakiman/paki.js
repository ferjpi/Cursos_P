var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pocacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";


var cauchin = new Pakiman("Cauchin",100,30);
var pokacho = new Pakiman("Pocacho",80,50);
var tocinauro = new Pakiman("tocinauro",120,40);
//console.log(cauchin, pokacho, tocinauro);

// pokacho.hablar();
var coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);

//for con in muestra el indice
//for con of itera en el objeto( en ocasiones)
for(var paki of coleccion)
{
	paki.mostrar();
}