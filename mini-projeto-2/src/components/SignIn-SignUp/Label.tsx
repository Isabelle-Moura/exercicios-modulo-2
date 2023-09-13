import { StyledLabel } from "../../styles/SignIn-SignUp/StyledForm";

const Label = ({ title }: LabelProps) => {
  return (
    <>
      <StyledLabel>{title}</StyledLabel>
    </>
  );
};

export default Label;
