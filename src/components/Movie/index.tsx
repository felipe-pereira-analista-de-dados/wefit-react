import { Button } from "../Button";
import { Card } from "../Card";
import { MovieStyled } from "./MovieStyled";

interface MovieProps {
  title: string;
  price: number;
  image: string;
  quantity: number;
  onClick: () => void;
}
export const Movie = (props: MovieProps) => {
  return (
    <Card>
      <MovieStyled>
        <img src={props.image} alt="" width="150px" />
        <span>{props.title}</span>
        <h3>R$ {props.price.toFixed(2)}</h3>
        <Button onClick={props.onClick} active={props.quantity > 0}>
          <span>
            <img src="/button movie.png" alt="" /> {props.quantity}
          </span>
          <p>ADICIONAR AO CARRINHO</p>
        </Button>
      </MovieStyled>
    </Card>
  );
};
