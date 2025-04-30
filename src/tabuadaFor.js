/**
 * Questao 12
 * Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
 * 10) utilizando um loop for.
 */
const prompt = require("prompt-sync")();

function calculaTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let calculo = numero * i;
    console.log(`${numero} x ${i} = ${calculo}`);
  }
}

console.log("---------- TABUADA ----------");
const numero = Number(
  prompt("Digite um número para obter a tabuada de 1 a 10: ")
);

if (Number.isInteger(numero)) {
  calculaTabuada(numero);
} else {
  console.log("Número inválido! ");
}
