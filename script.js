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
  let name = document.getElementById("name").value;
  let numer = document.getElementById("numer").value;
  let age = document.getElementById("age").value;


  let imprimir = document.getElementById("imprimir").innerHTML = "Nome: " + name;
  let imprimir2 = document.getElementById("imprimir2").innerHTML = "Numero da Conta: " + numer;
  let imprimir3 = document.getElementById("imprimir3").innerHTML = "Agência: " + age;
}
function confirme() {
  var x;
  var r = confirm("Pagamento Confirmado");
  if (r == true) {
    x = "você pressionou OK!";
  }
  else {
    x = "Você pressionou Cancelar!";
  }
  window.location.href = "confirm.html"
  document.getElementById("demo").innerHTML = x;
}