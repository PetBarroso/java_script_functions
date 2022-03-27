let precoSemComissao =[1200, 340, 560, 30400, 500, 80, 1000, 9000, 200, 780, 830]
let comissao = 1.21

for(let contador = 0; contador < precoSemComissao.length; contador++){
  console.log(precoSemComissao[contador] * comissao);
}