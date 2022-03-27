/* 
    MICRO DESAFIO
    1. Crie um array que contenha nomes de produtos de mercado para compra;
    2. Após cria-lo exiba no console o resultado dos métodos relacionados aos arrays.
    que são: push, pop, shift, unshift, join, indexOf, lastIndexOf e includes.
    3. Escreva com as suas palavras o que cada método faz.
    Exemplo: console.log(`Estou transformando tudo em uma string: ${texto}`)

*/

let lista = [
  'Salame',
  'Carvão',
  'Carne',
  'Cerveja',
  'refrigerante',
  'queijo',
  'Cerveja'
]

lista.push('Bavária')
console.log(
  'O método push adiciona 1 ou mais itens ao final do array. Ex: ' + lista
)

console.log(
  'O método pop remove e retorna o ultimo elemento do indice do array. Ex: ' +
    lista.pop()
)
