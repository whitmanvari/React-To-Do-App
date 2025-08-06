import React from 'react'
import { useState } from 'react'

function Todo() {
  const[task, setTask] = useState('')
  const[tasks, setTasks] = useState([]) //array to hold tasks
  const handleAddTask = () => {
    if(task.trim() === '')
      return; //prevent adding empty tasks
    setTasks([...tasks, task]); //add task to the array
    setTask(''); //clear input field
  }
  return (
    <div>
      <h1>TO-DO </h1>
      <input
        type='text'
        placeholder='Add a new task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      {/* Display the list of tasks */}
      <ul>
        {tasks.map((text, key)=> (
          <li key={key}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo