type Visibility = 'SHOW' | 'HIDE'

interface Question {
    title: string
    content: string
    id: number
    isVisible: Visibility
}

type Questions = Question[]

interface CreateQuestion {
    title: string
    content: string
} 

type UpdateQuestion = Omit<Question, 'id'>