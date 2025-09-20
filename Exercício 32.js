//Exercício 32: Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.
let jogarNovamente;

do {
  const jogador = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();
  const opcoes = ["pedra", "papel", "tesoura"];
  const computador = opcoes[Math.floor(Math.random() * 3)];

  alert(`Computador escolheu: ${computador}`);

  if (jogador === computador) {
    alert("Empate!");
  } else if (
    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
  ) {
    alert("Você venceu!");
  } else if (opcoes.includes(jogador)) {
    alert("Você perdeu!");
  } else {
    alert("Escolha inválida.");
  }

  jogarNovamente = prompt("Deseja jogar novamente? (sim/não)").toLowerCase();
} while (jogarNovamente === "sim");

alert("Obrigado por jogar!");