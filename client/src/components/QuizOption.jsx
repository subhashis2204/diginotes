import classNames from "classnames"

function QuizOption({ option, onClick, correct, selected }) {
  const classes = classNames({
    "border-2 border-gray-300 p-2 rounded-md cursor-pointer hover:bg-gray-200": true,
    "bg-red-200 hover:bg-red-300": !correct && selected,
    "bg-green-200 hover:bg-green-300": correct && selected,
  })

  return (
    <>
      <div className={classes} onClick={onClick}>
        {option}
      </div>
    </>
  )
}

export default QuizOption
