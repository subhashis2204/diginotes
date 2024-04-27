import Heading from "./Heading"
import QuizProblem from "./QuizProblem"
import { useState } from "react"

function QuizSection({ mcqs }) {
  const [correctAnsers, setCorrectAnswers] = useState(0)
  const [incorrectAnswers, setIncorrectAnswers] = useState(0)

  const handleCorrectAnswers = () => {
    setCorrectAnswers(correctAnsers + 1)
  }

  const handleIncorrectAnswers = () => {
    setIncorrectAnswers(incorrectAnswers + 1)
  }

  const content =
    incorrectAnswers == 0
      ? "well done !!! You aced it 😁"
      : "You need to work harder 😥"

  const feedback = (
    <div className="pt-5 text-center font-bold text-2xl">{content}</div>
  )

  console.log(mcqs)

  return (
    <div className="p-5">
      <Heading>
        <div className="flex justify-between">
          Quiz Section
          <div>
            Score : {correctAnsers} / {mcqs && mcqs.length}
          </div>
        </div>
      </Heading>
      <div className="flex flex-col gap-4">
        {mcqs &&
          mcqs.map((mcq, index) => {
            return (
              <>
                <QuizProblem
                  key={index}
                  question={mcq.question}
                  options={mcq.options}
                  answer={mcq.answer}
                  handleCorrectAnswers={handleCorrectAnswers}
                  handleIncorrectAnswers={handleIncorrectAnswers}
                />
              </>
            )
          })}
      </div>
      {mcqs && correctAnsers + incorrectAnswers === mcqs.length && feedback}
    </div>
  )
}

export default QuizSection
