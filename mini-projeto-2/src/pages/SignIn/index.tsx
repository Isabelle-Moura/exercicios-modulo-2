import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import Label from "../../components/SignIn-SignUp/Label";
import Input from "../../components/SignIn-SignUp/Input";
import Title from "../../components/SignIn-SignUp/Title";
import Button from "../../components/SignIn-SignUp/Button";
import { Container } from "../../styles/SignIn-SignUp/Container";
import { Form } from "../../styles/SignIn-SignUp/StyledForm";
import { StyledLink } from "../../styles/SignIn-SignUp/Container";
import { userLogin } from "../../services/user";

const SignIn = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserProps>({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const statusCode = await userLogin(userData.email, userData.password);

      if (statusCode === 200) {
        const token = localStorage.getItem("token");

        if (token) {
          localStorage.setItem("userData", JSON.stringify(userData));
          navigate("/home-kanban");
        } else {
          console.error("Token não encontrado no localStorage.");
        }
      } else if (statusCode === 404) {
        console.error("Usuário não encontrado");
      } else if (statusCode === 401) {
        console.error("Senha incorreta");
      }
    } catch (error) {
      console.error("Ocorreu um erro!", error);
    }
  };

  return (
    <Container>
      <Title title="Arnia Trello" />
      <Form onSubmit={handleSubmit}>
        <Label title="E-mail" />
        <Input name="email" type="text" onChange={handleChange} />
        <Label title="Senha" />
        <Input name="password" type="password" onChange={handleChange} />
        <Button name="ENTRAR" type="submit" />
        <StyledLink to="/fazer-cadastro">Cadastre-se</StyledLink>
      </Form>
    </Container>
  );
};

export default SignIn;
