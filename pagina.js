// Element.getBoundingClientRect() El método devuelve el tamaño de un elemento y su posición relativa a la ventana gráfica.
// pageY=ffset es una propiedad de ventana de solo lectura que devuelve el número de píxeles que el documento se ha desplazado verticalmente.
// slice extracts una sección de una cadena sin modificar la cadena original
// offsetTop: un número que representa la posición superior del elemento, en píxeles
document.getElementById('toggleButton').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active'); // Alternar la clase "active" para mostrar u ocultar el menú
});
// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close link ************
const toggleButton = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-Container');
const links = document.querySelector('.links');



const  navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
// ********** fixed navbar ************
window.addEventListener("scroll", function (){
   const scrollHeight = window.pageYOffset;
   const navHeight = navbar.getBoundingClientRect().height;
    
   if (scrollHeight > navHeight){
       navbar.classList.add('fixed-nav');
   }
   else {
       navbar.classList.remove('fixed-nav');
   }
    
   if (scrollHeight > 500) {
       topLink.classList.add("show-link");
   }
   else {
       topLink.classList.remove("show-link")
   }
});
// ********** smooth scroll ************
// select link
const srollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
   link.addEventListener("click", function (e) {
       // prevent default
       e.preventDefault();
       // navigate to specific spot
       const id = e.currentTarget.getAttribute('href');
       const element = document.getElementById(id);
       // calculate the heights
       const navHeight = navbar.getBoundingClientRect().height;
       const containerHeight = linksContainer.getBoundingClientRect().height;
       const fixedNav = navbar.classList.contains("fixed-nav");
       let position = element.offsetTop - navHeight;
       
       if (!fixedNav){
           position = position - navHeight;
       }
       
       if (navHeight > 82) {
           position = position + containerHeight;
       }
       
       window.scrollTo({
          left: 0,
          top: position,
       });
       linksContainer.style.height = 0;
   });
});

// JavaScript
  document.addEventListener("DOMContentLoaded", function() {
    // Obtener el año actual y mostrarlo en el párrafo con ID "year"
    var yearElement = document.getElementById("year");
    var currentYear = new Date().getFullYear();
    yearElement.textContent = "Año actual: " + currentYear;

    // Obtener el rectángulo de límites del elemento #content y mostrar sus dimensiones
    //EXPLICACION: Un elemento HTML no puede ser más ancho que el valor indicado en la propiedad max-width , incluso hasta cuando el valor de width sea mayor. Por ejemplo, si una caja tiene un ancho de 300 píxeles, pero su ancho máximo está establecido en 200 píxeles, medirá un ancho de 200 píxeles
    var contentElement = document.getElementById("content");
    var dimensions = contentElement.getBoundingClientRect();
    var dimensionsInfo = "Dimensiones del elemento: " + dimensions.width + "x" + dimensions.height;
    document.getElementById("dimensions").textContent = dimensionsInfo;

    // Método slice para cortar el texto y mostrarlo en el párrafo con ID "sliced"
    var text = "EMILIO MENDOZA PICENO Y JOESSEL DANIEL PINEDA NARANJO 430-B";
    var slicedText = text.slice(0, 59); // Cortar el texto desde el inicio hasta el índice 11
    document.getElementById("sliced").textContent = "AUTORES: " + slicedText;

    // Obtener la posición de desplazamiento vertical de la ventana y mostrarla en el párrafo con ID "scroll"
    var scrollTop = window.scrollY || window.pageYOffset;
    document.getElementById("scroll").textContent = "Posición de desplazamiento superior de la ventana: " + scrollTop;
  });
