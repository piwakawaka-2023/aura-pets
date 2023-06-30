import { ChangeEvent, useState, useEffect, FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { getQuestionsThunk } from '../actions/questions'
import { getAnswerThunk } from '../actions/answers'
import { getResultThunk, increment } from '../actions/results'
import answersReducer from '../reducers/answers'
import questionsReducer from '../reducers/questions'
import { ResultTally } from '../reducers/results'
import { useNavigate } from 'react-router-dom'

function Quiz() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  // const questions = useAppSelector((state) => state.questionsReducer)
  // const answers = useAppSelector((state) => state.answersReducer)
  const resultTally: ResultTally = useAppSelector(
    (state) => state.resultsReducer
  )
  interface StateData {
    question: number
    answerRelatedPet: string
  }

  //=========================================== TEMPORARY ============================================
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
      petName: 'axolotl',
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
  //===============================================================================================
  const [formData, setFormData] = useState<StateData[]>(
    tempQData.map((question) => {
      return {
        question: question.qId,
        answerRelatedPet: '',
      }
    })
  )

  // useEffect(() => {
  //   dispatch(getQuestionsThunk())
  //   dispatch(getAnswerThunk())
  // }, [dispatch])

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
        {tempQData.map((question) => {
          return (
            <section key={question.qId}>
              <p>{question.question}</p>
              {tempAData.map((answer) => {
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
