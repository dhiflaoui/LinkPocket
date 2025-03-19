import { styled } from "styled-components";
export const ButtonElement = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  padding: ${(props) => props.theme.spacing.sm};
  width: 100%;
  &:hover {
    background: ${(props) => props.theme.colors.primaryHover};
  }
`;
