import { styled } from "styled-components";
export const Wrapper = styled.div`
  border: 1px solid ${({ props }) => props.theme.colors.border};
  border-radius: ${({ props }) => props.theme.borderRadius};
  color: #fff;
  font-size: ${({ props }) => props.theme.text.sm};
  padding: ${({ props }) => props.theme.spacing.sm};
`;
