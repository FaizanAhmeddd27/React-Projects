import React from 'react'

const QuizResult = ({score , totalScore , tryAgain}) => {
  return (
    <>
    <div className='show-score'>
        Your Score: {score} <br />
        TotalScore: {totalScore}
    </div>
    <button id='next-button' onClick={tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult