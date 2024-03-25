import styled from "styled-components";
import { ButtonStyled } from "../Button/ButtonStyled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0 110px;
  align-items: center;

  ${ButtonStyled} {
    margin-top: 20px;
  }
`;
