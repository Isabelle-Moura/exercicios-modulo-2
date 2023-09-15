import { StyledInput } from "../../styles/SignIn-SignUp/StyledForm";

const Input = ({ type, name, onChange }: InputProps) => {
  return <StyledInput name={name} type={type} onChange={onChange} />;
};

export default Input;
