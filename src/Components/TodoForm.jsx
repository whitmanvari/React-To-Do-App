import React from 'react'

function TodoForm({task, setTask, handleAddTask}) {
  return (
    <div className='todo-form'>
        <input
         type='text'
         className='todo-input'
         placeholder='Add a new task!'
         value={task}
         onChange={(e) => setTask(e.target.value)}
        />
            <button className='todo-button' onClick={handleAddTask}>Add Task!</button>
    </div>
  )
}

export default TodoForm