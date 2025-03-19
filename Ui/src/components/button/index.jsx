import { ButtonElement } from "./style";

export const Button = ({
  children,
  disabled = false,
  isLoading = false,
  ...props
}) => {
  return (
    <ButtonElement {...props} disabled={disabled || isLoading}>
      {isLoading ? "loading" : children}
    </ButtonElement>
  );
};
