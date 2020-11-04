var registro = [];
function Jpop() {

  var nombre = document.getElementById('campo1').value;
  var apellido = document.getElementById('campo2').value;

  var dato = [nombre, apellido];
  registro.push(dato);

  document.getElementById("contenido").innerHTML = "";
  document.getElementById("campo1").value = "";
  document.getElementById("campo2").value = "";
 
  var table = "<table>";
  table += "<tr>";
  table += "<td> Nombre</td>";
  table += "<td> Apellido </td>";
  table += "</tr>";

  for (var i = 0; i < registro.length; i++) {
    table += "<tr>";
    table += "<td>" + registro[i][0] + "</td>";
    table += "<td>" + registro[i][1] + "</td>";
    table += "</tr>";
  
  }
  table +="</table>";
  document.getElementById("contenido").innerHTML=table;
}
function Jpush()
{
    registro.pop()

    var table = "<table>";
  table += "<tr>";
  table += "<td> Nombre</td>";
  table += "<td> Apellido </td>";
  table += "</tr>";

  for (var i = 0; i < registro.length; i++) {
    table += "<tr>";
    table += "<td>" + registro[i][0] + "</td>";
    table += "<td>" + registro[i][1] + "</td>";
    table += "</tr>";
  
  }
  table +="</table>";
  document.getElementById("contenido").innerHTML=table;
}
