import Label from "../../components/SignIn-SignUp/Label";
import Input from "../../components/SignIn-SignUp/Input";

const SignIn = () => {
  return (
    <>
      <h1>SignIn Page</h1>
      <form>
        <Label title="E-mail" />
        <Input
          value="Digite aqui o seu e-mail."
          type="text"
          onChange={(e) => e.target.value}
        />
        <Label title="Senha" />
        <Input
          value="Digite aqui a sua senha."
          type="text"
          onChange={(e) => e.target.value}
        />
      </form>
    </>
  );
};

export default SignIn;
