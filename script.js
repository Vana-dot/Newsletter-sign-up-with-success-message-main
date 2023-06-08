var form = document.getElementById("myForm");
var emailInput = document.getElementById("email");
var errorMessage = document.querySelector(".error-message");
var pagePrinci = document.querySelector(".page_princi");
var sucessMessage  = document.getElementById("sucess_message");
var imgMobile = document.querySelector(".img_mobile");

window.addEventListener('pageshow', function(event) {
  var emailInput = document.getElementById('email');
  emailInput.value = '';
});



form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  if (emailInput.value.trim() === "") {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Invalid blank field";
  } else if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("invalid");
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Valid email required";
  } else {
    emailInput.classList.remove("invalid");
    errorMessage.style.display = "none";
    pagePrinci.style.display = "none";
    imgMobile.style.display = "none";
    sucessMessage.classList.add("message");

    exibirSucessMessage();
  }
});

emailInput.addEventListener("input", function() {
  emailInput.classList.remove("invalid");
  errorMessage.style.display = "none";
});

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}


function exibirSucessMessage() {
  // var sucessMessage  = document.getElementById("sucess_message");

  sucessMessage.innerHTML = "<div>"+"<img src='./assets/images/icon-success.svg' alt='icon da mensagem de sucesso'>"+"</div>"+"<h1>Thanks for subscribing!</h1> "+"<p> A confirmation email has been sent to "+"<strong>"+ emailInput.value+"</strong>"+
".Please open it and click the button inside to confirm your subscription."+"</p>"+"<button class='subscribe-message'> Dismiss message "+"</button>";
}