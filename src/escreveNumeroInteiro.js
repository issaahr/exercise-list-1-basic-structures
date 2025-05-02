/**
 * Questão 10
 * Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
 */
import prompt from "prompt-sync";
const promptSync = prompt();

export function escreveNumeroInteiro() {
  function imprimeNumero(numero) {
    let i = 10;
    while (i > 0) {
      console.log(numero);
      i -= 1;
    }
  }

  console.log("------------ Repetidor de número inteiro ------------");
  const numero = Number(
    promptSync("Insira um número para ser impresso na tela: ")
  );
  if (Number.isInteger(numero)) {
    imprimeNumero(numero);
  } else {
    console.log("Entrada inválida!");
  }
}

if (process.argv[1].endsWith("escreveNumeroInteiro.js")) {
  escreveNumeroInteiro();
}
