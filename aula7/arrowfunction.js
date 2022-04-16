/*function somar(numero1, numero2){
console.log(numero1 + numero2)
}

somar(5,3)*/

/*let somar = (numero1, numero2) => console.log(numero1+numero2);
somar(3,12)*/

/* let bemVindo = () => console.log('Olá Mundo!!!');
bemVindo() */

let horaAtual = () => {
  let data = new Date()
  console.log(data.getHours() + ':' + data.getMinutes())
}
horaAtual()
