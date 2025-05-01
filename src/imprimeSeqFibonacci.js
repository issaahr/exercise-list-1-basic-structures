/**
 * Questão 15
 * Escreva um programa que gera e imprime os primeiros 10 números da sequência de
 * Fibonacci utilizando um loop for.
 */

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
