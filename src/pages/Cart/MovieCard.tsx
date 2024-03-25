import React from "react";
import { Flex } from "./Flex";

interface MovieCardProps {
  title: string;
  price: number;
  image: string;
}

export const MovieCard = (props: MovieCardProps) => {
  return (
    <Flex justifyContent="flex-start">
      <img src={props.image} alt="" width="50px" />
      <div>
        <div>
          <b>{props.title}</b>
        </div>
        <span>R$ {props.price.toFixed(2)}</span>
      </div>
    </Flex>
  );
};
