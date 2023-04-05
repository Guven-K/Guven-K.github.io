window.onload = function() {
    
let myIndex = 0;
showSlides();

function showSlides() {
  var i;
  var x = document.getElementsByClassName("Slideshow");
  if (x.length === 0) {
    console.error('No elements found with class name "Slideshow"');
    return;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  if (myIndex >= x.length) {myIndex = 0}    
  x[myIndex].style.display = 'block';  
  myIndex++;
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
}