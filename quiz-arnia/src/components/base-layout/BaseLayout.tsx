import { Link, Outlet } from "react-router-dom";
import {
  HeaderBackground,
  Logo,
  MenuContainer,
  Nav,
} from "../../styles/Header";

const BaseLayout = () => {
  return (
    <>
      <HeaderBackground>
        <Logo src="https://cdn.izap.com.br/arnia.com.br/plus/images?src=tema/plusfiles/Logotipo.png&" />
        <MenuContainer>
          <Nav>
            <Link to="/fazer-o-quiz">Fazer o Quiz</Link>
            <Link to="/cadastrar-perguntas">Cadastrar Perguntas</Link>
            <Link to="/listar-perguntas">Listar Perguntas</Link>
          </Nav>
        </MenuContainer>
      </HeaderBackground>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default BaseLayout;
