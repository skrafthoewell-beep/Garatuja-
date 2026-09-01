const currentPlayer = document.querySelector('.currentPlayer');

let player = 'X';
let selected = [];

let positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9], 
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 6, 9], 
    [1, 5, 9], 
    [3, 5, 7]

];

function init() {
 selected= [];
 
 currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
 document.querySelectorAll('.game button').forEach((item) => {
  item.innerHTML = "";
  item.addEventListener("click", newMove);
    
 });
}

init(); 

function newMove(event) {
    const index = event.target.getAttribute('data-index');
//     nesse caso, essa funcao vai pegar o atributo data-index do botão que foi clicado e armazenar na variavel index. Esse atributo é usado para identificar qual botão foi clicado e qual posição ele representa no tabuleiro.
// 
event.target.innerHTML = player;
event.target.removeEventListener("click", newMove);
selected[index] = player;
// nesse caso, o selected vai armazenar o valor do jogador atual (X ou O) na posição correspondente ao botão clicado. Por exemplo, se o jogador X clicar no botão com data-index 1, selected[1] vai receber o valor 'X'.

setTimeout(() => {
    // o setTImeout é usado para atrasar a execução do código dentro da função. Nesse caso, ele está atrasando a verificação do vencedor e a troca de jogador em 100 milissegundos. Isso é feito para garantir que o DOM seja atualizado antes de verificar o vencedor e trocar o jogador.
   check();
   
}, [100]);
player = player === 'X' ? 'O' : 'X';
   currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

function check() {
let playerLastMove = player === 'X' ? 'O' : 'X';

const items = selected
.map((item, index) => [item, index])
// o map serve para criar um novo array com os valores do array original, nesse caso, ele está criando um array de arrays, onde cada sub-array contém o valor do jogador (X ou O) e o índice correspondente ao botão clicado. Por exemplo, se o jogador X clicou no botão com data-index 1, o sub-array seria ['X', 1].
.filter((item) => item[0] === playerLastMove)
// o filter serve para filtrar os valores do array criado pelo map, nesse caso, ele está filtrando apenas os sub-arrays onde o valor do jogador é igual ao jogador que acabou de jogar. Por exemplo, se o jogador X acabou de jogar, ele vai filtrar apenas os sub-arrays onde o valor é 'X'
.map((item) => item[1]);
// esse map final serve para criar um novo array contendo apenas os índices dos botões clicados pelo jogador que acabou de jogar. Por exemplo, se o jogador X clicou nos botões com data-index 1 e 2, o array final seria [1, 2].


for (const pos of positions) {
    // o pos of positions é usado para iterar sobre cada sub-array dentro do array positions. Cada sub-array representa uma combinação vencedora possível no jogo da velha. Por exemplo, o primeiro sub-array [1, 2, 3] representa a primeira linha do tabuleiro.
    if (pos.every((item) => items.includes(item))) {
        alert(`O JOGADOR ${playerLastMove} GANHOU!`);
        init();
        return;
    }
}

if (selected.filter((item) => item).length === 9) {
    alert('EMPATE!');
    init();
    return;
}
}
