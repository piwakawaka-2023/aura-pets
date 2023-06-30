import { ChangeEvent, useState, useEffect, FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { getQuestionsThunk } from '../actions/questions'
import { getAnswerThunk } from '../actions/answers'
import { increment } from '../actions/results'
import { ResultTally } from '../reducers/results'
import { useNavigate } from 'react-router-dom'

function Quiz() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const questions = useAppSelector((state) => state.questionsReducer)
  const answers = useAppSelector((state) => state.answersReducer)
  const resultTally: ResultTally = useAppSelector(
    (state) => state.resultsReducer
  )
  interface StateData {
    question: number
    answerRelatedPet: string
  }

  const [formData, setFormData] = useState<StateData[]>(
    questions.map((question) => {
      return {
        question: question.qId,
        answerRelatedPet: '',
      }
    })
  )

  useEffect(() => {
    dispatch(getQuestionsThunk())
    dispatch(getAnswerThunk())
  }, [dispatch])

  const onAnswerSelection = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData(
      formData.map((data) => {
        if (data.question === Number(evt.target.name))
          data.answerRelatedPet = evt.target.value
        return data
      })
    )
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    const namesArr = formData.map((item) => {
      return item.answerRelatedPet
    })

    namesArr.map((name) => {
      dispatch(increment(name))
    })

    const comparisonArr = Object.values(resultTally)
    comparisonArr.sort()
    comparisonArr[3]

    switch (comparisonArr[3]) {
      case resultTally.axolotl:
        navigate(`/result/${1}`)
        break

      case resultTally.penguin:
        navigate(`/result/${2}`)
        break

      case resultTally.bear:
        navigate(`/result/${3}`)
        break

      case resultTally.cat:
        navigate(`/result/${4}`)
        break
    }
  }

  return (
    <>
      <form>
        {questions.map((question) => {
          return (
            <section key={question.qId}>
              <p>{question.question}</p>
              {answers.map((answer) => {
                if (answer.questionId === question.qId) {
                  return (
                    <div key={answer.aId} onChange={onAnswerSelection}>
                      <input
                        type="radio"
                        id={`${answer.aId}`}
                        name={`${question.qId}`}
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
        <input
          type="submit"
          value="Subit Quiz Answers"
          onClick={handleSubmit}
        />
      </form>
    </>
  )
}

export default Quiz
