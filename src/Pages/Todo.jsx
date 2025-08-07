import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Todo() {
  const[task, setTask] = useState('') 
  const[tasks, setTasks] = useState([]) //array to hold tasks
  const[completed, setCompleted] = useState([]) 
  const[editMode, setEditMode]= useState(null) //which task is being edited
  const[editTask, setEditTask]=useState('')
  const handleAddTask = () => {
    if(task.trim() === '')
      return; //prevent adding empty tasks
    setTasks([...tasks, task]); //add task to the array
    setTask(''); //clear input field
  }
  const handleDelete= (text) => {
    setTasks(tasks.filter(item => item !== text)); //remove task from the array
    setCompleted(completed.filter(item => item !== text)); //remove from completed if it exists
    toast.info("Task deleted successfully!") 
  }
  const handleEdit= (text) => {
    setEditMode(text)
    setEditTask(text)
  }
  const handleSaveEdit = () => {
    if(editTask.trim() === '') {
      toast.error("Task cannot be empty!")
      return;
    }
    const updatedTasks = tasks.map(item => item === editMode ? editTask : item)
    setTasks(updatedTasks)
    const updatedCompleted = completed.map(item => item === editMode ? editTask : item)
    setCompleted(updatedCompleted)
    setEditMode(null) //exit edit mode
    setEditTask('')
    toast.success("Task updated successfully!")
  }
  const toggleComplete = (text) => {
    if(completed.includes(text)){
      setCompleted(completed.filter(item => item !== text)); //remove from completed
    }
    else {
      setCompleted([...completed, text])
    }
  }
  return (
    <div>
      <h1>TO-DO </h1>
      <input
        type='text'
        placeholder='Add a new task!'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      {/* Display the list of tasks */}
      <ul>
        {tasks.map((text, key)=> (
          <li key={key}>
            <input
              type='checkbox'
              checked={completed.includes(text)}
              onChange={() => toggleComplete(text)}
            />
            {editMode === text ? (
              <>
              <input
              type='text'
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}/>
              <button onClick={handleSaveEdit}>Save</button>
              <button onClick={() => setEditMode(null)}>Cancel</button>
              </>
            ) : (
              <>
              <span style= {{textDecoration: completed.includes(text) ? 'line-through' : 'none'}}>
                {text}
                </span>
              <button onClick={() => handleEdit(text)}>Edit</button>
              <button onClick={() => handleDelete(text)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <ToastContainer position="top-center" />
    </div>
  )
}

export default Todo