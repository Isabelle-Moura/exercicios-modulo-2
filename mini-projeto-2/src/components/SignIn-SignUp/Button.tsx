import { StyledButton } from "../../styles/SignIn-SignUp/StyledForm";

const Button = ({ name, type }: ButtonProps) => {
  return (
    <>
      <StyledButton type={type}>{name}</StyledButton>
    </>
  );
};

export default Button;
