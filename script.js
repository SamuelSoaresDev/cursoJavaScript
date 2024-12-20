//mudar background
const btnMudar = document.getElementById('mudar-background');
let cores = ["cor1", "cor2", "cor3", "cor4"];
let indiceCor = 0;

btnMudar.addEventListener('click', () => {
  document.body.classList = cores[indiceCor]
  setTimeout(() => {
    indiceCor = (indiceCor + 1) % cores.length;
  }, 1000); // tempo de transição
});
//salvar as metas
let lista = [];
const inputPalavra = document.getElementById('palavra');
const btnAdicionar = document.getElementById('adicionar');
const spanLista = document.getElementById('lista');

btnAdicionar.addEventListener('click', () => {
  const palavra = inputPalavra.value.trim();
  if (palavra !== '') {
    lista.push(palavra);
    atualizarLista();
    inputPalavra.value = '';
  }
});

function atualizarLista() {
  spanLista.innerHTML = lista.join(', ');
}
//verificar mensagem
const inputNumero = document.getElementById('numero');
const btnVerificar = document.getElementById('verificar');
const spanMensagem = document.getElementById('mensagem');

btnVerificar.addEventListener('click', () => {
  const numero = parseInt(inputNumero.value);
  inputNumero.value = '';
  if (numero === 2024) {
    spanMensagem.innerText = "”RESILIÊNCIA É passar por momentos difíceis e não perder a fé. É entender que tudo tem o seu tempo e nada acontece por acaso. É tirar lições pra vida de tudo que nos acontece. É entender que Deus está no controle de todas as coisas. É orar e confiar que as coisas vão se ajeitar.”";

  } else if (numero === 2025) {
    spanMensagem.innerText = "”Confie na sua capacidade de vencer os obstáculos que a vida tem lhe apresentado, e aconteça o que acontecer, nunca deixe de acreditar em si, mantendo viva a chama da sua força e persistência. Nunca desista dos seus objetivos, mesmo que eles pareçam impossíveis. A próxima tentativa pode ser vitoriosa.”";
  } else {
    spanMensagem.innerText = "Opção inválida!";
  }
});
function atualizar() {
  //reinicia a pagina
  window.location.reload()
}