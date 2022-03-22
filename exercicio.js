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
function controleDeAcesso(altura, vemAcompanhada) {
  if (altura < 1.2) {
    console.log('não poderá ir nem acompanhada!')
  }
  if (altura > 1.2 && altura < 1.4 && vemAcompanhada == true) {
    console.log('Está acompanhada, pode andar!')
  }
  if (altura > 1.2 && altura < 1.4 && vemAcompanhada == false) {
    console.log('Não pode andar sem acompanhante!')
  } else if (altura > 1.4 && altura < 2.0) {
    console.log('Pode andar tranquilo!!')
  }
}

controleDeAcesso(1.1)
controleDeAcesso(1.35)
controleDeAcesso(1.9)
