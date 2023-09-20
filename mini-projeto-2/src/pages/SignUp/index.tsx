import { useState } from "react";
import { useNavigate } from "react-router";
import {
  StyledInput,
  StyledLabel,
} from "../../components/SignIn-SignUp/UserForm/Label&Input/style";
import * as S from "../../components/SignIn-SignUp/UserForm/Container/style";
import { CreateUserService } from "../../services/user-service";
import { StyledButton } from "../../components/SignIn-SignUp/Button/style";

const SignUp = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const isAllFilled = () =>
    !userData.email ||
    !userData.name ||
    !userData.password ||
    !userData.repeatPassword;

  const handleRegister = async () => {
    const { name, email, password, repeatPassword } = userData;

    if (password != repeatPassword) return;

    const response = await CreateUserService(email, password, name);

    if (response?.success) {
      navigate("/");
    }
  };

  return (
    <>
      <S.Container>
        <S.StyledTitle>Arnia Trello</S.StyledTitle>
        <S.StyledSubTitle>Cadastro</S.StyledSubTitle>
        <S.StyledForm>
          <StyledLabel>Nome completo</StyledLabel>
          <StyledInput
            value={userData.name}
            onChange={(event) =>
              setUserData({ ...userData, name: event.target.value })
            }
          />
          <StyledLabel>E-mail</StyledLabel>
          <StyledInput
            value={userData.email}
            onChange={(event) =>
              setUserData({ ...userData, email: event.target.value })
            }
          />
          <StyledLabel>Senha</StyledLabel>
          <StyledInput
            type="password"
            value={userData.password}
            onChange={(event) =>
              setUserData({ ...userData, password: event.target.value })
            }
          />
          <StyledLabel>Repita sua senha</StyledLabel>
          <StyledInput
            type="password"
            value={userData.repeatPassword}
            onChange={(event) =>
              setUserData({ ...userData, repeatPassword: event.target.value })
            }
            onBlur={() => {
              if (userData.password !== userData.repeatPassword) {
                alert("As senhas estão diferentes!");
              }
            }}
          />
          <StyledButton
            variant="MAIN"
            disabled={isAllFilled()}
            onClick={handleRegister}
          >
            CADASTRAR
          </StyledButton>
        </S.StyledForm>
      </S.Container>
    </>
  );
};

export default SignUp;
