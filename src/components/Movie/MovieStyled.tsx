import styled from "styled-components";

export const MovieStyled = styled.div`
  display: flex;
  padding: 9px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -10px;

  span {
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    p {
      margin: 0px;
      margin-left: 12px;
      text-transform: uppercase;
    }
  }

  h3 {
    margin-top: 8px;
    margin-bottom: 4px;
  }
`;
