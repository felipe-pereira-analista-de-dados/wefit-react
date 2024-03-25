import { ReactNode } from "react";
import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  active?: boolean;
}
export const Button = (props: ButtonProps) => {
  return (
    <ButtonStyled onClick={props.onClick} active={props.active || false}>
      {props.children}
    </ButtonStyled>
  );
};
