// Teclas
const listaTeclas = document.querySelectorAll(".tecla");

// Atribiu funções
listaTeclas.forEach(atribuiSom);

// Funções
function atribuiSom(botao) {
  const teclaSom = botao.classList[1];
  const idAudio = `#som_${teclaSom}`;
  botao.onclick = () => tocaSom(idAudio);
}

function tocaSom(idAudio) {
  let player = document.querySelector(idAudio);
  player.currentTime = 0;
  player.play();
}
