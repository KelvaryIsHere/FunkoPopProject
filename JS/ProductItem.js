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

var selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
var slideshowThumb = document.querySelector(".thumb");

// Check if there is a selected product
if (selectedProduct) {
  // Retrieve the product content elements
  var productTitleElement = document.querySelector(".product-title-item");
  var productPriceElement = document.querySelector(".product-price-item");
  var productStockElement = document.querySelector(".product-stock-status");
  var productQualityElement = document.querySelector(".product-quality-status");
  var productDescriptionElement = document.querySelector(
    ".product-description-item"
  );
  var thumbnailImage1 = document.querySelector("#thumb-front");
  var thumbnailImage2 = document.querySelector("#thumb-back");
  var slideshowImage1 = document.querySelector("#slide-front");
  var slideshowImage2 = document.querySelector("#slide-back");

  // Set the source of the slideshow image based on the index
  slideshowImage1.src = selectedProduct.image;
  slideshowImage1.alt = "Funko Pop";

  thumbnailImage1.src = selectedProduct.image;
  thumbnailImage1.alt = "Funko Pop";

  slideshowImage2.src = selectedProduct.imageHover;
  slideshowImage2.alt = "Funko Pop";

  thumbnailImage2.src = selectedProduct.imageHover;
  thumbnailImage2.alt = "Funko Pop";

  // Update the product content with the retrieved data
  productTitleElement.textContent = selectedProduct.name;
  productPriceElement.textContent = selectedProduct.price;
  productDescriptionElement.textContent = selectedProduct.description;
  productStockElement.textContent = selectedProduct.stock;
  productQualityElement.textContent = selectedProduct.quality;

  // Clear the selected product data from local storage (optional)
}

document.addEventListener("DOMContentLoaded", function () {
  var slideshow = document.querySelector(".content");
  var next = document.querySelector(".next");
  var prev = document.querySelector(".prev");

  slideshow.addEventListener("mousemove", function (event) {
    var img = this.querySelector("#slide-front");
    var rect = img.getBoundingClientRect();
    var x = ((event.pageX - rect.left) / rect.width) * 100;
    var y = ((event.pageY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = x + "% " + y + "%";
    thumbnailImage1.style.visibility = "hidden";
    thumbnailImage2.style.visibility = "hidden";
    next.style.visibility = "hidden";
    prev.style.visibility = "hidden";
  });

  slideshow.addEventListener("mouseout", function (event) {
    thumbnailImage1.style.visibility = "visible";
    thumbnailImage2.style.visibility = "visible";
    next.style.visibility = "visible";
    prev.style.visibility = "visible";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var slideshow = document.querySelector(".content");

  slideshow.addEventListener("mousemove", function (event) {
    var img = this.querySelector("#slide-back");
    var rect = img.getBoundingClientRect();
    var x = ((event.pageX - rect.left) / rect.width) * 100;
    var y = ((event.pageY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = x + "% " + y + "%";
    thumbnailImage1.style.visibility = "hidden";
    thumbnailImage2.style.visibility = "hidden";
  });

  slideshow.addEventListener("mouseout", function (event) {
    thumbnailImage1.style.visibility = "visible";
    thumbnailImage2.style.visibility = "visible";
  });
});

window.addEventListener("popstate", function () {
  location.reload();
});
