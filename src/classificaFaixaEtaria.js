/**
 * Questão 2
 * Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido,
 * utilizando uma estrutura de controle if-else.
 */

const prompt = require("prompt-sync")();

function verificadorFaixaEtaria(idade) {
  if (idade <= 11) return "criança";
  else if (idade >= 12 && idade <= 17) return "adolescente";
  else if (idade >= 18 && idade <= 59) return "adulto";
  else return "idoso";
}

const idade = Number(prompt("Insira a idade para fazer a verificação: "));
if (idade < 0 || idade >= 120 || isNaN(idade)) {
  console.log("Idade Inválida");
} else {
  console.log(`Com ${idade} anos, você é ${verificadorFaixaEtaria(idade)}`);
}
