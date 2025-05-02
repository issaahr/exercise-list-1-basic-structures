/**
 * Questao 8
 * Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
 * e escreve-los em ordem crescente.
 */
import prompt from "prompt-sync";
const promptSync = prompt();

export function alinhaMaiorNumero() {
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
  const primeiroNumero = Number(promptSync("Insira o primeiro número: "));
  const segundoNumero = Number(promptSync("Insira o segundo número: "));

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
}

if (process.argv[1].endsWith("ordemCrescente.js")) {
  alinhaMaiorNumero();
}
