const controleDeAcesso = (altura, vemAcompanhado) => {
  if (altura < 1.20){
    console.log('Não pode andar, nem acompanhado')
  }
  if (altura > 1.20 && altura < 1.40 && vemAcompanhado == true){
    console.log('Está acompanhado, pode andar')
  }
  else if (altura > 1.40 && altura < 2.00){
    console.log('Pode andar sozinho')
  }
}

controleDeAcesso(1.1)
controleDeAcesso(1.35, false)
controleDeAcesso(1.35, true)
controleDeAcesso(1.9)