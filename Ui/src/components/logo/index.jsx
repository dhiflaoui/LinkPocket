import logoSrc from "./logo.png";
import { Image } from "./styles";

export const Logo = ({ maxWidth = "40px" }) => {
  return <Image src={logoSrc} alt="linkPocket" $maxWidth={maxWidth} />;
};
