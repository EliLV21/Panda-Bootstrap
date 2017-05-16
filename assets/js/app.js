var restaurar = document.getElementsByClassName("fotos");
var botonRestaurar = document.getElementById("reiniciar");

var elimPan1 = document.getElementById("eliminarFoto1");
var elimPan2 = document.getElementById("eliminarFoto2");
var elimPan3 = document.getElementById("eliminarFoto3");
var elimPan4 = document.getElementById("eliminarFoto4");
var fotoPanda1 = document.getElementById("foto1");
var fotoPanda2 = document.getElementById("foto2");
var fotoPanda3 = document.getElementById("foto3");
var fotoPanda4 = document.getElementById("foto4");

var text1 = document.getElementById("texto1");
var textOculto1 = document.getElementById("textoOculto1");
var text2 = document.getElementById("texto2");
var ocultarIzq = document.getElementById("izquierda");
var ocultarDer = document.getElementById("derecha");

elimPan1.addEventListener("click",eliminar1);
elimPan2.addEventListener("click",eliminar2);
elimPan3.addEventListener("click",eliminar3);
elimPan4.addEventListener("click",eliminar4);
reiniciar.addEventListener("click",reiniciarTodo);
ocultarIzq.addEventListener("click",esconderIzq);
ocultarDer.addEventListener("click",esconderDer);



function reiniciarTodo (){
  for(var i=0;i<restaurar.length;i++){
    restaurar[i].style.display = "flex";
    }
};


function eliminar1(){
  fotoPanda1.style.display = "none";
};
function eliminar2(){
  fotoPanda2.style.display = "none";
};
function eliminar3(){
  fotoPanda3.style.display = "none";
};
function eliminar4(){
  fotoPanda4.style.display = "none";
};

function esconderIzq(){
  text1.style.visibility = "hidden";
  document.getElementById("texto1").id="textoOculto1";
  document.getElementById("izquierda").id="mostrarIzquierda";
  var mostrarIzq = document.getElementById("mostrarIzquierda");
  mostrarIzq.addEventListener("click",mostrarIzq);

  };
function esconderDer(){
  text2.style.visibility = "hidden";
  document.getElementById("texto2").id="textoOculto2";
  document.getElementById("derecha").id="mostrarDerecha";
  var mostrarDer = document.getElementById("mostrarDerecha");
  mostrarDer.addEventListener("click",mostrarDer);

};
function mostrarDer(){
  textoOculto2.style.visibility = "visible";
};
function mostrarIzq(){
  textoOculto1.style.visibility = "visible";
};
