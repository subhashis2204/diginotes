import QuizOption from "./QuizOption"
import { useState } from "react"

function QuizOptionSection({ options, answer, handleSelection, selected }) {
  const renderOptions = options.map((option, index) => {
    return (
      <>
        <QuizOption
          key={index}
          option={option}
          onClick={() => {
            !selected && handleSelection(index)
          }}
          correct={answer == index + 1}
          selected={selected}
        />
      </>
    )
  })

  return (
    <>
      <div className="flex flex-col gap-2">{renderOptions}</div>
    </>
  )
}

export default QuizOptionSection
