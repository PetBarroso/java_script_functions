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
  'O método pop remove e salva o ultimo elemento do indice do array. Ex: ' +
    lista.pop()
)
console.log('O método shift remove e salva o primeiro elemento do índice do array. Ex: ' + lista.shift())
lista.unshift("Salame")
console.log('O método unshift adiciona um ou mais valores no início do array. Ex: ' + lista)

console.log("O método join junta todos os elementos do array em uma string. Ex: " + lista.join(" | "))

console.log("O método indexOf pesquisa no array o elemento informado (do início para o final). Ex: " + lista.indexOf("Cerveja"))

console.log("O método lastIndexOf pesquisa no array o elemento informado (do final para o início). Ex: " + lista.lastIndexOf("Cerveja"))

console.log("O método includes pesquisa no array o elemento informado e retorna um boolean (true or false). " + lista.includes("Carne"))