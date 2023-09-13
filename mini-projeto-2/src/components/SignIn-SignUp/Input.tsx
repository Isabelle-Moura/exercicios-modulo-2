import { StyledInput } from "../../styles/SignIn-SignUp/StyledForm";

const Input = ({ type, onChange }: InputProps) => {
  return <StyledInput type={type} onChange={onChange} />;
};

export default Input;
