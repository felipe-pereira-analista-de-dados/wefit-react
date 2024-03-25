import { Card } from "../Card";
import { Button } from "../Button";
import { Wrapper } from "./Wrapper";
interface FeedbackProps {
  title: string;
  image: string;
  button: string;
  onClick: () => void;
}
export const Feedback = (props: FeedbackProps) => {
  return (
    <Card>
      <Wrapper>
        <h1>{props.title}</h1>
        <img src={props.image} alt="" />
        <Button onClick={props.onClick}>{props.button}</Button>
      </Wrapper>
    </Card>
  );
};
