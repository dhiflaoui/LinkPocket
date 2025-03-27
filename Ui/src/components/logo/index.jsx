import logoSrc from "./link.png";
import { Image } from "./style";

export const Logo = ({ maxWidth = "40px" }) => {
  return <Image src={logoSrc} alt="linkPocket" $maxWidth={maxWidth} />;
};
