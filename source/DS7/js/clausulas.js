
function Comprobar()
{
    var numero=parseInt(document.getElementById('number').value)

    if(numero >= 0 & numero <=100)
    {
        var verdadero="<p> El número ingresado "+numero+" esta en el rango </p>";
        document.getElementById('contenido').innerHTML=verdadero;
    }
    else
    {
        var falso="<p> El número ingresado "+numero+" no esta en el rango </p>";
        document.getElementById('contenido').innerHTML=falso;;
    }
}
function ForE()
{
    var arreglo=['Jony','Fiorella','Luis','Edenilson','Kathya'];
    var numero=parseInt(document.getElementById('valor').value)

    if(numero >= 1 & numero <=5)
    {
        var verdadero="<p> El número ingresado "+numero+" esta en el rango </p>";
        for(i=0;i<numero;i++)
        {
           registro=     arreglo[i];
        }
        verdadero+="<p>Valor obtenido del array: "+registro+"</p>"
        document.getElementById('content').innerHTML=verdadero;
    }
    else
    {
        var falso="<p> El número ingresado "+numero+", no esta en el rango. Por favor ingrese un número correcto</p>";
        document.getElementById('content').innerHTML=falso;;
    }
}
function Recorrer()
{
    var respuesta= confirm('¿Deseas recorrer el arrary?');
  
}