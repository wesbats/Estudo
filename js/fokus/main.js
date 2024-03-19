// Seletores
const html = document.querySelector('html');
const contexto = () => html.getAttribute('data-contexto');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button');
const displayTimer = document.querySelector('#timer');
const title = document.querySelector('.app__title');
const banner = document.querySelector('.app__image');

const inputMusica = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const somPlay = new Audio('/sons/play.wav');
const somPause = new Audio('/sons/pause.mp3');
const somBeep = new Audio('/sons/beep.mp3');
musica.loop = true;

const temporizadorBt = document.querySelector('#start-pause');
const duracaoSegundos = {
    'foco': 30,
    'descanso-curto': 10,
    'descanso-longo': 20
}
var contador = null;
var temporizadorIntervalo = null;

// Atribuindo funcionalidades
focoBt.addEventListener('click', () => alteraContexto('foco'))
curtoBt.addEventListener('click', () => alteraContexto('descanso-curto'))
longoBt.addEventListener('click', () => alteraContexto('descanso-longo'))
inputMusica.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})
temporizadorBt.addEventListener('click', () => marcaTemporizador());

// Funcoes
function alteraContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);
    botoes.forEach((botao) => botao.classList.remove('active'));

    switch (contexto) {
        case 'foco':
            focoBt.classList.add('active');
            title.innerHTML =
                `<h1 class="app__title">
                    Otimize sua produtividade,<br>
                    <strong class="app__title-strong">mergulhe no que importa.</strong>
                </h1>`
            break;
        case 'descanso-curto':
            curtoBt.classList.add('active');
            title.innerHTML =
                `<h1 class="app__title">
                    Que tal dar uma respirada?<br>
                    <strong class="app__title-strong">Faça uma pausa curta!</strong>
                </h1>`
            break;
        case 'descanso-longo':
            longoBt.classList.add('active');
            title.innerHTML =
                `<h1 class="app__title">
                    Hora de voltar à superfície.<br>
                    <strong class="app__title-strong">Faça uma pausa longa.</strong>
                </h1>`
            break;
    }
}

function marcaTemporizador() {
    if (temporizadorIntervalo) {
        stopContador();
        somPause.currentTime = 0;
        somPause.play();
        return
    }
    runContador();
}

function runContador() {
    contador = duracaoSegundos[contexto()] + 1;
    temporizadorIntervalo = setInterval(conta, 1000)
    somPlay.currentTime = 0;
    somPlay.play();
}

function stopContador() {
    clearInterval(temporizadorIntervalo);
    temporizadorIntervalo = null;
    contador = null;
}

function conta() {
    contador -= 1;
    console.log(contador);
    if (contador == 0) {
        stopContador();
        somBeep.currentTime = 0;
        somBeep.play();
    }
}