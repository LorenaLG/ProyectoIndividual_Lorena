function mensajes(){
	var nombre = prompt("¿Cuál es tu nombre?","Texto por defecto");
	if(confirm("¿Seguro que tu nombre es: " +nombre+"?")){
		alert("Bienvenid@ "+nombre);
	}

	var span  = document.getElementById('name');
	span.innerHTML = nombre;
}