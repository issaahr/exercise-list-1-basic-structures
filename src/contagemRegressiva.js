/**
 * Questao 9
 * Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
 * utilizando um loop for.
 */
export function contagemRegressiva() {
  console.log("------------ Contagem Regressiva! ------------");

  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

if (process.argv[1].endsWith("contagemRegressiva.js")) {
  contagemRegressiva();
}
