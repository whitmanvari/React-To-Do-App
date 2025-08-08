import React from 'react'

function TodoItem({text, className, completed, toggleComplete, handleEdit, handleDelete, editMode, editTask, setEditTask, handleSaveEdit, setEditMode}) {
  return (
    <div className={className}>
        <li className={`todo-item ${completed.includes(text) ? 'completed' : ''}`}>
            <input
             type='checkbox'
             checked={completed.includes(text)}
             onChange={() => toggleComplete(text)}/>
             {editMode===text ? (
                <>
                 <input
                  type='text'
                  className='todo-edit-input'
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                 />
                 <button className= 'todo-save-button' onClick={handleSaveEdit}>Save!</button>
                 <button className= 'todo-cancel-button' onClick={() => setEditMode(null)}>Cancel!</button>
                </>
             ) : (
                <>
                 <span style={{textDecoration: completed.includes(text) ? 'line-through' : 'none'}}>
                    {text}
                 </span>
                 <button className='todo-edit-button' onClick={() => handleEdit(text)}>Edit!</button>
                 <button className='todo-delete-button' onClick={() => handleDelete(text)}>Delete!</button>
                </>
             )}
        </li>
    </div>
  )
}

export default TodoItem