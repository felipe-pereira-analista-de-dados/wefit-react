import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}
export const ButtonStyled = styled.button<ButtonProps>`
  padding: 8px 16px;
  border-radius: 4px;
  color: #ffffff;
  border: 0px;
  background: ${(props) => (props.active ? "green" : "#009edd")};
  font-weight: bold;
`;
