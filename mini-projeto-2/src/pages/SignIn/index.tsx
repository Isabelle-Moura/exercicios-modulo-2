import Label from "../../components/SignIn-SignUp/Label";
import Input from "../../components/SignIn-SignUp/Input";
import Title from "../../components/SignIn-SignUp/Title";
import Button from "../../components/SignIn-SignUp/Button";
import { Container } from "../../styles/SignIn-SignUp/Container";
import { Form } from "../../styles/SignIn-SignUp/StyledForm";
import { StyledLink } from "../../styles/SignIn-SignUp/Container";

const SignIn = () => {
  return (
    <>
      <Container>
        <Title title="Arnia Trello" />
        <Form>
          <Label title="E-mail" />
          <Input type="text" onChange={(e) => e.target.value} />
          <Label title="Senha" />
          <Input type="text" onChange={(e) => e.target.value} />
          <Button name="ENTRAR" />
          <StyledLink to="/fazer-cadastro">Cadastre-se</StyledLink>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
