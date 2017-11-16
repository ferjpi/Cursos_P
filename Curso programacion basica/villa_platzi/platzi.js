var vp = document.getElementById("villaplatzi");

var papel = vp.getContext("2d");
//var mapa = "tile.png";

document.addEventListener("keydown",moverCerdo);
var teclas = {LEFT:37,UP:38,RIGHT:39,DOWN:40};
var xCerdo = 100;
var yCerdo = 100;

var xV = new Array();
var yV = new Array();
var xP = new Array();
var yP = new Array();

var fondo = {
	url:"tile.png",
	cargaOk: false
};


var vaca = {
	url: "vaca.png",
	cargaOk: false
};

var cerdo = {
	url: "cerdo.png",
	cargaOk: false
};

var pollo = {
	url: "pollo.png",
	cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo()
{
	fondo.cargaOk = true;
	dibujar();
}

function cargarCerdo()
{
	cerdo.cargaOk = true;
	dibujar();
}

function cargarVaca()
{
	vaca.cargaOk = true;
	mantener();
}


function cargarPollo()
{
	pollo.cargaOk = true;
	mantener();
}

function moverCerdo(evento)
{
	var movimiento = 5;
	switch (evento.keyCode)
	{
		case teclas.LEFT:
		xCerdo = xCerdo-movimiento;
		dibujar(xCerdo,yCerdo);
		//papel.drawImage(cerdo.imagen,xCerdo,yCerdo);		
		break;
		case teclas.UP:
		yCerdo = yCerdo-movimiento;
		dibujar(xCerdo,yCerdo);
		//papel.drawImage(cerdo.imagen,xCerdo,yCerdo);		
		break;
		case teclas.RIGHT:
		xCerdo = xCerdo+movimiento;
		dibujar(xCerdo,yCerdo);
		//papel.drawImage(cerdo.imagen,xCerdo,yCerdo);		
		break;
		case teclas.DOWN:
		yCerdo = yCerdo+movimiento;
		dibujar(xCerdo,yCerdo);
		//papel.drawImage(cerdo.imagen,xCerdo,yCerdo);
		break;
		default:
			console.log("Otra tecla");
		break;
	}

}

function mantener()
{
	if (pollo.cargaOk)
	{
		var cantidad = aleatorio(1,20);
		for (var p=0; p<cantidad; p++)
		{
			xi = aleatorio(0,6);
			yi = aleatorio(0,6);
			x = xi * 60;
			y = yi * 60;
			xP[p]=x;
			yP[p]=y;
		}
	}
	if (vaca.cargaOk)
	{
		var cantidad = aleatorio(1,10);
		for (var v=0; v<cantidad; v++)
		{
			xi = aleatorio(0,6);
			yi = aleatorio(0,6);
			x = xi * 70;
			y = yi * 70;
			xV[v]=x;
			yV[v]=y;			
		}
	}
}

function dibujar()
{
	if(fondo.cargaOk)
	{
		papel.drawImage(fondo.imagen,0,0);
	}
	
	if (vaca.cargaOk)
	{

		for (var v=0; v<10; v++)
		{
			// xi = aleatorio(0,6);
			// yi = aleatorio(0,6);
			// x = xi * 65;
			// y = yi * 65;
			// var x = aleatorio(0,420);
			// var y = aleatorio(0,420);
			papel.drawImage(vaca.imagen,xV[v],yV[v]);
		}
	}
	if (cerdo.cargaOk)
	{
		papel.drawImage(cerdo.imagen,xCerdo,yCerdo);
	}
	// if (cerdo.cargaOk)
	// {
	// 	// for (var c=0; c<1; c++)
	// 	// {
	// 		xi = aleatorio(0,3);
	// 		yi = aleatorio(0,3);
	// 		x = xi * 65;
	// 		y = yi * 65;
	// 		// var x = aleatorio(0,420);
	// 		// var y = aleatorio(0,420);
	// 		papel.drawImage(cerdo.imagen,x,y);
	// 	//}
	// }
	if (pollo.cargaOk)
	{
		for (var p=0; p<10; p++)
		{
			// xi = aleatorio(0,4);
			// yi = aleatorio(0,4);
			// x = xi * 60;
			// y = yi * 60;
			// var x = aleatorio(0,420);
			// var y = aleatorio(0,420);
			papel.drawImage(pollo.imagen,xP[p],yP[p]);
		}
	}
}

function aleatorio(min, max)
{
	var resultado;
	resultado = Math.floor(Math.random()*(max-min+1))+min;
	return resultado;
}