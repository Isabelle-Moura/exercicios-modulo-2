import { StyledSubTitle } from "../../styles/SignIn-SignUp/StyledTitles";

const SubTitle = ({ subtitle }: SubTitleProps) => {
  return (
    <>
      <StyledSubTitle>{subtitle}</StyledSubTitle>
    </>
  );
};

export default SubTitle;
