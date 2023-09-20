import { AxiosResponse, isAxiosError } from "axios"
import api from "./api"

const defaultErrors = (error: unknown) => {
  if (isAxiosError(error)){
    switch (error.status) {
      case 401: throw new Error('Token inválido, faça o login novamente')
      default: throw new Error('Ocorreu um erro em nossos servidores, tente novamente mais tarde')
    }
  }  
}

export const getCards = async (): Promise<Cards> => {
  try {
    const response: AxiosResponse<Cards> = await api.get('/api/card', {
      headers: {
        'Authorization': localStorage.getItem('token') ?? ''
      }
    })
    return response.data
  } catch (error) {
    defaultErrors(error)
  }
  throw new Error ('Ocorreu um erro em nossos servidores')
}

/////////////////

export const createCard = async (data: CreateCard) => {
  try {
   const response = await api.post('/api/card', data, {
    headers: {
      'Authorization': localStorage.getItem('token') ?? ''
  }})
    return response.data
  } catch (error) {
    defaultErrors(error)
  }
  throw new Error ('Ocorreu um erro em nossos servidores')
}

/////////////////

export const updateCard = async (id: string, data: UpdateCard) => {
  try {
    const response = await api.put(`/api/card/${id}`, data, {
      headers: {
        'Authorization': localStorage.getItem('token') ?? ''
  }})
    return response.data 

  } catch (error) {
    defaultErrors(error)
  }
  throw new Error ('Ocorreu um erro em nossos servidores')
}

/////////////////

export const deleteCard = async (id: string) => {
  try {
    const response = await api.delete(`/api/card/${id}`, {
      headers: {
        'Authorization': localStorage.getItem('token') ?? ''
  }})
    return response.data

  } catch (error) {
    defaultErrors(error)
  }
  throw new Error ('Ocorreu um erro em nossos servidores')
}

/////////////////
