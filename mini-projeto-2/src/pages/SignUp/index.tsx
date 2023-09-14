import Button from "../../components/SignIn-SignUp/Button";
import Input from "../../components/SignIn-SignUp/Input";
import Label from "../../components/SignIn-SignUp/Label";
import SubTitle from "../../components/SignIn-SignUp/SubTitle";
import Title from "../../components/SignIn-SignUp/Title";
import { Container } from "../../styles/SignIn-SignUp/Container";
import { Form } from "../../styles/SignIn-SignUp/StyledForm";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/fazer-login");
  };

  return (
    <>
      <Container>
        <Title title="Arnia Trello" />
        <SubTitle subtitle="Cadastro" />
        <Form>
          <Label title="Nome completo" />
          <Input type="text" onChange={(e) => e.target.value} />
          <Label title="E-mail" />
          <Input type="text" onChange={(e) => e.target.value} />
          <Label title="Senha" />
          <Input type="text" onChange={(e) => e.target.value} />
          <Label title="Repita sua senha" />
          <Input type="text" onChange={(e) => e.target.value} />
          <Button name="CADASTRAR" onClick={handleRegister} />
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
