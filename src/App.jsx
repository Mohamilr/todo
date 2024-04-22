import { useState } from 'react'
import Input from './components/Input/Input'
import Button from './components/Button/Button'
import "./App.css"

function App() {
  const [inputValue, setInputValue] = useState("")
  const [todoList, setTodoList] = useState([])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleCreateTodo = () => {
    if(inputValue.length === 0) {
      return alert("Enter a todo")
    }
    setTodoList((prev) => [...prev, {
      id: (todoList[todoList?.length - 1]?.id || 0) + 1,
      value: inputValue
    }])
    setInputValue("")
  }

  const handleDeleteTodo = (id) => {
    const filteredData = todoList.filter(todo => todo.id !== id)
    setTodoList(filteredData)
  }

  return (
    <main className='main'>
      <h1>My Todo List</h1>
      <div className='todo-input-container'>
        <Input name="todo-input" value={inputValue} placeholder="create a todo" onChange={(e) => handleInputChange(e)} />
        <Button text="Create" onClick={handleCreateTodo} />
      </div>

      <div className='todo-list'>
        {todoList?.map((todo) => (
          <div key={todo.id} className='todo'>
            <p>{todo.value}</p>
            <Button text="Delete" onClick={() => handleDeleteTodo(todo.id)} />

          </div>
        ))}
      </div>
    </main>
  )
}

export default App
