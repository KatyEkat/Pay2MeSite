import React from "react";
import * as S from "./Styled.js";
import ArrowRight from "../../img/arrow-right.svg";

function ButtonNext() {
  return (
    <S.ButtonContainer>
      <S.Button src={ArrowRight}> Далее </S.Button>
    </S.ButtonContainer>
  );
}

export default ButtonNext;
