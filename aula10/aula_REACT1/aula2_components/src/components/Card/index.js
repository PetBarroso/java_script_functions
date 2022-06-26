//Contruir um card que recebe imagem , titulo e ação

import React from "react";
import "./style.css"

export function Card (props){

  return (
    <div className="body"style={{background: `${props.cor}`}}>
      <img src={props.foto} alt="photo_perfil" />
      <h5>Eu sou um card</h5>
      <button>{props.botao}</button>
    </div>
  );
}