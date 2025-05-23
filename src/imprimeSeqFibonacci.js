/**
 * Questão 15
 * Escreva um programa que gera e imprime os primeiros 10 números da sequência de
 * Fibonacci utilizando um loop for.
 */

export function imprimeFibonacci() {
  console.log(
    "------------ Os 10 primeiros números da sequência de Fibonacci ------------"
  );

  let a = 0;
  let b = 1;

  for (let i = 0; i < 10; i++) {
    console.log(a);
    let proximoNumero = a + b;
    a = b;
    b = proximoNumero;
  }
}

// Executa a função se o arquivo for executado diretamente
if (process.argv[1].endsWith("imprimeSeqFibonacci.js")) {
  imprimeFibonacci();
}
