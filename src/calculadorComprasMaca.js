/**
 * Questao 7
 * As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
 * forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
 * compradas, calcule e escreva o valor total da compra.
 */
import prompt from "prompt-sync";
const promptSync = prompt();

export function faturamentoDeMacas() {
  function calculaTotalMaça(quantidadeMacas) {
    const custoNormalMaca = 0.3;
    const custoDuziaMaca = 0.25;

    if (quantidadeMacas >= 12) {
      const total = quantidadeMacas * custoDuziaMaca;
      return [custoDuziaMaca, total];
    } else {
      const total = quantidadeMacas * custoNormalMaca;
      return [custoNormalMaca, total];
    }
  }

  console.log("------------ Faturamento de Compra de Maçãs ------------");
  const quantidadeMacas = Number(promptSync("Quantas maçãs foram compradas? "));

  if (Number.isNaN(quantidadeMacas) || quantidadeMacas < 0) {
    console.log("Quantidade inválida!");
  } else {
    const [custo, total] = calculaTotalMaça(quantidadeMacas);
    console.log(
      `Com ${quantidadeMacas} maçãs comprada(s) a R$ ${custo}, o total da compra é de R$ ${total.toFixed(
        2
      )}`
    );
  }
}

if (process.argv[1].endsWith("calculadorComprasMaca.js")) {
  faturamentoDeMacas();
}
