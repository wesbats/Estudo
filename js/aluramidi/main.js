// Teclas
const listaTeclas = document.querySelectorAll(".tecla");

// Atribiu funções
listaTeclas.forEach(atribuiSom);

// Funções
function atribuiSom(botao) {
  let som = botao.innerHTML.toLowerCase();
  botao.onclick = () => tocaSom(som);
}

function tocaSom(som) {
  idPlayer = "#som_tecla_" + som;
  player = document.querySelector(idPlayer);
  player.currentTime = 0;
  player.play();
}
