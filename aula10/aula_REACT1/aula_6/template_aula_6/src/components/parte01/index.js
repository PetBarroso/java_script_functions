import React, { useState } from 'react'

import { WrapperPerson } from './styles';


export default function ExerciciosParteUm() {
  const [pessoasOriginal, setPessoasOriginal] = useState([
    { nome: 'jullia', sobrenome: 'izidorio', idade: 24 },
    { nome: 'maria', sobrenome: 'jose', idade: 15 },
    { nome: 'maria', sobrenome: 'aurora', idade: 8 },
    { nome: 'juliana', sobrenome: 'paiva', idade: 24 },
    { nome: 'junior', sobrenome: 'izidorio', idade: 30 },
    { nome: 'joyce', sobrenome: 'lima', idade: 22 },
    { nome: 'jullia', sobrenome: 'lima', idade: 18 }
  ])

  const [pessoas, setPessoas] = useState(pessoasOriginal);

  //EXERCICIO 1
  const meuMap = pessoas.map((item)=> {
    
    return <WrapperPerson>
      <h5>Nome: {item.nome}</h5>
      <h5>sobrenome: {item.sobrenome}</h5>
      <h5>Idade: {item.idade}</h5>

    </WrapperPerson>;
    });
    

  //EXERCÍCIO 2
  const lista = pessoas.map(item => {
    return <div></div>
  })

  //exemplo 1

  const meuFilter = pessoas.filter((item) => item.nome ==="maria");
  const meuFilterMaioresQue20 = pessoas.filter((item) => item.idade > 20);
 // const meuFilterMaioresQue20 = pessoas.filter((item) => item.idade > 20);

  

  //EXERCICIO 3

  // const filterMaiorQueVinte
  // const filterMaiorQueTrinta

  return <div>retorna map: 
    <button onClick={()=>setPessoas(meuFilter)}>só Marias</button>
    <button onClick={()=>setPessoas(pessoasOriginal)}>Reset</button>
    <button onClick={()=>setPessoas(meuFilterMaioresQue20)}>só +20</button>
    {meuMap}</div>
}
