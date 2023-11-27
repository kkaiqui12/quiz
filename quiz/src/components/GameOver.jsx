import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Welldone from '../img/welldone.svg'

import './GameOver.css'

const GameOver = () => {
  const [quizState, dispacth] = useContext(QuizContext)

  return (
    <div id='gameover'>
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.</p>
      <img src={Welldone} alt="Fim do Quiz." />
      <button onClick={() => dispacth({ type: "NEW_GAME" })}>Reinciar</button>
    </div>
  )
}

export default GameOver