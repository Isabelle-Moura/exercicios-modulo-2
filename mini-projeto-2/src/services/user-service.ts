import { AxiosResponse, isAxiosError } from "axios";
import api from "./api";

export const userLogin = async (email: string, password: string) => {
  console.log(email, password)
  try {
    const userData: AxiosResponse<LoginApi> = await api.post(
      "/api/user/login",
      {
        email,
        password,
      }
    );

    const token = userData.data.token;

    localStorage.setItem("token", token);

    return userData.status; 
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        return "Usuário não encontrado";
      }
      if (error.response?.status === 401) {
        return "Senha incorreta";
      }
    }

    throw error; 
  }
};
