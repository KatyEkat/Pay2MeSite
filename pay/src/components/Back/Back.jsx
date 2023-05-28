import React from "react";
import * as S from "./Styled.js";
import ArrowLeft from "../../img/arrow-left.svg"

function BackBtn() {
  return (
    <S.BackContainer>
      <S.ArrowLeft src={ArrowLeft}/>
      <S.h2>Назад</S.h2>
    </S.BackContainer>
  );
}

export default BackBtn;
