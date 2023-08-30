import { LabelStyle } from "../../styles/LabelStyle";

interface LabelType {
  title: string;
}

const Label = ({ title }: LabelType) => {
  return (
    <>
      <LabelStyle>{title}</LabelStyle>
    </>
  );
};

export default Label;
