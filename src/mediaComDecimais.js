/**
 * Questão 13
 * Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
 * a média aritmética desses números.
 */
import prompt from "prompt-sync";
const promptSync = prompt();

export function mediaComDecimais() {
  let quantidadeNumeros = 0;
  let acumulador = 0;

  console.log(
    "------------ Calculadora de média de números decimais ------------"
  );
  while (true) {
    const entrada = promptSync(
      "Digite um número decimal para acumular na média (ou 0 para sair): "
    );
    const numero = Number(entrada);

    if (numero === 0) break;

    if (isNaN(numero) || Number.isInteger(numero)) {
      console.log("O valor informado não é um número decimal válido.");
      continue;
    }

    acumulador += numero;
    quantidadeNumeros += 1;
  }

  if (quantidadeNumeros === 0) {
    console.log("Nenhum número decimal foi informado.");
  } else {
    const media = acumulador / quantidadeNumeros;
    console.log(`A média é: ${media.toFixed(2)}`);
  }
}

if (process.argv[1].endsWith("mediaComDecimais.js")) {
  mediaComDecimais();
}
