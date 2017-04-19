var coders = [{nombre:"Fiorella Quispe", ruta:"1.png"},
              {nombre:"Lourdes Vilchez", ruta:"2.png"},
              {nombre:"Leydi Maldonado", ruta:"3.png"},
              {nombre:"Miriam Mendoza", ruta:"4.png"},
              {nombre:"Elizabeth Condori", ruta:"5.png"},
              {nombre:"Arantza Burga", ruta:"6.png"}]


var contenedor= document.getElementsByTagName("body")[0];
var section=document.createElement("section");
var titulo=document.createElement("h2");
titulo.setAttribute("id","titulo");
titulo.appendChild(document.createTextNode("Nuestras Coders"));
section.appendChild(titulo);

function galeria(array){
  array.forEach(function(elemento){

    var figure=document.createElement("figure");
    var img=document.createElement("img");
    var figCaption=document.createElement("figcaption");

    section.setAttribute("class","seccion");
    img.setAttribute("class","coders");
    img.setAttribute("src","assets/img/coders/" + elemento.ruta);
    figCaption.appendChild(document.createTextNode(elemento.nombre));

    figure.appendChild(img);
    figure.appendChild(figCaption);
    section.appendChild(figure);
    contenedor.appendChild(section);

  });

}

galeria(coders);
