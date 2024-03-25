import { ReactNode } from "react";
import { CardStyled } from "./CardStyled";

interface CardProps {
  children: ReactNode;
}
export const Card = (props: CardProps) => {
  return <CardStyled>{props.children}</CardStyled>;
};
