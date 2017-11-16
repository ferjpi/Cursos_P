var miCanvas = document.getElementById("dibujo");

var papel = miCanvas.getContext("2d");


miCanvas.addEventListener("mousedown", inicio);

miCanvas.addEventListener("mouseup", fin);

var xi;

var yi;

var xf;

var yf;


function inicio(evento)

{

 xi = evento.offsetX;

yi = evento.offsetY;

}


function fin(evento)

{

xf = evento.offsetX;

yf = evento.offsetY;

dibujarLinea("blue", xi, yi, xf, yf, papel);

}


//Y la función dibujarLinea ya la conocemos.