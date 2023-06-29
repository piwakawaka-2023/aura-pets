import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { getQuestionsThunk } from '../actions/questions'
import { getAnswerThunk } from '../actions/answers'

function Quiz() {
  const dispatch = useAppDispatch()
  // const questions = useAppSelector((state) => state.questionsReducer)
  // const answers = useAppSelector((state) => state.answersReducer)
  const resultTally = useAppSelector((state) => state.resultsReducer)

  const tempQData = [
    {
      qId: 1,
      question:
        'How much wood would a woodchuck shuck if a woodchuck could shuck wood?',
    },
    {
      qId: 2,
      question: 'TEMP QUESTION 2',
    },
  ]

  const tempAData = [
    {
      aId: 1,
      answer: 'LOTS',
      questionId: 1,
      petId: 1,
      petName: 'axolot',
    },
    {
      aId: 2,
      answer: 'Eh, a bit',
      questionId: 1,
      petId: 2,
      petName: 'bear',
    },
    {
      aId: 3,
      answer: 'TEMP ANSWER 1',
      questionId: 2,
      petId: 3,
      petName: 'cat',
    },
  ]

  useEffect(() => {
    dispatch(getQuestionsThunk())
    dispatch(getAnswerThunk())
  }, [dispatch])

  return (
    <>
      <form>
        {tempQData.map((question) => {
          return (
            <section key={question.qId}>
              <p>{question.question}</p>
              {tempAData.map((answer) => {
                if (answer.questionId === question.qId) {
                  return (
                    <div key={answer.aId}>
                      <input
                        type="radio"
                        id={`${answer.aId}`}
                        name={question.question}
                        value={answer.petName}
                      />
                      <label htmlFor={`${answer.aId}`}>{answer.answer}</label>
                    </div>
                  )
                }
              })}
            </section>
          )
        })}
      </form>
    </>
  )
}

export default Quiz
