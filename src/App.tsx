import React, { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Error } from "./pages/Error";
import { createGlobalStyle } from "styled-components";
import { Product } from "./pages/Product";
import { Loading } from "./pages/Loading";
import { Cart } from "./pages/Cart";
import { Success } from "./pages/Success";

const GlobalStyle = createGlobalStyle`
  body {
    background: #2F2E41;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
  }
`;

export interface Movie {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity?: number;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [cart, setCart] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("product");

  useEffect(() => {
    fetch("https://wefit-movies.vercel.app/api/movies")
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.products);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const addMovie = (movie: Movie) => {
    setCart([...cart, movie]);
  };

  const removeMovie = (id: number) => {
    const index = cart.findIndex((movie: Movie) => movie.id === id);
    setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
  };

  const removeAllMovies = (id: number) => {
    setCart(cart.filter((movie: Movie) => movie.id !== id));
  };

  if (loading) {
    return (
      <>
        <GlobalStyle />
        <NavBar
          goToCart={() => setPage("cart")}
          goToHome={() => setPage("product")}
          items={cart.length}
        />
        <Loading />
      </>
    );
  }

  if (movies.length === 0) {
    return (
      <>
        <GlobalStyle />
        <NavBar
          goToCart={() => setPage("cart")}
          goToHome={() => setPage("product")}
          items={cart.length}
        />
        <Error />
      </>
    );
  }
  return (
    <>
      <GlobalStyle />
      <NavBar
        goToCart={() => setPage("cart")}
        goToHome={() => setPage("product")}
        items={cart.length}
      />
      {page === "product" && (
        <Product movies={movies} cart={cart} onClick={addMovie} />
      )}
      {page === "cart" && (
        <Cart
          cart={cart}
          addMovie={addMovie}
          removeMovie={removeMovie}
          removeAllMovies={removeAllMovies}
          goToSuccess={() => setPage("success")}
        />
      )}
      {page === "success" && <Success />}
    </>
  );
}

export default App;
