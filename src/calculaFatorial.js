/**
 * Questão 14
 * Crie um programa que calcula o fatorial de um número fornecido pelo usuário
 * utilizando um loop for ou while.
 */
import prompt from "prompt-sync";
const promptSync = prompt();

export function calculadoraDeFatorial() {
  function calculaFatorial(numero) {
    let acumulador = 1;
    for (let i = numero; i > 0; i--) {
      acumulador *= i;
    }
    return acumulador;
  }

  console.log("------------ Calculadora de Fatorial! ------------");
  const numero = Number(
    promptSync("Entre com o número que você deseja calcular: ")
  );

  if (Number.isNaN(numero)) {
    console.log("Entrada inválida!");
  } else {
    console.log(`O fatorial de ${numero}! é: ${calculaFatorial(numero)}`);
  }
}

if (process.argv[1].endsWith("calculaFatorial.js")) {
  calculadoraDeFatorial();
}
