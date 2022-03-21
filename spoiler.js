function controleDeAcesso (idade){
    if(idade < 16){
        console.log("Acesso Proibido!");
    } else if (idade >= 16 && idade <= 18) {
        console.log("Acesso liberado com acompanhante maior de idade.");
    } else {
        console.log("Acesso liberado!");
    }
}
controleDeAcesso(15)
controleDeAcesso(17)
controleDeAcesso(19)
