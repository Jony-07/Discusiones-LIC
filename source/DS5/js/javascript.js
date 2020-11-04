alert("Hola, este es un ejemplo de JavaScript no intrusivo");

function init() {
  var name = prompt("Ingresa tu nombre :", "");
  var edad = parseInt(prompt("Ingresa tu edad:", "")) ;
  var content = document.getElementById("content");

  var contenido =
    "<legend> Bienvenido al ejemplo de JavaScript no invasivo, " +
    name +
    ".</legend>";
  contenido += "<legend>Tu edad es de " + edad + " años.</legend>";

  content.innerHTML = contenido;
}

window.onload = init;
