import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Category from '../img/category.svg'

import './PickCategory.css'

const PickCategory = () => {
  const [quizState, dispacth] = useContext(QuizContext)

  const chooseCategoryAndReorderQuestions = (category) => {
    dispacth({ type: "START_GAME", payload: category })

    dispacth({ type: "REORDER_QUESTIONS" })
  }

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão diferentes a uma das linguegens abaixo:</p>
      <div>
        {quizState.questions.map((question) => (
          <button onClick={() => chooseCategoryAndReorderQuestions(question.category)} 
          key={question.category}>{question.category}</button>
        ))}
      </div>
      <img src={Category} alt="Categorias do Quiz" />
    </div>
  )
}

export default PickCategory