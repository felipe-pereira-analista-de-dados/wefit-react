import { Container } from "../Container";
import { Text } from "./Text";
import { Wrapper } from "./Wrapper";

interface NavBarProps {
  items: number;
  goToHome: () => void;
  goToCart: () => void;
}
export const NavBar = (props: NavBarProps) => {
  return (
    <Container>
      <Wrapper>
        <span onClick={props.goToHome}>WeMovies</span>

        <Wrapper onClick={props.goToCart}>
          <div>
            <Text>Meu carrinho</Text>
            <Text small>{props.items} itens</Text>
          </div>
          <img src="/Cart.png" alt="" />
        </Wrapper>
      </Wrapper>
    </Container>
  );
};
