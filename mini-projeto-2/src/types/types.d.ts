//Tipagem dos componentes das telas SignIn e SignUp
interface LabelProps {
    title: string
}

interface InputProps {
    type: "text" | "password"
    name: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }

interface TitlePageProps {
    title: string
}

interface ButtonProps {
    name: string;
    type?: "submit" | "button"
  }
  
interface SubTitleProps {
    subtitle: string
}

////////////////////////////////////

//Tipagem dos componentes da tela Home

interface ColumnProps {
    columnTitle: string 
    cardTitle?: string 
    cardDescription?: string
}
////////////////////////////////////

//Tipagem de envio e do recebimento na response dos dados do usuário
interface LoginApi {
  name: string;
  token: string;
}

interface UserProps {
  email: string;
  password: string;
}