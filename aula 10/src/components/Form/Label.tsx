import { styled } from "styled-components";

interface LabelType {
  title: string;
}

const LabelStyle = styled.label`
  font-size: 20px;
  color: indigo;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
`;

const Label = ({ title }: LabelType) => {
  return (
    <>
      <LabelStyle>{title}</LabelStyle>
    </>
  );
};

export default Label;
