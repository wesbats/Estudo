// Seletores
const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button');
const displayTimer = document.querySelector('#timer');
const title = document.querySelector('.app__title');
const banner = document.querySelector('.app__image');

const duracaoFoco = 1500;
const duracaoCurto = 300;
const duracaoLongo = 900;

// Altera contexto
focoBt.addEventListener('click', () => alteraContexto('foco'))
curtoBt.addEventListener('click', () => alteraContexto('descanso-curto'))
longoBt.addEventListener('click', () => alteraContexto('descanso-longo'))

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
