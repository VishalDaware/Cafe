window.addEventListener("scroll", function () {
    document.querySelector(".home_navbar").classList.toggle("scrolled", window.scrollY > 50);
  });