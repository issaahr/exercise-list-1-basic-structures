/**
 * Questão 10
 * Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
 */
const prompt = require("prompt-sync")();

function imprimeNumero(numero) {
  let i = 10;
  while (i > 0) {
    console.log(numero);
    i -= 1;
  }
}

const numero = Number(prompt("Insira um número para ser impresso na tela: "));
if (Number.isInteger(numero)) {
  imprimeNumero(numero);
} else {
  console.log("Entrada inválida!");
}
