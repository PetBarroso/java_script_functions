// Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa
// podem entrar no brinquedo.
//
// Crie uma função controleDeAcesso() que receba dois parâmetros: 
//  -> altura da pessoa;
//  -> se está acompanhada.
//
// O script deve informar se a pessoa tem acesso liberado ou não, baseado nas seguintes condições:
//  -> A pessoa deve medir mais de 1.40m e menos de 2m.
//  -> Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
//  -> Se a pessoa medir menos de 1.20m, não poderá ir nem acompanhada.
function controleDeAcesso (altura){
  if(altura <= 1.20){
      console.log("não poderá ir nem acompanhada!");
  } else if (altura > 1.20 && altura < 1.40) {
      console.log("Deverá ir acompanhado!");
  } else {
      console.log("poderá ir!")
  }
  }

controleDeAcesso(1.10)
controleDeAcesso(1.35)
controleDeAcesso(1.90)