document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.getElementById("NavBar");
  const trigger = document.getElementById("ScrollTrigger");

  let scrollThreshold = trigger.offsetTop;

  window.addEventListener("resize", () => {
    scrollThreshold = trigger.offsetTop;
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > scrollThreshold) {
      navBar.style.top = "-150px";
    } else {
      navBar.style.top = "0";
    }   
  });

  document.addEventListener("mousemove", (e) => {
    if (e.clientY <= 100) {
      navBar.style.top = "0";
    }
  });

  navBar.addEventListener("mouseleave", () => {
    if (window.pageYOffset > scrollThreshold) {
      navBar.style.top = "-150px";
    }
  });
});
