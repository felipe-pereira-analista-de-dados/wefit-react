import styled from "styled-components";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  justifyContent?: string;
}
export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  align-items: center;
  gap: 8px;
`;
