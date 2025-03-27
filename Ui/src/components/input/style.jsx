import { styled } from "styled-components";

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  display: block;
  font-size: ${({ theme }) => theme.text.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;
export const InputElement = styled.input`
  border: 1px solid
    ${({ theme }) =>
      theme.$hasError ? theme.colors.error : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius}d
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.text.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  &:focus {
     outline-color: ${({ theme }) => theme.colors.primary};
  }
`;
export const Error = styled.label`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.text.xs};
  margin-top: 4px;
`;
