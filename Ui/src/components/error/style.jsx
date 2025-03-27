import { styled } from "styled-components";
export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: #fff;
  font-size: ${({ theme }) => theme.text.sm};
  padding: ${({ theme }) => theme.spacing.sm};
`;
