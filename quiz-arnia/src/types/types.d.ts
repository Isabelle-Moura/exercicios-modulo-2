interface QuestionType {
    question: string
    alternatives: {
        answer1: string
        answer2: string
        answer3: string
        answer4: string
    }
    answerCorrect: string
    id: number
    correctAnswer: string
    setQuestion: () => void
}