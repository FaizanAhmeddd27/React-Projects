import { useState , useEffect } from 'react'
import './App.css'
import Todoinput from './components/Todoinput'
import TodoList from './components/TodoList'


function App() {

  const [listTodo, setlistTodo] = useState([])

 
  const addList = (inputText) => {
    if (!inputText.trim()) return;
    setlistTodo([...listTodo,inputText])
  
  }

  const deleteListItem = (index) => {
    let newListTodo = listTodo.filter((_, i) => i !== index);
    setlistTodo(newListTodo);
    
  }

  return (
    <div className='main-container'>
      <div className="center-container">
        <h1>QuickList-Your Task Planner</h1>
        <Todoinput addList = {addList}/>

          <h1 className="app-heading">YOUR TODOS</h1>
          <hr />
          {listTodo.map((listItem , i) => {
            return (
              <TodoList item={listItem} key={i} index={i} deleteItem = {deleteListItem}/>
  
            )
          })}
    
      </div>

    </div>

    
  )
}

export default App
