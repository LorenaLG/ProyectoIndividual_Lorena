document.write("<div id=\"slider\">	<h1>Harry Potter</h1> <\/div>");
document.write("<header>");
document.write("<div class=\"nav\">");
document.write("<div class=\"menu\">Menu<\/div>");  
document.write("<nav>");  
document.write("<ul class=\"flexnav\"> ");  
document.write("<li><a href=\"index.html\">Inicio</a></li>");
document.write("<li><a href=\"rowling.html\">J. K. Rowling<\/a><\/li> ");  
document.write("<li><a href=\"libros.html\">Libros<\/a> "); 
document.write("<ul>");  
document.write("<li><a href=\"book.html?b=1\">Harry Potter y la piedra filosofal<\/a><\/li>");  
document.write("<li><a href=\"book.html?b=2\">Harry Potter y la cámara secreta<\/a><\/li>");
document.write("<li><a href=\"book.html?b=3\">Harry Potter y el prisionero de Azkaban<\/a><\/li>");  
document.write("<li><a href=\"book.html?b=4\">Harry Potter y el cáliz de fuego<\/a><\/li>");  
document.write("<li><a href=\"book.html?b=5\">Harry Potter y la Orden del Fénix<\/a><\/li>");  
document.write("<li><a href=\"book.html?b=6\">Harry Potter y el misterio del príncipe<\/a><\/li>");  
document.write("<li><a href=\"book.html?b=7\">Harry Potter y las reliquias de la muerte<\/a><\/li>");  
document.write("<\/ul>");  
document.write("<\/li>");  
document.write("<li><a href=\"peliculas.html\">Películas<\/a>");  
document.write("<ul>");  
document.write("<li><a href=\"movie.html?m=1\">Harry Potter y la piedra filosofal<\/a><\/li>");  
document.write("<li><a href=\"movie.html?m=2\">Harry Potter y la cámara secreta<\/a><\/li>");  
document.write("<li><a href=\"movie.html?m=3\">Harry Potter y el prisionero de Azkaban<\/a><\/li>");  
document.write("<li><a href=\"movie.html?m=4\">Harry Potter y el cáliz de fuego<\/a><\/li>"); 
document.write("<li><a href=\"movie.html?m=5\">Harry Potter y la Orden del Fénix<\/a><\/li>");  
document.write("<li><a href=\"movie.html?m=6\">Harry Potter y el misterio del príncipe<\/a><\/li>");  
document.write("<li><a href=\"movie.html?m=7\">Harry Potter y las reliquias de la muerte I<\/a><\/li>");  
document.write("<li><a href=\"movie.html?m=8\">Harry Potter y las reliquias de la muerte II<\/a><\/li>");   
document.write("<\/ul>");  
document.write("<\/li>");  
document.write("<li><a href=\"videojuegos.html\">Videojuegos<\/a>");  
document.write("<ul>");  
document.write("<li><a href=\"games.html?g=1\">Harry Potter y la piedra filosofal<\/a><\/li><\/ul");   
document.write("<li><a href=\"games.html?g=2\">Harry Potter y la cámara secreta<\/a><\/li>");
document.write("<li><a href=\"games.html?g=3\">Harry Potter y el prisionero de Azkaban<\/a><\/li> ");
document.write("<li><a href=\"games.html?g=4\">Harry Potter y el cáliz de fuego<\/a><\/li>");
document.write("<li><a href=\"games.html?g=5\">Harry Potter y la Orden del Fénix<\/a><\/li> ");
document.write("<li><a href=\"games.html?g=6\">Harry Potter y el misterio del príncipe<\/a><\/li> ");
document.write("<li><a href=\"games.html?g=7\">Harry Potter y las reliquias de la muerte I<\/a><\/li>");
document.write("<li><a href=\"games.html?g=7\">Harry Potter y las reliquias de la muerte II<\/a><\/li>");
document.write("<\/ul>");
document.write("<\/li>");
document.write("<li><a href=\"personajes.html\">Personajes<\/a><\/li>");
document.write("<\/ul>");
document.write("<\/nav>");
document.write("<\/div><\/header><div class=\"pagina\">");

document.write("<div class=\"contenedor\">");
document.write("<div class=\"fila\">");

document.write("<ul id=\"cajas\">");

for(var i=0; i<8;i++){
document.write("<li class=\"item tramo\"> ");
document.write("<a class=\"animacion\" href='"+film[i].refmovie+"'>");
document.write("<span class=\"capa\"><\/span> ");
document.write("<span class=\"capa-img\">"+film[i].titulo+"<\/span>");
document.write("<\/a>");
document.write("<img src='"+film[i].afiche+"'>");
document.write("<\/li>");	
}

document.write("<\/ul>");
document.write("<\/div><\/div><\/div>");
document.write("<footer>");
document.write("<p class=\"creditos\">© PILET-Progra 2013 Harry Potter. Lenguaje Interpretado en el cliente.<br>");
document.write("Elaborado por: <a href=\"info.html\">Lorena Esmeralda López Guadrón<\/a><\/p>");
document.write("<\/footer>");