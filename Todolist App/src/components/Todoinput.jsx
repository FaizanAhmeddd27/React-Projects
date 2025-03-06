import React,{useEffect, useState} from 'react'

const Todoinput = ({addList}) => {
    const [inputText, setinputText] = useState('')

   
    const handleEnterPress = (e) => {
        if (e.keyCode === 13) {
            addList(inputText)
            setinputText('')
        }
    }
  return (
    <div className="input-container">
        <input type="text" className='input-box-todo' 
        placeholder='Enter Your Todo Here' 
        value = {inputText}
        onChange = {e => {
            setinputText(e.target.value);
        }}
        onKeyDown={handleEnterPress}
        />
        <button className='add-btn'
         onClick={() => {
            addList(inputText)
            setinputText('')}} >+</button>
        
    </div>
  )
}

export default Todoinput