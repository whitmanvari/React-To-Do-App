import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ tasks, completed, toggleComplete, handleEdit, handleDelete, handleSaveEdit, setEditMode, setEditTask, editTask, editMode}) {
  return (
    <ul>
        {tasks.map((text, key) => (
            <TodoItem key={key} text={text} completed={completed} toggleComplete={toggleComplete} handleEdit={handleEdit} handleDelete={handleDelete} editMode={editMode} editTask={editTask} setEditTask={setEditTask} setEditMode={setEditMode} handleSaveEdit={handleSaveEdit}/>
        ))}
    </ul>
  )
}

export default TodoList