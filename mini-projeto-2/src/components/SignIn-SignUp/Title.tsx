import { StyledTitle } from "../../styles/SignIn-SignUp/StyledTitles";

const Title = ({ title }: TitlePageProps) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
    </>
  );
};

export default Title;
