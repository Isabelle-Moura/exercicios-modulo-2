import { AxiosResponse, isAxiosError } from "axios";
import api from "./api";

type LoginApi = {
  token: string
  name: string
}

export const LoginService = async (email: string, password: string) => {
  console.log(email, password);
  try {
    const userData: AxiosResponse<LoginApi> = await api.post(
      "/api/user/login",
      {
        email,
        password,
      }
    );

    // Log the response data to the console
    console.log("Login API Response:", userData.data);

    const { token, name } = userData.data;

    localStorage.setItem("token", token);
    localStorage.setItem("name", name);

    return { success: true, message: name };
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        return { success: false, message: "Usuário não encontrado" };
      }
      if (error.response?.status === 401) {
        return { success: false, message: "Senha incorreta" };
      }
    }

    // Log the error to the console
    console.error("Login API Error:", error);

    throw error;
  }
};


export const CreateUserService = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const response: AxiosResponse<{ message: string }> = await api.post(
      "/api/user",
      {
        email,
        password,
        name,
      }
    );

    // Log the response data to the console
    console.log("Create User API Response:", response.data);

    return { success: true, message: response.data.message };
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 400) {
        // Log the error message to the console
        console.error("Create User API Error:", error.response?.data.message);
        
        return { success: false, message: error.response?.data.message };
      }
    }

    // Log the error to the console
    console.error("Create User API Error:", error);

    // If the error is not handled above, you can rethrow it
    throw error;
  }
};
