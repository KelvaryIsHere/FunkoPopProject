var slideIndex = 1;
showSlides(slideIndex);

function nextSlide(p) {
  showSlides((slideIndex += p));
}

function currentSlide(v) {
  showSlides((slideIndex = v));
}

function showSlides(v) {
  var thumbs = document.getElementsByClassName("thumb");
  var slides = document.getElementsByClassName("slides");
  var i;

  if (v > slides.length) {
    slideIndex = 1;
  }

  if (v < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < thumbs.length; i++) {
    thumbs[i].className = thumbs[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  thumbs[slideIndex - 1].className += " active";
}

var x = document.getElementById("main-lang-selector");
var y = document.getElementById("parallax");
var z = document.getElementById("language-selector");
var body = document.getElementById("body");

function myLang(t) {
  z.style.display = "block";
  x.style.display = "block";
  y.style.display = "none";
  body.style.overflow = "hidden";
}

window.onclick = function (event) {
  if (event.target == z) {
    z.style.display = "none";
    x.style.display = "none";
    y.style.display = "block";
    body.style.overflow = "auto";
  }
};
