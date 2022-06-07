function criarParagrafoNoClique(){
  const texto = document.getElementsById("texto");
const textoValue = document.getElementsById("texto").value;
const paragrafos = document.getElementsById("paragrafos");

paragrafos.innerHTML += `<p>${textoValue}</p>`;
texto.value = "";
}