import { useState, useEffect } from "react";
import * as S from "./style";

const Header = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name") ?? "");
  }, []);

  return (
    <>
      <S.HeaderContainer>
        <S.StyledH1>Arnia Trello</S.StyledH1>
        <div className="user-and-link">
          <S.StyledUserName>Olá, {name}</S.StyledUserName>
          <S.StyledLink to="/fazer-login">Sair</S.StyledLink>
        </div>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
