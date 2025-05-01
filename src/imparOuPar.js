/**
 * Questão 1:
 * Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
 * utilizando uma estrutura de controle if.
 */
const prompt = require("prompt-sync")();

console.log("------------ Verificador de número par ou ímpar ------------");
const numeroRecebido = Number(
  prompt("Insira um número para testar se é par ou ímpar: ")
);

if (numeroRecebido % 2 == 0) {
  console.log(`O número ${numeroRecebido} é par`);
} else {
  console.log(`O número ${numeroRecebido} é ímpar`);
}
