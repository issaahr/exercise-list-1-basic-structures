/**
 * Questão 11
 * Escreva um programa que solicita ao usuário 5 números e calcula a soma total
 * utilizando um loop for.
 */

const prompt = require("prompt-sync")();

let soma = 0;

console.log("------------ Calculador de 5 números ------------");

for (let i = 5; i > 0; i--) {
  let numero = Number(prompt("Digite um número: "));
  soma += numero;
}

console.log(`A soma é de ${soma}`);
