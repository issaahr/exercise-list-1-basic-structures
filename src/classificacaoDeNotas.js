/**
 * Questão 3:
 * Implemente um programa que recebe uma nota de 0 a 10 e classifica como
 * "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
 */
import prompt from "prompt-sync";
const promptSync = prompt();

export function classificacaoDeNotas() {
  /**
   * Função que verifica nota. Foram consideradas as seguintes faixas:
   * Reprovado: Nota menor ou igual a 3, Em recuperação: 3.1 até 6.9, Aprovado: a partir de 7.0
   * @param nota - a nota a ser testada
   * @returns uma mensagem informando o status a partir da nota
   */
  function verificadorNota(nota) {
    if (nota <= 3) return "reprovado";
    else if (nota >= 3.1 && nota < 7) return "em recuperação";
    else return "aprovado";
  }

  console.log("------------ Verificador de Situação por Notas ------------");
  const nota = Number(promptSync("Insira a nota: "));

  if (nota < 0 || nota > 10 || Number.isNaN(nota)) {
    console.log("Nota inválida");
  } else {
    console.log(`Com a nota ${nota}, seu status é ${verificadorNota(nota)}`);
  }
}

if (process.argv[1].endsWith("classificacaoDeNotas.js")) {
  classificacaoDeNotas();
}
