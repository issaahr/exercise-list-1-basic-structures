/**
 * Questão 2
 * Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido,
 * utilizando uma estrutura de controle if-else.
 */
import prompt from "prompt-sync";
const promptSync = prompt();

export function classificaFaixaEtaria() {
  function verificadorFaixaEtaria(idade) {
    if (idade <= 11) return "criança";
    else if (idade >= 12 && idade <= 17) return "adolescente";
    else if (idade >= 18 && idade <= 59) return "adulto";
    else return "idoso";
  }

  console.log("------------ Classificador de Faixa Etária ------------");
  const idade = Number(promptSync("Insira a idade para fazer a verificação: "));

  if (idade < 0 || idade >= 120 || isNaN(idade)) {
    console.log("Idade Inválida");
  } else {
    console.log(`Com ${idade} anos, você é ${verificadorFaixaEtaria(idade)}`);
  }
}

if (process.argv[1].endsWith("classificaFaixaEtaria.js")) {
  classificaFaixaEtaria();
}
