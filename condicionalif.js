let idade = 19;
let acesso = " ";

if(idade < 16){
    acesso = "Acesso Proibido!";
} else if (idade >= 16 && idade <= 18) {
    acesso = "Acesso liberado com acompanhente maior de idade.";
} else {
    acesso = "Acesso liberado!";
}

console.log(acesso)