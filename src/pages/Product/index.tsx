import { Movie as MovieProps } from "../../App";
import { Container } from "../../components/Container";
import { Movie } from "../../components/Movie";
import { Grid } from "./Grid";

interface ProductProps {
  movies: MovieProps[];
  onClick: (movie: MovieProps) => void;
  cart: MovieProps[];
}
export const Product = (props: ProductProps) => {
  const getQuantity = (id: number) => {
    return props.cart.filter((movie) => movie.id === id).length;
  };

  return (
    <Container>
      <Grid>
        {props.movies.map((movie) => (
          <Movie
            title={movie.title}
            price={movie.price}
            image={movie.image}
            onClick={() => props.onClick(movie)}
            quantity={getQuantity(movie.id)}
          />
        ))}
      </Grid>
    </Container>
  );
};
