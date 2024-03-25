import { Container } from "../../components/Container";
import { Feedback } from "../../components/Feedback";

export const Error = () => {
  return (
    <Container>
      <Feedback
        title="Parece que não há nada por aqui :("
        image="/error.png"
        button="Recarregar página"
        onClick={() => window.location.reload()}
      />
    </Container>
  );
};
