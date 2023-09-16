import api from "./api"
import { AxiosResponse } from "axios"

export const GetCards = async () => {
    try {
       const token = localStorage.getItem("token")
       const cards: AxiosResponse<CardType[]> = await api.get("api/card", {
        headers: {Authorization: token},
       })

       return cards.data
    } catch (error) {
        console.error(error)
    }
}

export const DeleteCard = async (id: string) => {
    try {
        const token = localStorage.getItem("token")
        const newCards: AxiosResponse<CardProps[]> = await api.delete(`api/card/${id}`, {
            headers: { Authorization: token },
        })

        return newCards.data
    } catch (error) {
        console.error(error)
    }
}

export const ChangeColumn = async (newColumn: Column, id: string) => {
    try {
        const token = localStorage.getItem("token")
        const newCards: AxiosResponse<CardProps[]> = await api.put(`api/card/${id}`, {
            column: newColumn,
        }, {
            headers: { Authorization: token },
        })
        return newCards.data
    } catch (error) {
        console.error(error)
    }
}