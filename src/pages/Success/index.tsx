import { Container } from "../../components/Container";
import { Feedback } from "../../components/Feedback";

export const Success = () => {
  return (
    <Container>
      <Feedback
        title="Compra realizada com sucesso!"
        image="/success.png"
        button="VOLTAR"
        onClick={() => window.location.reload()}
      />
    </Container>
  );
};
