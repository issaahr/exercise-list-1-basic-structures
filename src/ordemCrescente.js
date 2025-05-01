/**
 * Questao 8
 * Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
 * e escreve-los em ordem crescente.
 */
const prompt = require("prompt-sync")();

/**
 * Ordena dois números em ordem crescente.
 *
 * @param {number} primeiroNumero - O primeiro número.
 * @param {number} segundoNumero - O segundo número.
 * @returns {number[]} - O array com os dois números em ordem crescente.
 */
function ordenaDoisNumeros(primeiroNumero, segundoNumero) {
  return [
    Math.min(primeiroNumero, segundoNumero),
    Math.max(primeiroNumero, segundoNumero),
  ];
}

console.log("------------ Verificador do maior número ------------");
const primeiroNumero = Number(prompt("Insira o primeiro número: "));
const segundoNumero = Number(prompt("Insira o segundo número: "));

if (
  Number.isNaN(primeiroNumero) ||
  Number.isNaN(segundoNumero) ||
  primeiroNumero === segundoNumero
) {
  console.log("Entrada inválida");
} else {
  const [numeroMenor, numeroMaior] = ordenaDoisNumeros(
    primeiroNumero,
    segundoNumero
  );
  console.log(
    `Os números em ordem crescente são: ${numeroMenor}, ${numeroMaior}`
  );
}
