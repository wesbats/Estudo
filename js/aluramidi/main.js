// Teclas
const listaTeclas = document.querySelectorAll(".tecla");

// Atribiu funções
listaTeclas.forEach(atribuiFuncoes);

// Funções
function atribuiFuncoes(botao) {
  const teclaSom = botao.classList[1];
  const idElementoAudio = `#som_${teclaSom}`;
  botao.onclick = () => tocaSom(idElementoAudio);
  atribuiAcaoTecla(botao);
}

function tocaSom(idElementoAudio) {
  let elementoAuidio = document.querySelector(idElementoAudio);
  if (elementoAuidio && elementoAuidio.localName == "audio") {
    elementoAuidio.currentTime = 0;
    elementoAuidio.play();
  } else {
    console.log("Elemento não encontrado ou Seletor inválido");
  }
}

function atribuiAcaoTecla(botao) {
  botao.onkeydown = (evento) => {
    let tecla = evento.code;
    if (tecla === "Space" || tecla === "Enter" || tecla === "NumpadEnter")
      botao.classList.add("ativa");
  };
  botao.onkeyup = () => botao.classList.remove("ativa");
}
