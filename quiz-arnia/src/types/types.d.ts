type ScreenType = 'register' | 'list' | 'response' | 'last'

interface AnswerType {
    id: string
    description: string 
    correct: boolean
} 

interface QuestionType {
    question: string
    answer1: AnswerType
    answer2: AnswerType
    answer3: AnswerType
    answer4: AnswerType
}