var teclas = {LEFT: 37,UP: 38,RIGHT:39,DOWN:40};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red",x-1,y-1,x+1,y+1,papel);

function dibujarLinea(color, xinicial,yinicial,xfinal,yfinal,lienzo) 
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}


function dibujarTeclado(evento)
{
	var colorcito = "blue";
	var movimiento = 5;
	switch(evento.keyCode)
	{
		case teclas.LEFT:
			dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
			x=x-movimiento;
		break;
		case teclas.RIGHT:
			dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
			x=x+movimiento;
		break;
		case teclas.DOWN:
			dibujarLinea(colorcito,x,y,x,y+movimiento,papel);
			y=y+movimiento;
		break;
		case teclas.UP:
			dibujarLinea(colorcito,x,y,x,y-movimiento,papel);
			y=y-movimiento;
		break;
		default:
			console.log("Otra tecla");
		break;

	}
}