import { AxiosResponse } from "axios";
import api from "./api";

type LoginApi = {
  token: string
  name: string
}

export const userLogin = async ({ email, password }: LoginParams) => {
  try {
    const response: AxiosResponse<LoginApi> = await api.post('/api/user/login', {
      email,
      password
    })
      
      const token = response.data.token
      const userName = response.data.name
  
      localStorage.setItem("token", token)
      return userName
  } catch (error) {
    if (error === 404) {
      console.error("Usuário não encontrado")  
    } 
    if (error === 401) {
      console.error("Senha incorreta.")      
    }
  }

}