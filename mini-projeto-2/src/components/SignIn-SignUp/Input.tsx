const Input = ({ type, value, onChange }: InputProps) => {
  return <input type={type} placeholder={value} onChange={onChange} />;
};

export default Input;
