interface LabelProps {
    title: string
}

interface InputProps {
    type: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }