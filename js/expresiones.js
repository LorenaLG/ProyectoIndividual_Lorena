var x=0,y=0, z=0;
function validar(id){
var texto = document.getElementById(id).value;

	var k,l,m;
	var patron, a, d;

	switch(id){
		case 'txtNombre':
			patron = /^([a-zA-ZÑñÁáÉéÍíÓóÚú\s]){5,}$/; 
			a = 0;
		break
		case 'txtEmail':		
			patron = /^([a-zA-Z0-9._-]){5,}@[a-z]{3,}.com$/;
			a = 1;
		break
		case 'msj':
			patron = /[\w]{1,}$/;
			a = 2;
		break
	}

	if(a==0){d = document.getElementById('name');} 
	else if(a==1){d = document.getElementById('email');} 
	else if(a==2){d=document.getElementById('mensaje');}

	if(a==0 || a==1 || a==2){
		if(patron.test(texto)){
		d.src= 'img/iconos/si.png';
		if(a==0){x=1;} 
		else if(a==1){y=1;} 
		else if(a==2){z=1;}
		} else {
			d.src= 'img/iconos/no.png';
			if(a==0){x=0;} 
			else if(a==1){y=0;} 
			else if(a==2){z=0;}
		}
		var suma = x+y+z;
	}	

	k = document.getElementById('txtNombre').value.length;
	l = document.getElementById('txtEmail').value.length;
	m = document.getElementById('msj').value.length;

	if(suma==3&&(k>0 && l>0 && m>0)) {
		document.getElementById('envio').style.display = 'block';
	}else{
		document.getElementById('envio').style.display = 'none';
	}
}