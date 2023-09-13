import { StyledButton } from "../../styles/SignIn-SignUp/StyledForm";

const Button = ({ name }: ButtonProps) => {
  return (
    <>
      <StyledButton>{name}</StyledButton>
    </>
  );
};

export default Button;
