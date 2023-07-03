document.addEventListener("DOMContentLoaded", function() {
  var prevScrollpos = window.pageYOffset;
  var navBar = document.getElementById("NavBar");

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navBar.style.top = "0";
    } else {
      navBar.style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
  };

  navBar.onmouseenter = function() {
    navBar.style.top = "0";
  };

  navBar.onmouseleave = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
      navBar.style.top = "-150px";
    }
  };
});
