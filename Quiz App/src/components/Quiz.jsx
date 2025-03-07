import React from 'react'
import QuizData from '../Data/QuizData'
import { useState } from 'react'
import QuizResult from './QuizResult'

const Quiz = () => {
    const [currentQuestion, setcurrentQuestion] = useState(0)
    const [score, setscore] = useState(0)
    const [clickedOption, setclickedOption] = useState(null)
    const [showResult, setshowResult] = useState(false)
   
    const changeQuestion = () => {
        updateScore();
        if (currentQuestion<QuizData.length-1) {
            
            setcurrentQuestion(currentQuestion+1)
            setclickedOption(null)
        } else{
            setshowResult(true);
        }
     }

     const updateScore = () => { 
        if (clickedOption === QuizData[currentQuestion].answer) {
            setscore(score+1);
        }
      }

      const resetAll = () => { 
        setshowResult(false)
        setcurrentQuestion(0)
        setclickedOption(0)
        setscore(0)
       }
  return (
    <div>
        <p className="heading-txt">QUIZ APP</p>
        <div className="container">
            {showResult? (
                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
            ):(
                <>
              
            <div className="question">
                <span id='question-number'>{currentQuestion+1}.</span>  
                <span id='question-txt'>{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option , i)=>{
                    return(
                        <button className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                         key={i} onClick={()=> setclickedOption(i+1)}>
                            {option}
                        </button>
                    )
                })}
            </div>
            <input type="button" value="Next" id='next-button' onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
  )
}

export default Quiz