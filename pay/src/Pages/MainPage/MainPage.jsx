import React from "react";
import * as S from "./Styled.js";
import Logo from "../../img/Logo.svg";
import BackBtn from "../../components/Back/Back.jsx";
import ButtonNext from "../../components/ButtonNextWithArrow/ButtonNext.jsx";
import Register from "../../components/SmartButtons/Register/Register.jsx";
import Login from "../../components/SmartButtons/Login/Login.jsx";
import NeedHelp from "../../components/SmartButtons/NeedHelp/NeedHelp.jsx";

function MainPage() {
  return (
    <S.MainPageContainer>
      <BackBtn />
      <S.Logo src={Logo} />

      <S.TextContent>
        <S.Header>Войти в личный кабинет</S.Header>
        <S.Heading>
          Войдите, чтобы начать использовать платёжные решения PAY2ME.
        </S.Heading>
      </S.TextContent>

      <S.Input
        type="emial"
        placeholder="Номер телефона или электронная почту"
      />

      <ButtonNext />

      <S.SmartButtons>
        <Register />
        <Login />
        <NeedHelp />
      </S.SmartButtons>
    </S.MainPageContainer>
  );
}

export default MainPage;
