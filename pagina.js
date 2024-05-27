// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageY=ffset is a read - only window property that returns the number of pixel the document has been scrolled vertically.
// slice extracts a section of a string whithout modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels
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