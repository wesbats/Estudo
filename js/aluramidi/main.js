// Teclas
botaoPom = document.querySelector(".tecla_pom");
botaoClap = document.querySelector(".tecla_clap");
botaoTim = document.querySelector(".tecla_tim");
botaoPuff = document.querySelector(".tecla_puff");
botaoSplash = document.querySelector(".tecla_splash");
botaoToim = document.querySelector(".tecla_toim");
botaoPsh = document.querySelector(".tecla_psh");
botaoTic = document.querySelector(".tecla_tic");
botaoTom = document.querySelector(".tecla_tom");

// Atribiu funções
botaoPom.onclick = () => tocaSom("pom");
botaoClap.onclick = () => tocaSom("clap");
botaoTim.onclick = () => tocaSom("tim");
botaoPuff.onclick = () => tocaSom("puff");
botaoSplash.onclick = () => tocaSom("splash");
botaoToim.onclick = () => tocaSom("toim");
botaoPsh.onclick = () => tocaSom("psh");
botaoTic.onclick = () => tocaSom("tic");
botaoTom.onclick = () => tocaSom("tom");

// Funções
function tocaSom(som) {
  idPlayer = "#som_tecla_" + som;
  player = document.querySelector(idPlayer);
  player.currentTime = 0;
  player.play();
}
