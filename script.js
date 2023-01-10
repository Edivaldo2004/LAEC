//localização

let posicaoInicial;//variavel para capturar a posicao
const capturarLocalizacao = document.getElementById('localizacao');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const map = document.getElementById('mapa');

const sucesso = (posicao) => {//callback de sucesso para captura da posicao
  posicaoInicial = posicao;
  latitude.innerHTML = posicaoInicial.coords.latitude;
  longitude.innerHTML = posicaoInicial.coords.longitude;
};

const erro = (error) => {//callback de error (falha para captura de localizacao)
  let errorMessage;
  switch (error.code) {
    case 0:
      errorMessage = "Erro desconhecido"
      break;
    case 1:
      errorMessage = "Permissão negada!"
      break;
    case 2:
      errorMessage = "Captura de posição indisponível!"
      break;
    case 3:
      errorMessage = "Tempo de solicitação excedido!"
      break;
  }
  console.log('Ocorreu um erro: ' + errorMessage);
};

capturarLocalizacao.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(sucesso, erro);

  map.src =
    "https://maps.google.com/maps?q=" +
    posicaoInicial.coords.latitude + "," +
    posicaoInicial.coords.longitude +
    "&z=10&output=embed";

});


function localidade() {

  const localidade = document.getElementById("local").value;

  map.src = "https://maps.google.com/maps?q=" + localidade + "=2&output=embed";
}