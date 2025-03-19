import { styled } from "styled-components";
export const Label = styled.label`
  color: ${({ props }) => props.theme.colors.text};
  display: block;
  font-size: ${({ props }) => props.theme.text.sm};
  margin-bottom: ${({ props }) => props.theme.spacing.xs};
`;
export const InputElement = styled.input`
  border: 1px solid
    ${({ props }) =>
      props.$hasError ? props.theme.colors.error : props.theme.color.border};
  border-radius: ${({ props }) => props.theme.borderRadius}d
  color: ${({ props }) => props.theme.colors.text};
  font-size: ${({ props }) => props.theme.text.sm};
  padding: ${({ props }) => props.theme.spacing.sm};
  width: 100%;
  &:focus {
     outline-color: ${({ props }) => props.theme.colors.primary};
  }
`;
export const Error = styled.label`
  color: ${({ props }) => props.theme.colors.error};
  font-size: ${({ props }) => props.theme.text.xs};
  margin-top: 4px;
`;
