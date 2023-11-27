import { useContext } from 'react'
import { QuizContext } from './context/quiz'

import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from './components/GameOver'
import PickCategory from './components/PickCategory'

import './App.css'

function App() {
  const [quizState] = useContext(QuizContext)

  return (
    <div className='App'>
      <h1>Quiz de programção</h1>
      {quizState.gameState === "Start" && <Welcome />}
      {quizState.gameState === "Category" && <PickCategory />}
      {quizState.gameState === "Playing" && <Question />}
      {quizState.gameState === "End" && <GameOver />}
    </div>
  )
}

export default App
