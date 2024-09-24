// Navbar
var sideNav = document.getElementById("sideNav")
var openNav = document.getElementById("openNav")
var closeNav = document.getElementById("closeNav")

openNav.addEventListener("click", function () {
  sideNav.style.right = "0"
})

closeNav.addEventListener("click", function () {
  sideNav.style.right = "-50%"
})

// Product Search Functionality
var container = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = container.querySelectorAll("div")
search.addEventListener("keyup", function () {
  var enteredvalue = event.target.value.toUpperCase()

  for (count = 0; count < productlist.length; count++) {
    var productname = productlist[count].querySelector("h2").textContent
    if (productname.toUpperCase().indexOf(enteredvalue) == -1) {
      productlist[count].style.display = "none"
    }
    else {
      productlist[count].style.display = "block"
    }
  }
})