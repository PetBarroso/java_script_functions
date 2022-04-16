setTimeout(function() {
  console.log('Olá Mundo!!!')
},3000)

//  -------------------------------------------------------------------------//

let minhaCallback = () => console.log('Olá Mundo!!!');
setTimeout(minhaCallback, 3000)

//---------------------------------------------------------------------------//

function nomeCompleto (nome, sobrenome){
  return nome + ' ' + sobrenome;

}
//console.log(nomeCompleto('Petterson', 'Barroso'))

function bomDia(nome, sobrenome, nomeCompleto){
  console.log('Olá' + ' ' + nomeCompleto('Petterson', 'Barroso'))
}
bomDia('Petterson', 'Barroso', nomeCompleto)