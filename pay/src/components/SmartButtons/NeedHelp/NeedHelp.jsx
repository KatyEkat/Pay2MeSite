import React from "react";
import * as S from "./Styled.js";
import AlisaImg from "../../../img/PurpleCircle.svg";
import Chat from "../../../img/ChatRound.svg";

function NeedHelp() {
  return (
    <S.Container>
      <S.Heading>Нужна помощь?</S.Heading>

      <S.ChatImage>
        <S.AlisaImgChat src={Chat} />
        <S.AlisaImgPurple src={AlisaImg} />
      </S.ChatImage>
    </S.Container>
  );
}

export default NeedHelp;
