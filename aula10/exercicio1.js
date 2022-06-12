function criarParagrafoNoClique() {

  const texto = document.getElementById("texto");
const textoValue = document.getElementById("texto").value;
const paragrafo = document.getElementById("paragrafos");

paragrafo.innerHTML += `<p>${textoValue}</p>`;
texto.value = "";
}

function criarParagrafoNoEnter(event) {
console.log(event);
if (event.key ==="Enter") {
  const texto = document.getElementsById("texto");
  const textoValue = document.getElementsById("texto").value;
const paragrafo = document.getElementsById("paragrafos");
paragrafo.innerHTML += `<p>${textoValue}</p>`;
texto.value = "";
}
}