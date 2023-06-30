import { ChangeEvent, useState, useEffect, FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { getQuestionsThunk } from '../actions/questions'
import { getAnswerThunk } from '../actions/answers'
import { increment } from '../actions/results'
import { ResultTally } from '../reducers/results'
import { useNavigate } from 'react-router-dom'

function Quiz() {
  const questions = useAppSelector((state) => state.questionsReducer)
  const answers = useAppSelector((state) => state.answersReducer)
  const resultTally: ResultTally = useAppSelector(
    (state) => state.resultsReducer
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  interface StateData {
    question: number
    answerRelatedPet: string
  }

  const [formData, setFormData] = useState([] as StateData[])

  useEffect(() => {
    dispatch(getQuestionsThunk())
    dispatch(getAnswerThunk())
  }, [dispatch])

  useEffect(() => {
    setFormData(
      questions.map((question) => {
        return {
          question: question.id,
          answerRelatedPet: '',
        }
      })
    )
  }, [questions])

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
    const newArr = comparisonArr.sort()

    switch (newArr[3]) {
      case resultTally.Axolotl:
        navigate(`/result/${1}`)
        break

      case resultTally.Penguin:
        navigate(`/result/${2}`)
        break

      case resultTally.Bear:
        navigate(`/result/${3}`)
        break

      case resultTally.Cat:
        navigate(`/result/${4}`)
        break
    }
  }

  return (
    <>
      <form>
        {questions.map((question) => {
          return (
            <section key={question.id}>
              <p>{question.question}</p>
              {answers.map((answer) => {
                if (answer.questionId === question.id) {
                  return (
                    <div key={answer.id} onChange={onAnswerSelection}>
                      <input
                        type="radio"
                        id={`${answer.id}`}
                        name={`${question.id}`}
                        value={answer.petName}
                      />
                      <label htmlFor={`${answer.id}`}>{answer.answer}</label>
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
