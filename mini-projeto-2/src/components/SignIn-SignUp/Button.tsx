import { StyledButton } from "../../styles/SignIn-SignUp/StyledForm";

const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <>
      <StyledButton onClick={onClick}>{name}</StyledButton>
    </>
  );
};

export default Button;
