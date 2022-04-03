/*Olá, você foi contratado para executar este projeto.
 É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado.
  Veja abaixo os requisitos do projeto:
- Precisamos desenvolver um menu para um microondas super veloz, 
onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 
      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 
- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.
 Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/


function microondas(prato,tempo) {
  if (prato > 5) {
      console.log('PRATO INEXISTENTE');
  }
if (prato == 1 && tempo < 10) {
  console.log('TEMPO INSUFICIENTE!!!!!!');
} else if (prato == 1 && (tempo >= 10 && tempo < 20)) {
  console.log('A SUA PIPOCA ESTÁ PRONTO!!!!');
} else if (prato == 1 && (tempo >= 20 && tempo < 30)) {
  console.log('A SUA PIPOCA QUEIMOU!!!!!');
} else if (prato == 1 && tempo >= 30) {
  console.log('KABUMMMMMM......');
}
if (prato == 2 && tempo < 8) {
  console.log('TEMPO INSUFICIENTE!!!!!!');
} else if (prato == 2 && (tempo >= 8 && tempo < 16)) {
  console.log('MACARRÃO ESTÁ PRONTO!!!!');
} else if (prato == 2 && (tempo >= 16 && tempo < 24)) {
  console.log('MACARRÃO QUEIMOU!!!!!');
} else if (prato == 2 && tempo >= 24) {
  console.log('KABUMMMMMM......');
}
if (prato == 3 && tempo < 15) {
  console.log('TEMPO INSUFICIENTE!!!!!!');
} else if (prato == 3 && (tempo >= 15 && tempo < 30)) {
  console.log('CARNE ESTÁ PRONTO!!!!');
} else if (prato == 3 && (tempo >= 30 && tempo < 90)) {
  console.log('CARNE QUEIMOU!!!!!');
} else if (prato == 3 && tempo >= 90) {
  console.log('KABUMMMMMM......');
}
if (prato == 4 && tempo < 12) {
  console.log('TEMPO INSUFICIENTE!!!!!!');
} else if (prato == 4 && (tempo >= 12 && tempo < 24)) {
  console.log('FEIJÃO ESTÁ PRONTO!!!!');
} else if (prato == 4 && (tempo >= 24 && tempo < 36)) {
  console.log('FEIJÃO QUEIMOU!!!!!');
} else if (prato == 4 && tempo >= 36) {
  console.log('KABUMMMMMM......');
}
if (prato == 5 && tempo < 8) {
  console.log('TEMPO INSUFICIENTE!!!!!!');
} else if (prato == 5 && (tempo >= 8 && tempo < 16)) {
  console.log('BRIGADEIRO ESTÁ PRONTO!!!!');
} else if (prato == 5 && (tempo >= 16 && tempo < 24)) {
  console.log('BRIGADEIRO QUEIMOU!!!!!');
} else if (prato == 5 && tempo >= 24) {
  console.log('KABUMMMMMM......');
}


}



microondas(1,30);
microondas(6, 0); 
microondas(2, 10);
microondas(3, 30);
microondas(4, 7);
microondas(5, 40);