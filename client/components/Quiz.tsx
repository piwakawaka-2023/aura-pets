import { ChangeEvent, useState, useEffect, FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { getQuestionsThunk } from '../actions/questions'
import { getAnswerThunk } from '../actions/answers'
import { increment } from '../actions/results'
import { ResultTally } from '../reducers/results'
import { useNavigate } from 'react-router-dom'
import AnimatedPage from './AnimatedPage'

function Quiz() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const questions = useAppSelector((state) => state.questionsReducer)
  const answers = useAppSelector((state) => state.answersReducer)
  const resultTally: ResultTally = useAppSelector(
    (state) => state.resultsReducer
  )

  interface FormStateData {
    question: number
    answerRelatedPet: string
  }
  interface AnswerStateData {
    question: number
    answerId: string
  }

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [formData, setFormData] = useState([] as FormStateData[])
  const [formAnswers, setFormAnswers] = useState([] as AnswerStateData[])
  const [transitionClass, setTransitionClass] = useState('')

  useEffect(() => {
    dispatch(getQuestionsThunk())
    dispatch(getAnswerThunk())
  }, [dispatch])

  useEffect(() => {
    setFormAnswers(
      questions.map((question) => {
        return {
          question: question.id,
          answerId: '',
        }
      })
    )
    setFormData(
      questions.map((question) => {
        return {
          question: question.id,
          answerRelatedPet: '',
        }
      })
    )
  }, [questions])

  useEffect(() => {
    if (resultTally.Count === 10) {
      const comparisonArr = Object.values(resultTally)
      comparisonArr.sort((a, b) => a - b)

      switch (comparisonArr[3]) {
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
  }, [resultTally, navigate])

  const playSound = (soundFileName: string) => {
    const audio = new Audio(`/snds/${soundFileName}`)
    audio.play()
  }

  const onAnswerSelection = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => {
      const updatedFormData = [...prevFormData]
      updatedFormData[currentQuestion].answerRelatedPet = evt.target.value
      return updatedFormData
    })
    setFormAnswers((prevFormData) => {
      const updatedAnswerData = [...prevFormData]
      updatedAnswerData[currentQuestion].answerId = evt.target.id
      return updatedAnswerData
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1)
      setTransitionClass('next-question')
      playSound('sfx-button-1.mp3')
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1)
      setTransitionClass('previous-question')
      playSound('sfx-button-2.mp3')
    }
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()

    const namesArr = formData.map((item) => {
      return item.answerRelatedPet
    })

    namesArr.forEach((name) => {
      dispatch(increment(name))
    })
    playSound('sfx-button-4.mp3')
  }

  return (
    <>
      <AnimatedPage>
        <div className="form-container">
          <form id="quiz-form" onSubmit={handleSubmit}>
            {questions.map((question, index) => {
              if (index === currentQuestion) {
                return (
                  <section
                    key={question.id}
                    className={`quiz-section ${transitionClass}`}
                    onAnimationEnd={() => setTransitionClass('')}
                  >
                    <p className="quiz-question">{question.question}</p>
                    {answers.map((answer) => {
                      if (answer.questionId === question.id) {
                        return (
                          <label
                            key={answer.id}
                            htmlFor={`${answer.id}`}
                            className="quiz-label"
                          >
                            <input
                              type="radio"
                              id={`${answer.id}`}
                              name={`${question.id}`}
                              value={answer.petName}
                              onChange={onAnswerSelection}
                              checked={
                                String(answer.id) ==
                                formAnswers[currentQuestion].answerId
                              }
                              className="quiz-input"
                            />
                            {answer.answer}
                            <br />
                          </label>
                        )
                      }
                    })}
                  </section>
                )
              } else {
                return null
              }
            })}
            <div className="form-parent">
              <button
                type="button"
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className="quiz-button"
                id="quiz-previous-button"
              >
                Previous Question
              </button>
              {currentQuestion < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="quiz-button"
                  id="quiz-next-button"
                >
                  Next Question
                </button>
              ) : (
                <input
                  type="submit"
                  value="Submit Quiz Answers"
                  className="quiz-button quiz-submit"
                />
              )}
            </div>
          </form>
        </div>
      </AnimatedPage>
    </>
  )
}

export default Quiz
