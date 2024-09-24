var sideNav = document.getElementById("sideNav")
var openNav = document.getElementById("openNav")
var closeNav = document.getElementById("closeNav")

openNav.addEventListener("click",function(){
  sideNav.style.right = "0"
})

closeNav.addEventListener("click",function(){
  sideNav.style.right = "-50%"
})

