import { styled } from "styled-components";
export const Wrapper = styled.div`
  background-color: #f5f5f5;
  border: 1px solid ${({ props }) => props.theme.colors.border};
  border-radius: ${({ props }) => props.theme.borderRadius};
  width: 100%;
  ${(props) => (props.$maxWidth ? `max-width: ${props.$maxWidth}` : "")}
  ${(props) => (props.$noPadding ? "" : `padding: ${props.$maxWidth}`)}
  ${(props) => (props.$fullHeight ? "height: 100%;" : "")}
`;
