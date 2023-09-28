var nombre = prompt ("Ingresa tu Nombre");
var c = 0
var i = 0
var saludo = alert("Bienvenido" ,nombre);
var p1 = prompt("¿En que departamento se encuentra el lago titicaca?\nA: Tacna\nB: Puno\nC: Cuzco");
if(p1 == "B"){
    c = c + 1;
}else{
    i = i + 1;
}
var p2 = prompt("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA: Lima e Ica\nB: Arequipa y Tacna\nC: Piura y Tumbes");
if(p2 == "C"){
    c = c + 1;
}else{
    i = i + 1;
}
var p3 = prompt("Plato típico de la Selva peruana\nA: Tacacho con cecina\nB: Arroz con pollo\nC: Lomo saltado");
if(p3 == "A"){
    c = c + 1;
}else{
    i = i + 1;
}
if(c > i){
    document.write(nombre + ",  Lo has hecho bien:<br>");
    document.write(" Respuestas Correctas:" +c+"");
    document.write(" <br> Respuestas Incorrectas: " +i);
}else{
    document.write(nombre + ",  Vuelve a intentarlo:<br>");
    document.write(" Respuestas Correctas: " +c+ "");
    document.write(" Respuestas Incorrectas: " +i);
}