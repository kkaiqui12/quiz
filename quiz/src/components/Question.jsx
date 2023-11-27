import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Option from './Option'

import './Question.css'

const Question = () => {
  const [quizState, dispacth] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onselectOption = (option) => {
    dispacth({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option }
    })
  }

  return (
    <div id='question'>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div className="options-container">
        {currentQuestion.options.map((option) => (
          <Option option={option} 
          key={option} 
          answer={currentQuestion.answer} 
          selectOption={() => onselectOption(option)}
          hide={quizState.optionToHide === option ? "hide" : null}
          />
        ))}
      </div>
      {!quizState.answerSelected && !quizState.help && (
        <>
          {currentQuestion.tip && (
            <button onClick={() => dispacth({ type:"SHOW_TIP" })}>Dica</button>
          )}
          <button onClick={() => dispacth({ type: "REMOVE_OPTION" })}>Excluir uma</button>
        </>
      )}
      {!quizState.answerSelected && quizState.help === 'tip' && <p>{currentQuestion.tip}</p>}
      {quizState.answerSelected && (
        <button onClick={() => dispacth({ type: "CHANGE_QUESTION" })}>Continuar</button>
      )}
    </div>
  )
}

export default Question