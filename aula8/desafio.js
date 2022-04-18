/* Cria uma funçao chamada acaoCarro(), que receberá uma callback como parametro. Após isso, crie duas funções de nome andar() -  que deve exibir uma mensagem dizendo que o carro está andando, e uma função para() - que deve exibir uma mensagem dizendo que o carro está parado.

Execute ambas ações utilizando a função acaoCarro(), passando suas ações como callbacks. */

/*function acaoCarro (carroEstaAndando, carroEstaParado){
  console.log('carroEstaAndando', 'carroEstaParado', 5000) 
}*/

/*let andar = () => console.log('Carro está andando!!!'){
}
let para = () => console.log('Carro está parado');
setTimeout(para, 3000);

function acaoCarro(mensagem){
  console.log(mensagem);
}
acaoCarro('Carro está andando')
acaoCarro('Carro está parado',5000)



let print = acaoCarro => console.log(acaoCarro)
print("Carro está andando")

let minhaCallback = () => console.log("Carro está parado");
setTimeout(minhaCallback, 3000); */

function acaoCarro(callback){
  callback();
}

let andar = () =>
  console.log("Carro está andando");
  acaoCarro(andar);

let parar = () =>
  console.log("Carro está parado");
  setTimeout(parar, 4000);
  
