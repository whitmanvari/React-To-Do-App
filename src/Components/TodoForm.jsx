import React from 'react'

function TodoForm({task, setTask, handleAddTask}) {
  return (
    <div>
        <input
         type='text'
         className='form-control mb-2'
         placeholder='Add a new task!'
         value={task}
         onChange={(e) => setTask(e.target.value)}
        />
            <button className='btn btn-primary' onClick={handleAddTask}>Add Task!</button>
    </div>
  )
}

export default TodoForm