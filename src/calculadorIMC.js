/**
 * Questão 5
 * Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
 * determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
 * utilizando if-else.
 */

const prompt = require("prompt-sync")();

/**
 *
 * @param IMC - o valor do IMC a ser verificado
 * @returns a mensagem correspondente à faixa de IMC
 */
function retornaIMC(IMC) {
  if (IMC <= 16) return "magreza grave";
  else if (IMC >= 16 && IMC <= 16.9) return "magreza moderada";
  else if (IMC >= 17 && IMC <= 18.5) return "magreza leve";
  else if (IMC >= 18.6 && IMC <= 24.9) return "peso ideal";
  else if (IMC >= 25 && IMC <= 29.9) return "sobrepeso";
  else if (IMC >= 30 && IMC <= 34.9) return "obesidade grau I";
  else if (IMC >= 35 && IMC <= 39.9) return "obesidade grau II (severa)";
  else return "obesidade grau III (mórbida)";
}

console.log("-------- Calculadora de IMC --------");
const peso = Number(prompt("Insira o peso em KG: "));
const altura = Number(prompt("Insira a altura em metros: "));

if (Number.isNaN(peso) || Number.isNaN(altura) || altura < 0 || peso < 0) {
  console.log("Alguma das suas medidas é inválida, tente novamente");
} else {
  const IMC = peso / (altura * altura);
  console.log(
    `Com o IMC: ${IMC.toFixed(2)}, você está na faixa de ${retornaIMC(IMC)}`
  );
}
