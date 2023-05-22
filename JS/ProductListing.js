var products = [
  {
    id: 1,
    name: "POP! MEGA DARTH VADER",
    price: "$100.00",
    image: "assets/FunkLisingSample/FunkoVaderFront.png",
    imageHover: "assets/FunkLisingSample/FunkoVaderBack.png",
    stock: "Available Test 1",
    quality: "Brand New Test 1",
  },
  {
    id: 2,
    name: "POP! MEGA BOBA FETT",
    price: "$110.00",
    image: "assets/FunkLisingSample/MegaBobaFront.png",
    imageHover: "assets/FunkLisingSample/MegaBobaBack.png",
    stock: "Available Test 2",
    quality: "Brand New Test 2",
  },
  {
    id: 3,
    name: "POP! DIE-CAST IRON MAN",
    price: "$50.00",
    image: "assets/FunkLisingSample/IronManFront.png",
    imageHover: "assets/FunkLisingSample/IronManBack.png",
    stock: "Available Test 3",
    quality: "Brand New Test 3",
  },
  {
    id: 4,
    name: "VINYL GOLD 5 NOTORIOUS B.I.G. IN WHITE SUIT",
    price: "$50.00",
    image: "assets/FunkLisingSample/BiggieFront.png",
    imageHover: "assets/FunkLisingSample/BiggieBack.png",
    stock: "Available Test 3",
    quality: "Brand New Test 3",
  },
  // Add more product objects here as needed
];

var productContainer = document.querySelector(".product-list-featured");

// Loop through the products data
products.forEach(function (product) {
  // Create a div element for each product item
  var productItem = document.createElement("div");
  productItem.classList.add("product");

  // Create a div element for the product image
  var productImage = document.createElement("div");
  productImage.classList.add("product-image");

  // Create an anchor element for the product link
  var productLink = document.createElement("a");
  productLink.href = "product-item.html";

  // Create an img element for the product image
  var image = document.createElement("img");
  image.src = product.image;
  image.alt = "Product Image";

  // Set the mouseover and mouseout event handlers for image hover
  image.onmouseover = function () {
    this.src = product.imageHover;
  };

  image.onmouseout = function () {
    this.src = product.image;
  };

  // Append the image element to the anchor element
  productLink.appendChild(image);

  // Append the anchor element to the product image div
  productImage.appendChild(productLink);

  // Create a div element for the product details
  var productDetails = document.createElement("div");
  productDetails.classList.add("product-details");

  // Create a heading element for the product title
  var productTitle = document.createElement("h3");
  productTitle.classList.add("product-title");
  productTitle.textContent = product.name;

  // Create a paragraph element for the product price
  var productPrice = document.createElement("p");
  productPrice.classList.add("product-price");
  productPrice.textContent = product.price;

  // Append the title and price elements to the product details div
  productDetails.appendChild(productTitle);
  productDetails.appendChild(productPrice);

  // Append the product image and details divs to the product item div
  productItem.appendChild(productImage);
  productItem.appendChild(productDetails);

  // Append the product item div to the product container
  productContainer.appendChild(productItem);

  productItem.addEventListener("click", function () {
    selectProduct(product.id);
  });
});

function selectProduct(productId) {
  var selectedProduct = products.find(function (product) {
    return product.id === productId;
  });

  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));

  // Redirect to the product details page
  window.location.href = "product-item.html";
}
