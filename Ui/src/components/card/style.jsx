import { styled } from "styled-components";

export const Wrapper = styled.div`
  background-color: #f5f5f5;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  ${({ theme, $maxWidth }) => ($maxWidth ? `max-width: ${$maxWidth}` : "")};
  ${({ theme, $noPadding, $maxWidth }) =>
    $noPadding ? "" : `padding: ${theme.spacing.md}`};
  ${({ $fullHeight }) => ($fullHeight ? "height: 100%;" : "")};
`;
