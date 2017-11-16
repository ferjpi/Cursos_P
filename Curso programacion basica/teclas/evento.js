var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var xi,yi,xf,yf;
var button = 0;
// var offsetX = 0;
// var offsetY = 0;


document.addEventListener("mousedown",inicial);
document.addEventListener("mouseup",final);
document.addEventListener("mousemove",movimiento);

function inicial(evento)
{
	xi = evento.offsetX;
	yi = evento.offsetY;
	movimiento(evento);
}

function final(evento)
{
	xf = evento.offsetX;
	yf = evento.offsetY;
	dibujarMouse("red",xi,yi,xf,yf,papel);
	
}

function movimiento(evento)
{
	// if(button == 1)
	//{
	dibujarMouse("amarillo",xi,yi,xf,yf,papel);
	//console.log(evento);
	//}
	
}

function dibujarMouse(color, xinicial,yinicial,xfinal,yfinal,lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 2;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

