import { styled } from "styled-components";

interface InputType {
  placeholder: string;
  name: string;
  type?: "text";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputStyle = styled.input`
  width: 300px;
  height: 40px;
  font-size: 20px;
  padding: 0px 10px;
  border: 2px solid indigo;
  border-radius: 10px;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
`;

const Input = ({ placeholder, name, type, onChange }: InputType) => {
  return (
    <>
      <InputStyle
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
