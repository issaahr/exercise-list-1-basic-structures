/**
 * Questao 6
 * 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
 * formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
 * Isósceles, escaleno ou eqüilátero.
 * Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
 * Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
 * Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
 * Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
 */
import prompt from "prompt-sync";
const promptSync = prompt();

export function verificadorTriangulos() {
  /**
   * Verifica o tipo do triângulo
   * @param ladoA lado do triângulo
   * @param ladoB lado do triângulo
   * @param ladoC lado do triângulo
   * @returns o tipo do triângulo
   */
  function tipagemTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) return "equilátero";
    else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC)
      return "escaleno";
    else return "isósceles";
  }

  /**
   * Valida através da fórmula se a forma é um triângulo
   * @param ladoA lado a ser verificado
   * @param ladoB lado a ser verificado
   * @param ladoC lado a ser verificado
   * @returns a confirmação de que é um triângulo com o tipo, caso não seja triângulo, retorna a mensagem correspondente
   */
  function verificadorLados(ladoA, ladoB, ladoC) {
    const formulaValidaTriangulo =
      ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;

    if (formulaValidaTriangulo)
      return `É um triangulo ${tipagemTriangulo(ladoA, ladoB, ladoC)}`;
    else return "Não é triângulo";
  }

  console.log("------- Verificador de Triângulos -------");
  const ladoA = Number(promptSync("Insira um valor para o primeiro lado: "));
  const ladoB = Number(promptSync("Insira um valor para o segundo lado: "));
  const ladoC = Number(promptSync("Insira um valor para o terceiro lado: "));

  if (Number.isNaN(ladoA) || Number.isNaN(ladoB) || Number.isNaN(ladoC)) {
    console.log("Um dos lados é inválido");
  } else {
    console.log(verificadorLados(ladoA, ladoB, ladoC));
  }
}

if (process.argv[1].endsWith("verificadorTriangulos.js")) {
  verificadorTriangulos();
}
