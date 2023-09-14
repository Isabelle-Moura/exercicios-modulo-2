import {
  HeaderContainer,
  StyledLink,
} from "../../../styles/Home/HeaderContainer";
import Logo from "./Logo";
import UserName from "./UserName";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <div className="user-and-link">
          <UserName />
          <StyledLink to="/fazer-login">Sair</StyledLink>
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
