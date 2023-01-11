
function funcao2() {
  var x;
  var r = confirm("Adicionado ao carrinho");
  if (r == true) {
    x = "você pressionou OK!";
  }
  else {
    x = "Você pressionou Cancelar!";
  }
  window.location.href = "pagar.html"
  document.getElementById("demo").innerHTML = x;
}