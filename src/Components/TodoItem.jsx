import React from 'react'

function TodoItem({text, completed, toggleComplete, handleEdit, handleDelete, editMode, editTask, setEditTask, handleSaveEdit, setEditMode}) {
  return (
    <div>
        <li>
            <input
             type='checkbox'
             checked={completed.includes(text)}
             onChange={() => toggleComplete(text)}/>
             {editMode===text ? (
                <>
                 <input
                  type='text'
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                 />
                 <button onClick={handleSaveEdit}>Save!</button>
                 <button onClick={() => setEditMode(null)}>Cancel!</button>
                </>
             ) : (
                <>
                 <span style={{textDecoration: completed.includes(text) ? 'line-through' : 'none'}}>
                    {text}
                 </span>
                 <button onClick={() => handleEdit(text)}>Edit!</button>
                 <button onClick={() => handleDelete(text)}>Delete!</button>
                </>
             )}
        </li>
    </div>
  )
}

export default TodoItem