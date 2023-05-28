import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: flex-end;
`;

export const Heading = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 130%;
  color: #744ced;
  margin-bottom: 70px;
`;

export const ChatImage = styled.div`
  margin-right: 28px;
  display: flex;
  justify-content: center;
`;

export const AlisaImgChat = styled.img`
  position: absolute;
  z-index: 2;
  background: none;
`;

export const AlisaImgPurple = styled.img`
  position: relative;
  z-index: 1;
`;
