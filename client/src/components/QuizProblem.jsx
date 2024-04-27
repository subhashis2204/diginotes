import QuizOptionSection from "./QuizOptionSection"
import QuizQuestion from "./QuizQuestion"
import { useState } from "react"

function QuizProblem({
  question,
  options,
  answer,
  handleCorrectAnswers,
  handleIncorrectAnswers,
}) {
  const [selected, setSelected] = useState(null)

  const handleSelection = (index) => {
    setSelected(index + 1)
    if (index + 1 == answer) {
      handleCorrectAnswers()
    } else {
      handleIncorrectAnswers()
    }
  }

  const content =
    selected == answer ? (
      <div className="pt-2 text-sm text-green-700">Correct</div>
    ) : (
      <div className="pt-2 text-sm text-red-700">Incorrect</div>
    )

  return (
    <>
      <div>
        <QuizQuestion question={question} />
        <QuizOptionSection
          options={options}
          answer={answer}
          handleSelection={handleSelection}
          selected={selected}
        />
        {selected && content}
      </div>
    </>
  )
}

export default QuizProblem
