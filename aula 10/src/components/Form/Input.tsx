import { InputStyle } from "../../styles/InputStyle";

interface InputType {
  placeholder: string;
  name: string;
  type?: "text";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

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
