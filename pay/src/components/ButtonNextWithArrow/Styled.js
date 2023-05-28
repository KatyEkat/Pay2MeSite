import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  background: #744ced;
  border-radius: 100px;
  width: 47px;
  height: 22px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #f6f9fa;
  width: 328px;
  height: 42px;

  :active{
    background: rgb(69 38 163);;
  }
`;
