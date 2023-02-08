'use strict';

import getResponse from "./source/getResponse.js";
const readline = require("readline");

(async function main() {
  console.log("===============================");
  console.log("        GUIA SOBRE TUDO        ");
  console.log("          VERSÃO 1.0           ");
  console.log("===============================\n");

  console.log("Olá, eu sou o Guia sobre Tudo, um chatbot que pode te ajudar a encontrar informações sobre qualquer assunto.\n");
  console.log("Para começar, digite o assunto que você deseja saber agora.\n");
  const theme = prompt("Assunto: ");

  console.log(theme);
})();