import React from "react";

import { Container, Label } from "./styles";

function Card({ data }) {
  return (
    <Container>
      <header>
        {data.labels.map((label) => (
          <Label key={label} color={label} />
        ))}
        <Label color="#7159c1" />
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  );
}

export default Card;
