/**
 *  Declaro las arreglos globales
 */
var arrLlaves = ["ai", "enter", "imes", "ober", "ufat"];
var arrLlaves2 = ["a", "e", "i", "o", "u"];
var arrCadena = [];
/**
  * enlazo los elementos html a utilizar
  * las declaro como constantes
  */
const cadenaEntrada = document.getElementById("texto-entrada");
const boxSalida = document.getElementById("box-salida");
const cadenaSalida = document.getElementById("texto-salida");
const tipoOperacion = document.getElementById("tipo-operacion");
const botones = document.querySelectorAll("button");
// oculto el textaarea de salida
cadenaSalida.style.visibility = "hidden";
//pongo el foco en el textarea de entrada
document.getElementById("texto-entrada").focus();

function encriptar() {
  var cadenaEntrada = document.getElementById("texto-entrada").value.toLowerCase();

  if (cadenaEntrada == 0 || cadenaEntrada.length == 0) {
    alert("Debe ingresar un texto");

  } else {
    var arrCadena = cadenaEntrada.split("");

    arrCadena.forEach((caracter, index) => {
      (caracter == "a") ? arrCadena[index] = arrLlaves[0]: (caracter == "e") ? arrCadena[index] = arrLlaves[1] :
        (caracter == "i") ? arrCadena[index] = arrLlaves[2] :
        (caracter == "o") ? arrCadena[index] = arrLlaves[3] :
        (caracter == "u") ? arrCadena[index] = arrLlaves[4] :
        0;
    });

    if (botones[3].disabled) activarBotones();

    animacion("Texto Encriptado");
    cadenaSalida.value = arrCadena.join("");
  }
};

function desencriptar() {
  var cadenaEntrada = document.getElementById("texto-entrada").value.toLowerCase();
  var regx;
  if (cadenaEntrada == 0 || cadenaEntrada.length == 0) {
    alert("Debe ingresar un texto");

  } else {
    arrLlaves.forEach((elemento, indice) => {
      regx = RegExp(elemento, 'gm');
      cadenaEntrada = cadenaEntrada.replace(regx, arrLlaves2[indice]);
    });
    animacion("Texto Desencriptado");
    if (botones[3].disabled) activarBotones();
    cadenaSalida.value = cadenaEntrada;
  }
};

function copiar() {
  console.log("copiando");
  cadenaSalida = document.getElementById("texto-salida");
  cadenaSalida.select();
  document.execCommand("copy");
};

function limpiar() {
  tipoOperacion.innerHTML = "Resultado";
  document.getElementById("texto-entrada").value = "";
  cadenaSalida.value = "";
  cadenaSalida.style.visibility = "hidden";
  activarBotones();
  document.getElementById("texto-entrada").focus();
};

function activarBotones() {
  botones[2].disabled = !botones[2].disabled;
  botones[3].disabled = !botones[3].disabled;
};

function animacion(text) {
  cadenaSalida.style.visibility = "hidden";
  boxSalida.style.backgroundImage = "url(./img/giphy.gif)";
  boxSalida.style.backgroundRepeat = "no-repeat";
  boxSalida.style.backgroundSize = "cover";
  setTimeout(() => {
    boxSalida.style.backgroundImage = "url(./img/fondo.jpg)";
    boxSalida.style.backgroundRepeat = "no-repeat";
    boxSalida.style.backgroundSize = "cover";
    tipoOperacion.innerHTML = text;
    cadenaSalida.style.visibility = "visible";
  }, 2000);
}