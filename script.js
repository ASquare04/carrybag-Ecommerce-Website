// alert("Shipping is not currently available for North-Eastern states")
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome,
}

document.getElementById("loginNow").onclick = function(){
  window.location.href = "file:///C:/Users/Anmol%20Arora/Documents/UDEMY/Website/login.html";
};