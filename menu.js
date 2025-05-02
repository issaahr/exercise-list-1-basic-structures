import {
  alinhaMaiorNumero,
  calculadorSomaCincoNumeros,
  calculadoraDeFatorial,
  calculadoraIMC,
  classificaFaixaEtaria,
  classificacaoDeNotas,
  contagemRegressiva,
  escreveNumeroInteiro,
  faturamentoDeMacas,
  imprimeFibonacci,
  mediaComDecimais,
  menuInterativoGatinhos,
  tabuadaFor,
  verificadorImparOuPar,
  verificadorTriangulos,
} from "./src/index.js";

import prompt from "prompt-sync";
const promptSync = prompt();

function exibeMenu() {
  console.log("\n------------ Menu de Exercícios ------------");
  console.log("1. Verificador de número par ou ímpar");
  console.log("2. Classificador de Faixa Etária");
  console.log("3. Classificação de Notas");
  console.log("4. Menu Interativo de Gatinhos");
  console.log("5. Calculadora de IMC");
  console.log("6. Verificador de Triângulos");
  console.log("7. Calculador de Compras de Maçãs");
  console.log("8. Ordem Crescente");
  console.log("9. Contagem Regressiva");
  console.log("10. Escreve Número Inteiro");
  console.log("11. Calculador de Soma de 5 Números");
  console.log("12. Tabuada");
  console.log("13. Média com Decimais");
  console.log("14. Calculadora de Fatorial");
  console.log("15. Sequência de Fibonacci");
  console.log("0. Sair");
}

function executaOpcao(opcao) {
  switch (opcao) {
    case 1:
      verificadorImparOuPar();
      break;
    case 2:
      classificaFaixaEtaria();
      break;
    case 3:
      classificacaoDeNotas();
      break;
    case 4:
      menuInterativoGatinhos();
      break;
    case 5:
      calculadoraIMC();
      break;
    case 6:
      verificadorTriangulos();
      break;
    case 7:
      faturamentoDeMacas();
      break;
    case 8:
      alinhaMaiorNumero();
      break;
    case 9:
      contagemRegressiva();
      break;
    case 10:
      escreveNumeroInteiro();
      break;
    case 11:
      calculadorSomaCincoNumeros();
      break;
    case 12:
      tabuadaFor();
      break;
    case 13:
      mediaComDecimais();
      break;
    case 14:
      calculadoraDeFatorial();
      break;
    case 15:
      imprimeFibonacci();
      break;
    case 0:
      console.log("Saindo...");
      process.exit(0);
      break;
    default:
      console.log("Opção inválida!");
  }
}

while (true) {
  exibeMenu();
  const opcao = Number(promptSync("Escolha uma opção: "));
  executaOpcao(opcao);
}
