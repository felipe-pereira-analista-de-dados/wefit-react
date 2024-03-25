import { ReactNode } from "react";
import { Wrapper } from "./Wrapper";

interface ContainerProps {
  children: ReactNode;
}
export const Container = (props: ContainerProps) => {
  return <Wrapper {...props} />;
};
