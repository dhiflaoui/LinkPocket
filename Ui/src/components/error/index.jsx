import { Wrapper } from "./style";

export const Error = ({
  children,
  $maxWidth = false,
  $noPadding = false,
  $fullHeight = false,
}) => {
  return (
    <Wrapper
      $maxWidth={$maxWidth}
      $noPadding={$noPadding}
      $fullHeight={$fullHeight}
    >
      {children}
    </Wrapper>
  );
};
