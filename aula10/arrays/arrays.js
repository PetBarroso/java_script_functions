

function mostrarNumeros(){

  const paragrafo = document.getElementById("listaNumeros");
  const numeros = [10,20,50,80,77,90];
  const lista = numeros.map((item, index, array)=>{

    return `O elemento ${index} é ${item} `
  });

  paragrafo.innerHTML += lista
  console.log(lista)
}