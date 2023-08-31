import {
  Logo,
  HeaderBackground,
  MenuContainer,
  MenuItem,
} from "../styles/Header";

const Header = () => {
  return (
    <>
      <HeaderBackground>
        <Logo src="https://cdn.izap.com.br/arnia.com.br/plus/images?src=tema/plusfiles/Logotipo.png&" />
        <MenuContainer>
          <MenuItem>Fazer o Quiz</MenuItem>
          <MenuItem>Cadastrar Perguntas</MenuItem>
          <MenuItem>Listar Perguntas</MenuItem>
        </MenuContainer>
      </HeaderBackground>
    </>
  );
};

export default Header;
