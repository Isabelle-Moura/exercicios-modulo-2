import React from "react";
import { StyledHeader } from "../styles/styles";
import { TitleHeader } from "../styles/styles";

const Header = () => {
  return (
    <header>
      <StyledHeader>
        <div>
          <img src="/logo.png"></img>
        </div>
        <div>
          <TitleHeader>
            <span>Loja Virtual</span>
          </TitleHeader>
        </div>
      </StyledHeader>
    </header>
  );
};

export default Header;
