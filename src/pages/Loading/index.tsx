import { Container } from "../../components/Container";
import { LoadingStyled } from "./LoadingStyled";

export const Loading = () => {
  return (
    <Container>
      <LoadingStyled>
        <img src="/Loader.png" alt="" />
      </LoadingStyled>
    </Container>
  );
};
