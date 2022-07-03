import React, { useState } from "react";
import { DATA_POST } from "./DATA_POST";
import { ButtonReset, CardPostContain, WrapperCard } from "./style";

export default function CardPost() {
  const [post, setPost] = useState(DATA_POST);

  //use o console para ver a estrutura do array post
  console.log(post);

  const idCinco = post.filter((item) => item.id === "5");
  const idDois = post.filter((item) => item.id === "2");

  //crie abaixo o map
  const lePosts = post.map((item) => {
    return (
      <WrapperCard>
        <p>id:{item.id}</p>
        <img src={item.photo} alt="perfil" />
        <h1>{item.titulo}</h1>
      </WrapperCard>
    );
  });

  return (
    <CardPostContain>
      <div>
        <button className="button-15" onClick={() => setPost(idCinco)}>
          ID 5
        </button>
        <button className="button-15" onClick={() => setPost(idDois)}>
          ID 2
        </button>
      </div>
      <ButtonReset onClick={() => setPost(DATA_POST)}>RESET</ButtonReset>

      {lePosts}
    </CardPostContain>
  );
}
