import { useState } from "react";
import { useNavigate } from "react-router";
import {
  StyledInput,
  StyledLabel,
} from "../../components/SignIn-SignUp/UserForm/Label&Input/style";
import * as S from "../../components/SignIn-SignUp/UserForm/Container/style";
import { LoginService } from "../../services/user-service";
import { StyledButton } from "../../components/SignIn-SignUp/Button/style";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await LoginService(email, password);
    if (response?.success) {
      navigate("/home-kanban");
    }
  };

  return (
    <S.Container>
      <S.StyledTitle>Arnia Trello</S.StyledTitle>
      <S.StyledForm>
        <StyledLabel>E-mail</StyledLabel>
        <StyledInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <StyledLabel>Senha</StyledLabel>
        <StyledInput
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <StyledButton
          variant="MAIN"
          onClick={handleLogin}
          disabled={!email || !password}
        >
          ENTRAR
        </StyledButton>
        <S.StyledLink to="/fazer-cadastro">Cadastre-se</S.StyledLink>
      </S.StyledForm>
    </S.Container>
  );
};

export default SignIn;
