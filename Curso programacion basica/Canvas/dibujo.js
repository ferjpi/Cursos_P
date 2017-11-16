var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial,yinicial,xfinal,yfinal) 
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick()
{
	var x = parseInt(texto.value);
	
	var lineas = x;
	var l = 0;
	var yi,xf,yf;
	var espacio = ancho/lineas;


	while(l<lineas)
	{
		yi = espacio*l;
		xf = espacio *(l+1);
		dibujarLinea("grey",0,yi,xf,300);
			

		yi = ancho-(l*10);
		xf = espacio *(l+1);
		dibujarLinea("grey",0,yi,xf,0);
		

		yi = ancho-(l*10);
		xf = (ancho-10)-(l*10);
		dibujarLinea("grey",300,yi,xf,0);
					

		yi = espacio*l;
		xf = (ancho-10)-(l*10);
		dibujarLinea("grey",300,yi,xf,300);
		
	//Esto es para la linea del centro
		yf = espacio*l;
		xf = espacio *(l+1);
		dibujarLinea("grey",150,150,0,yf);
			

		yf = espacio*l;
		xf = espacio *(l+1);
		dibujarLinea("grey",150,150,300,yf);
			
	//
	//

		l = l + 1;
	}

dibujarLinea("red",1,1,1,299);
dibujarLinea("red",1,299,299,299);
dibujarLinea("red",299,299,299,1);
dibujarLinea("red",299,1,1,1);


}