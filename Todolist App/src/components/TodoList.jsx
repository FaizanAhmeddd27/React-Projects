import React from 'react'

const TodoList = ({item , index , deleteItem}) => {
  return (
    <li className="list-item">
        {item}
        <span className='icons'>
        <i className="fa-solid fa-trash icon-delete" onClick = {e => {
            deleteItem(index) 
            }}>
           
        </i>
        </span>
    </li>
  )
}

export default TodoList