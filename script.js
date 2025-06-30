let faseAtual = 1;
const totalFases = 5;

const codigosCorretos = [
  `function somar(a, b) {\n  return a + b;\n}`,
  `function subtrair(a, b) {\n  return a - b;\n}`,
  `function maiorQue(a, b) {\n  return a > b;\n}`,
  `function saudacao(nome) {\n  function mensagem() {\n    return "Olá, " + nome;\n  }\n  return mensagem();\n}`,
  `const dobrar = (n) => {\n  return \`O dobro de n é \${n * 2}\`;\n}`
];

const codigosErrados = [
  `function somar(a, b {\n  return a + b;\n}`,
  `function subtrair(a, b) {\n  a - b;\n}`,
  `function maiorQue(a, b) {\n  return a = b;\n}`,
  `function saudacao(nome) {\n  function mensagem() {\n    return "Olá, " + nome\n  }\n  mensagem();\n}`,
  `const dobrar = (n) => {\n  return "O dobro de n é \${n * 2}";\n}`
];

const imagensNormais = [
  'img/helloprof.png',
  'img/cinnamoroll.png',
  'img/keroppi.png',
  'img/mymelody.png',
  'img/kuromiraiva.png'
];

const imagensFelizes = [
  'img/hello kitty feliz.gif',
  'img/cinnamoroll feliz.gif',
  'img/keroppi feliz.gif',
  'img/my-melody.gif',
  'img/kuromi.gif'
];

const imagensTristes = [
  'img/hello.png',
  'img/cinnamoroll triste.png',
  'img/keroppi1.png',
  'img/mymelodytriste.png',
  'img/kuromitriste.png'
];

const nomesFases = [
  "Fácil",
  "Médio",
  "Difícil",
  "Muito Difícil",
  "Desafio Final"
];

const coresBackground = [
  "#fdd3e8",
  "#c4e1f7",
  "#d4f7c4",
  "#ffe6f0",
  "#e9d7f5"
];

const coresTitulo = [
  "#fa37af",
  "#1f497d",
  "#3f7d21",
  "#f5a6c9",
  "#c38fe2"
];

const corbotao = [
  "#f777c6",
  "#1f497d",
  "#3f7d21",
  "#f5a6c9",
  "#c38fe2"
];

const mensagensFases = [
  "A Hello Kitty está com dificuldade para corrigir o código abaixo. Vamos ajudá-la?\nO código deve somar dois números, mas está com um erro!",
  "Cinamoroll está triste pois não consegue fazer com que essa função subtraia dois números.\n Vamos ajuda-lo?",
  "Keroppi está tentando comparar dois números, mas o código está errado. \n Ele quer ajuda",
  "My melody pediu ajuda para corrigir essa saudação.",
  "Kuromi esta com raiva pois quer dobrar um número, mas o código está errado.\n Vamos acalmar ela ajudando-a"
];

function verificarCodigo() {
  const codigo = document.getElementById('code').value.trim();
  const codigoCorreto = codigosCorretos[faseAtual - 1].trim();

  const Professora = document.getElementById('Professora'); 
  const mensagem = document.getElementById('mensagem');
  const btnProximaFase = document.getElementById('btnProximaFase');

  const limparCodigo = str => str.replace(/\s+/g, '');

  if (limparCodigo(codigo) === limparCodigo(codigoCorreto)) {
    Professora.src = imagensFelizes[faseAtual - 1];
    Professora.classList.add('gif-feliz');
    mensagem.textContent = 'Parabéns! Você corrigiu o código! 🎀';
    mensagem.style.color = 'white';
    btnProximaFase.style.display = 'inline-block';
  } else {
    Professora.src = imagensTristes[faseAtual - 1];
    Professora.classList.remove('gif-feliz');
    mensagem.textContent = 'Ainda há erro no código!';
    mensagem.style.color = 'red';
    btnProximaFase.style.display = 'none';
  }
}

function irParaProximaFase() {
  if (faseAtual < totalFases) {
    faseAtual++;
    atualizarFase();
  } else {
    // Final do jogo
    document.getElementById('code').style.display = 'none';
    document.querySelector('button').style.display = 'none';
    document.getElementById('btnProximaFase').style.display = 'none';

    const mensagem = document.getElementById('mensagem');
    mensagem.innerHTML = "🎉 Parabéns! Você completou todas as fases! 🎀<br>Obrigado por jogar!";
    mensagem.style.color = 'white';

    // Botão reiniciar
    const btnReiniciar = document.createElement("button");
    btnReiniciar.textContent = "🔁 Reiniciar Jogo";
    btnReiniciar.style.marginTop = "20px";
    btnReiniciar.style.backgroundColor = "#c38fe2";
    btnReiniciar.style.color = "white";
    btnReiniciar.style.fontSize = "18px";
    btnReiniciar.style.border = "none";
    btnReiniciar.style.borderRadius = "5px";
    btnReiniciar.style.padding = "12px 24px";
    btnReiniciar.style.cursor = "pointer";

    btnReiniciar.onclick = () => {
      faseAtual = 1;
      document.getElementById('code').style.display = 'block';
      document.querySelector('button').style.display = 'inline-block';
      mensagem.textContent = '';
      btnReiniciar.remove();
      atualizarFase();
    };

    document.querySelector('.code-editor').appendChild(btnReiniciar);
  }
}

function atualizarFase() {
  const tituloFase = document.getElementById('fase-numero');
  tituloFase.textContent = `${faseAtual} - ${nomesFases[faseAtual - 1]}`;

  document.body.style.backgroundColor = coresBackground[faseAtual - 1];

  const tituloPrincipal = document.querySelector('h1');
  const subtituloFase = document.querySelector('h3');

  tituloPrincipal.style.color = coresTitulo[faseAtual - 1];
  subtituloFase.style.color = coresTitulo[faseAtual - 1];

  document.getElementById('code').value = codigosErrados[faseAtual - 1];
  document.getElementById('mensagem').textContent = '';

  const Professora = document.getElementById('Professora');
  Professora.src = imagensNormais[faseAtual - 1];
  Professora.classList.remove('gif-feliz');

  document.getElementById('btnProximaFase').style.display = 'none';

  // Atualizar texto explicativo no <p class="font cor">
  const textoExplicativo = document.querySelector('p.font.cor');
  textoExplicativo.textContent = mensagensFases[faseAtual - 1];
  textoExplicativo.style.color = coresTitulo[faseAtual - 1];  // muda cor do <p>

  // Atualizar cor do botão Verificar
  const btnVerificar = document.querySelector("button");
  btnVerificar.style.backgroundColor = corbotao[faseAtual - 1];

  // Atualizar cor do botão Próxima Fase
  const btnProxima = document.getElementById('btnProximaFase');
  btnProxima.style.backgroundColor = corbotao[faseAtual - 1];
  btnProxima.style.color = 'white';  
}

// Inicializa a primeira fase ao carregar a página
window.onload = atualizarFase;
