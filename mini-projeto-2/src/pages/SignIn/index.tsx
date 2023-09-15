import Label from "../../components/SignIn-SignUp/Label";
import Input from "../../components/SignIn-SignUp/Input";
import Title from "../../components/SignIn-SignUp/Title";
import Button from "../../components/SignIn-SignUp/Button";
import { Container } from "../../styles/SignIn-SignUp/Container";
import { Form } from "../../styles/SignIn-SignUp/StyledForm";
import { StyledLink } from "../../styles/SignIn-SignUp/Container";
import { useNavigate } from "react-router";
import { userLogin } from "../../services/user";
import { ChangeEvent, FormEvent, useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<LoginParams>({
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
      const data = await userLogin(userData);
      localStorage.setItem("TOKEN", data.token);
      navigate("/home-kanban");
    } catch (error) {
      console.error("Ocorreu um erro!", error);
    }
  };

  return (
    <>
      <Container>
        <Title title="Arnia Trello" />
        <Form onSubmit={handleSubmit}>
          <Label title="E-mail" />
          <Input type="text" onChange={handleChange} />
          <Label title="Senha" />
          <Input type="password" onChange={handleChange} />
          <Button name="ENTRAR" type="submit" />
          <StyledLink to="/fazer-cadastro">Cadastre-se</StyledLink>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
