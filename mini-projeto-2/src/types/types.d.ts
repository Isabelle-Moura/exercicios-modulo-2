//Tipagem dos componentes das telas SignIn e SignUp
interface LabelProps {
    title: string
}

interface InputProps {
    type: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }

interface TitlePageProps {
    title: string
}

interface ButtonProps {
    name: string
}

interface SubTitleProps {
    subtitle: string
}

////////////////////////////////////