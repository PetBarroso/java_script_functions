// Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
function tamanho_do_array(array) {
  console.log(
    `EXERCICIO1- a função recebeu o array [${array}] e o tamanho do array é ${array.length}`
  );
}
tamanho_do_array([1, 2, 3, 4, 5]);

//Escreva uma função que recebe um array como parâmetro e retorne este array invertido.
function inverte_array(array) {
  invertido = [];
  for (let i = array.length - 1; i >= 0; --i) {
    invertido.push(array[i]);
  }
  console.log(
    `EXERCICIO2- a função recebeu o array [${array}] e a inversão é [${invertido}]`
  );
}
inverte_array([1, 2, 3, 4, 5]);

//Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.
function somente_pares(array) {
  let pares = [];

  for (const numero of array) {
    if (numero % 2 === 0) {
      pares.push(numero);
    }
  }

  console.log(
    `EXERCICIO3- a função recebeu o array [${array}] e os numeros pares são [${pares}]`
  );
}
somente_pares([1, 2, 3, 4, 5]);

//Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.
function pares_elevados(array) {
  let pares = [];

  for (const numero of array) {
    if (numero % 2 === 0) {
      pares.push(numero * numero);
    }
  }

  console.log(
    `EXERCICIO4- a função recebeu o array [${array}] e os numeros pares elevados a 2 são [${pares}]`
  );
}
pares_elevados([1, 2, 3, 4, 5]);

//Escreva uma função que receba um array de números e retorne o maior número dele.
function maior_numero(array) {
  let maior = 0;

  for (const numero of array) {
    if (numero > maior) {
      maior = numero;
    }
  }

  console.log(
    `EXERCICIO5- a função recebeu o array [${array}] e o maior numero dele é ${maior}]`
  );
}
maior_numero([1, 2, 3, 4, 5]);

//Crie uma função chamada 'criaRetangulo' que recebe como parâmetros dois lados (lado1 e lado2) e retorna um objeto com 4 informações: largura (lado1), altura (lado2), perímetro (2 * (lado1 + lado2)) e área (lado1 * lado2).

function criaRetangulo(lado1, lado2) {
  let retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 * lado2),
    area: lado1 * lado2,
  };

  console.log(
    `EXERCICIO6- a função recebeu o lado1 = ${lado1} e o lado2 = ${lado2} e o objeto ficou assim:\nretangulo={\n largura: ${retangulo.largura},\n altura:${retangulo.altura},\n perimetro:${retangulo.perimetro},\n área:${retangulo.area}\n}`
  );
}
criaRetangulo(4, 5);
