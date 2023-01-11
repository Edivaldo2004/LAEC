function sucesso() {
  var x;
  var r = confirm("Copiado para a area de transferência");
  if (r == true) {
    x = "você pressionou OK!";
  }
  else {
    x = "Você pressionou Cancelar!";
  }
  document.getElementById("demo").innerHTML = x;
}

function redirect() {
  window.location.href = "cartao.html"
  document.getElementById("demo").innerHTML = x;
}

function card() {
  let name = document.getElementById("name").value
  let numer = document.getElementById("numer").value
  let age = document.getElementById("age").value
  window.location.href = "informcartao.html"


  let imprimir = document.getElementById("imprimir").innerHTML = name;
  let imprimir2 = document.getElementById("imprimir2").innerHTML = numer;
  let imprimir3 = document.getElementById("imprimir3").innerHTML = age;
}