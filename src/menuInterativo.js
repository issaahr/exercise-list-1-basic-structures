/**
 * Questão 4
 * Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
 * Utilize switch-case para implementar a lógica de cada opção selecionada.
 */
const prompt = require("prompt-sync")();
console.log();
console.log("---------------------------------------------------------------");
console.log("🐾 Seja bem-vindo(a) ao Centro de Acariciação de Gatinhos! 🐱");
console.log("---------------------------------------------------------------");
console.log();
console.log("Escolha um dos gatinhos abaixo para acariciar: 😺");
console.log("1- Gatinho rajado");
console.log("2- Gatinho branco");
console.log("3- Gatinho preto");

const opcao = Number(prompt("Digite o número da opção desejada: "));

switch (opcao) {
  case 1:
    console.log("Você escolheu gatinho rajado! 🐈");
    break;
  case 2:
    console.log("Você escolheu gatinho branco! 🐈");
    break;
  case 3:
    console.log("Você escolheu gatinho preto! 🐈");
    break;
  default:
    console.log("Opção de gatinho inválida! 😿");
}
