import { useState } from 'react'
import TodoList from './componentes/TodoList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <h1>AppTareas</h1>
    <TodoList/>
    
    </div>
  )
}

export default App
