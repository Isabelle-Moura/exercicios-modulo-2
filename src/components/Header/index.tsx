import { Link } from "react-router-dom";
import * as S from "./style";

const Header = () => {
  return (
    <>
      <S.HeaderBackground>
        <S.Logo src="https://cdn.izap.com.br/arnia.com.br/plus/images?src=tema/plusfiles/Logotipo.png&" />
        <S.MenuContainer>
          <S.Nav>
            <Link to="/faq-arnia">FAQ</Link>
            <Link to="/perguntas-cadastradas">Perguntas Cadastradas</Link>
            <Link to="/cadastrar-pergunta">Cadastrar Pergunta</Link>
          </S.Nav>
        </S.MenuContainer>
      </S.HeaderBackground>
    </>
  );
};

export default Header;
