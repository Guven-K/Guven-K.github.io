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

  var slideIndex2 = 0;
  showSlides2();
  function showSlides2() {
      var i;
      var slides = document.getElementsByClassName("Slideshow2");
      for (i = 0; i < slides.length; i++) {
          slides[i].classList.add("slide-right"); // Add "slide-right" class for slide to right effect
          slides[i].classList.add("zoom-in"); // Add "zoom-in" class for zoom in effect
          slides[i].style.display = "none";
      }

      slideIndex2++;
      if (slideIndex2 > slides.length) {
          slideIndex2 = 1
      }

      slides[slideIndex2 - 1].style.display = "block";
      setTimeout(showSlides2, 4000); // Change image every 4 seconds
  }
}
