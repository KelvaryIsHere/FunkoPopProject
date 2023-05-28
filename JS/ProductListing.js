var products = [
  {
    id: 1,
    name: "POP! MEGA DARTH VADER",
    price: "$100.00",
    image: "assets/FunkLisingSample/FunkoVaderFront.png",
    imageHover: "assets/FunkLisingSample/FunkoVaderBack.png",
    stock: "Available Test 1",
    quality: "Brand New Test 1",
    description:
      "Feel a stellar pull towards the Funko exclusive Pop! Mega Darth Vader from Star Wars™. An entire galaxy of adventures awaits! Bring home all the adventures by uniting all your favorite characters from memorable movie and television series moments. Celebrate the most stellar fandom of them all. Vinyl bobblehead is approximately 18-inches tall.",
  },
  {
    id: 2,
    name: "POP! MEGA BOBA FETT",
    price: "$110.00",
    image: "assets/FunkLisingSample/MegaBobaFront.png",
    imageHover: "assets/FunkLisingSample/MegaBobaBack.png",
    stock: "Available Test 2",
    quality: "Brand New Test 2",
    description:
      "Boba Fett, the unaltered clone/son of Jango Fett, reemerges from the shadows wearing his father's famous armor and blaster at the ready. Celebrate the most stellar fandom of them all with the Star Wars™ Mega Pop! Boba Fett. Vinyl figure is 18-inches tall.",
  },
  {
    id: 3,
    name: "POP! DIE-CAST IRON MAN",
    price: "$50.00",
    image: "assets/FunkLisingSample/IronManFront.png",
    imageHover: "assets/FunkLisingSample/IronManBack.png",
    stock: "Available Test 3",
    quality: "Brand New Test 3",
    description:
      "Behold! The new premiere Pop! figure, designed to be the front and center, top-shelf collectible, the Die-cast Pop! series. These figures come in die-cast acrylic cases featuring etched details and fasten to the base of the case. The case can be opened, and the figure detached from the base, but with a clear view of all sides of your collectible, you won’t need to unbox it to see all the details. These collectibles come in a telescoping box that features foil details and a foam inner linings to further protect the collectible while in transit. Continue your Die-cast Pop! collection with Marvel’s Pop! Iron Man. Bring home the classic hero Iron Man, aka Tony Stark, as a Die-cast Pop! to crown your Marvel lineup.Die-cast figure is approximately 4-inches tall. Approximate case dimensions: 4.5“W x 6.25“H x 3.5“D.",
  },
  {
    id: 4,
    name: "VINYL GOLD 5 NOTORIOUS B.I.G. IN WHITE SUIT",
    price: "$50.00",
    image: "assets/FunkLisingSample/BiggieFront.png",
    imageHover: "assets/FunkLisingSample/BiggieBack.png",
    stock: "Available Test 4",
    quality: "Brand New Test 4",
    description:
      "Go for GOLD in your music collection with the new Funko GOLD Notorious B.I.G. premium vinyl figure. Notorious B.I.G. is dressed to the nines in his white suit for this 5-inch tall collectible. GOLD is the perfect way to commemorate some of your favorite, iconic music artists in your collection, and each figure comes in a sleek, display-ready box that is easy to stack with other GOLD collectibles. Vinyl figure is 5-inches tall.",
  },
  // Add more product objects here as needed
];
var collections = [
  {
    id: 1,
    name: "POP! INDIANA JONES WITH SATCHEL",
    price: "$12.00",
    image: "assets/FunkLisingSample/JonesFront.png",
    imageHover: "assets/FunkLisingSample/JonesBack.png",
    stock: "Available Collection 1",
    quality: "Brand New Collection 1",
    description:
      "Dr. Jones is on a mission to prevent historical treasures from falling into the wrong hands. Help this legendary archaeologist recover the biblical Ark of the Covenant by joining Pop! Indiana Jones™ on his next expedition. This valuable relic doesn’t belong in a museum—it belongs in your Indiana Jones and the Raiders of the Lost Ark™ collection! Vinyl bobblehead is approximately 4.65-inches tall.",
  },
  {
    id: 2,
    name: "SNAPS! NIGHTMARE BONNIE",
    price: "$9.00",
    image: "assets/FunkLisingSample/NightmareBonnieFront.png",
    imageHover: "assets/FunkLisingSample/NightmareBonnieBack.png",
    stock: "Available Collection 2",
    quality: "Brand New Collection 2",
    description:
      "Survive the night at Freddy Fazbear’s in a snap! Close in on Nightmare Bonnie as a Funko SNAPS! collectible. SNAPS! Nightmare Bonnie has six different pieces that snap into place, including a head, two interchangeable faces, a torso, legs, and a guitar. Lock down SNAPS! Nightmare Bonnie and capture him for your Five Nights at Freddy’s set. Collect and mix them all! Vinyl collectible is approximately 3.89-inches tall.",
  },
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

//Collections

var productContainer = document.querySelector(".product-list");

collections.forEach(function (collection) {
  // Create a div element for each product item
  var productItem = document.createElement("div");
  productItem.classList.add("product");

  // Create a div element for the product image
  var productImage = document.createElement("div");
  productImage.classList.add("product-image");

  // Create an anchor element for the product link
  var productLink = document.createElement("a");
  productLink.href = "product-item-collection.html";

  // Create an img element for the product image
  var image = document.createElement("img");
  image.src = collection.image;
  image.alt = "Product Image";

  // Set the mouseover and mouseout event handlers for image hover
  image.onmouseover = function () {
    this.src = collection.imageHover;
  };

  image.onmouseout = function () {
    this.src = collection.image;
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
  productTitle.textContent = collection.name;

  // Create a paragraph element for the product price
  var productPrice = document.createElement("p");
  productPrice.classList.add("product-price");
  productPrice.textContent = collection.price;

  // Append the title and price elements to the product details div
  productDetails.appendChild(productTitle);
  productDetails.appendChild(productPrice);

  // Append the product image and details divs to the product item div
  productItem.appendChild(productImage);
  productItem.appendChild(productDetails);

  // Append the product item div to the product container
  productContainer.appendChild(productItem);

  productItem.addEventListener("click", function () {
    selectProductCollection(collection.id);
  });
});

function selectProductCollection(productId) {
  var selectedProductCollection = collections.find(function (collections) {
    return collections.id === productId;
  });

  localStorage.setItem(
    "selectedProductCollection",
    JSON.stringify(selectedProductCollection)
  );

  // Redirect to the product details page
  window.location.href = "product-item-collection.html";
}

function launchResponsiveMenu() {
  var x = document.getElementById("res-menu-mobile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.addEventListener("DOMContentLoaded", function () {
  var prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  var bodyElement = document.body;

  if (prefersDarkMode) {
    bodyElement.classList.add("dark-mode");
  }
});
