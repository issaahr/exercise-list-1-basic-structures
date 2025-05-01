/**
 * Questão 14
 * Crie um programa que calcula o fatorial de um número fornecido pelo usuário
 * utilizando um loop for ou while.
 */

const prompt = require("prompt-sync")();

function calculaFatorial(numero) {
  let acumulador = 1;
  for (let i = numero; i > 0; i--) {
    acumulador *= i;
  }
  return acumulador;
}

console.log("------------ Calculadora de Fatorial! ------------");
const numero = Number(prompt("Entre com o número que você deseja calcular: "));

if (Number.isNaN(numero)) {
  console.log("Entrada inválida!");
} else {
  console.log(`O fatorial de ${numero}! é: ${calculaFatorial(numero)}`);
}
