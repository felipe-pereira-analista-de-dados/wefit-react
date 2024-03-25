import { Movie } from "../../App";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Flex } from "./Flex";
import { Table } from "./Table";
import { MovieCard } from "./MovieCard";

interface CartProps {
  cart: Movie[];
  addMovie: (movie: Movie) => void;
  removeMovie: (id: number) => void;
  removeAllMovies: (id: number) => void;
  goToSuccess: () => void;
}
export const Cart = (props: CartProps) => {
  const groups = Object.groupBy(props.cart, (movie: Movie) => movie.id);
  const totalAmount = props.cart.reduce(
    (previous: number, current: Movie) => (previous += current.price),
    0
  );

  return (
    <Container>
      <Card>
        <Table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>QTD</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.values(groups).map((movies: any) => (
              <tr>
                <td>
                  <MovieCard
                    title={movies[0].title}
                    price={movies[0].price}
                    image={movies[0].image}
                  />
                </td>
                <td>
                  <Flex justifyContent="flex-start">
                    <div onClick={() => props.removeMovie(movies[0].id)}>
                      <img src="/menos.png" alt="" />
                    </div>
                    {movies.length}
                    <div onClick={() => props.addMovie(movies[0])}>
                      <img src="/mais.png" alt="" />
                    </div>
                  </Flex>
                </td>
                <td>R$ {(movies.length * movies[0].price).toFixed(2)}</td>
                <td>
                  <div onClick={() => props.removeAllMovies(movies[0].id)}>
                    <img src="/lixeira.png" alt="" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <hr />
        <Flex>
          <Button onClick={props.goToSuccess}>FINALIZAR PEDIDO</Button>
          <Flex>
            <span>TOTAL</span>
            <h2>R$ {totalAmount.toFixed(2)}</h2>
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
};
