window.onload = function(){
  var i =0;
  while(i<8){
    if(juego[i].g == vars['g']){  
    var capa = document.getElementById('fila');

    var h2 = document.createElement('h2');
    h2.innerHTML = juego[i].titulo;

    capa.appendChild(h2);

    var div1 = document.createElement('div');
    div1.id = 'espacio';

    var img1 = document.createElement('img');
    img1.src = juego[i].captura;


    var p1 = document.createElement('p');
    p1.innerHTML = juego[i].informacion;

       div1.appendChild(img1);
       div1.appendChild(p1);

       capa.appendChild(div1);

       var div2 = document.createElement('div');
       div2.id = 'datos';

       var img2 = document.createElement('img');
    img2.src = juego[i].portada;

    var h3 = document.createElement('h3');
    h3.innerHTML = 'Plataformas';

    var p2 = document.createElement('p');
    p2.innerHTML = juego[i].plataformas;

    div2.appendChild(img2);
    div2.appendChild(h3);
    div2.appendChild(p2);

    capa.appendChild(div2);
    }
  	i++;
  }
}