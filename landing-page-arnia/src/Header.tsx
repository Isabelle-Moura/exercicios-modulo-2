import { HeaderPurple } from "./styles/Header";
import { ArniaLogo } from "./styles/Header";
import { HeaderText } from "./styles/Header";

const Header = () => {
  return (
    <>
      <HeaderPurple>
        <ArniaLogo src="https://cdn.izap.com.br/arnia.com.br/plus/images?src=tema/plusfiles/Logotipo.png&" />
        <HeaderText>
          Se torne hoje mesmo um desenvolvedor de software.
        </HeaderText>
        <HeaderText>Conheça a Arnia.</HeaderText>
      </HeaderPurple>
    </>
  );
};

export default Header;
