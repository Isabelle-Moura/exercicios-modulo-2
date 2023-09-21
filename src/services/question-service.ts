import { AxiosResponse } from "axios"
import api from "./api"

export const getQuestions = async (): Promise<Questions> => {
    try {
        const response: AxiosResponse<Questions> = await api.get('/questions')
        return response.data
    } catch (error) {
        console.error(error)
        return Promise.reject(error)
    }
}

export const createQuestion = async (data: CreateQuestion) => {
    try {
        const response = await api.post('/questions', data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}
export const updateQuestion = async (id: number, data: UpdateQuestion) => {
    try {
        const response = await api.put(`/questions${id}`, data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}
export const deleteQuestion = async (id: number) => {
    try {
        const response = await api.delete(`/questions${id}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}