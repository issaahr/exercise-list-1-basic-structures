/**
 * Questão 1:
 * Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
 * utilizando uma estrutura de controle if.
 */
import prompt from "prompt-sync";
const promptSync = prompt();

export function verificadorImparOuPar() {
  console.log("------------ Verificador de número par ou ímpar ------------");
  const numeroRecebido = Number(
    promptSync("Insira um número para testar se é par ou ímpar: ")
  );

  if (numeroRecebido % 2 == 0) {
    console.log(`O número ${numeroRecebido} é par`);
  } else {
    console.log(`O número ${numeroRecebido} é ímpar`);
  }
}

if (process.argv[1].endsWith("imparOuPar.js")) {
  verificadorImparOuPar();
}
