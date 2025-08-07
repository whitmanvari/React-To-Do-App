import React from 'react'

function TodoForm({task, setTask, handleAddTask}) {
  return (
    <div>
        <input
         type='text'
         placeholder='Add a new task!'
         value={task}
         onChange={(e) => setTask(e.target.value)}
        >
            <button onClick={handleAddTask}>Add Task!</button>
        </input>
    </div>
  )
}

export default TodoForm