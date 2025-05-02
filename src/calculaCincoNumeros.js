/**
 * Questão 11
 * Escreva um programa que solicita ao usuário 5 números e calcula a soma total
 * utilizando um loop for.
 */

import prompt from "prompt-sync";
const promptSync = prompt();

export function calculadorSomaCincoNumeros() {
  let soma = 0;

  console.log("------------ Calculador de 5 números ------------");

  for (let i = 5; i > 0; i--) {
    let numero = Number(promptSync("Digite um número: "));
    soma += numero;
  }

  console.log(`A soma é de ${soma}`);
}

// Executa a função se o arquivo for executado diretamente
if (process.argv[1].endsWith("calculaCincoNumeros.js")) {
  calculadorSomaCincoNumeros();
}
