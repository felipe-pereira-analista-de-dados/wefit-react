import styled from "styled-components";

interface TextProps {
  small?: boolean;
}
export const Text = styled.span<TextProps>`
  display: block;
  font-size: ${({ small }) => (small ? "12px" : "14px")};
  color: ${({ small }) => (small ? "#999999" : "#ffffff")};
  text-align: ${({ small }) => (small ? "right" : "left")};
`;
