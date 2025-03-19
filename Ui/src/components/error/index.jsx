import { Wrapper } from "./style";

export const Card = ({
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
