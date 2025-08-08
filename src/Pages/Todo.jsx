import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoForm from '../Components/TodoForm';
import TodoList from '../Components/TodoList';
import SearchBar from '../Components/SearchBar';


function Todo() {
  const[task, setTask] = useState('') 
  const[tasks, setTasks] = useState([]) //array to hold tasks
  const[completed, setCompleted] = useState([]) 
  const[editMode, setEditMode]= useState(null) //which task is being edited
  const[editTask, setEditTask]=useState('')
  const[searchTerm, setSearchTerm] = useState('')
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
  const filteredTasks = tasks.filter(task => task.toLowerCase().includes(searchTerm.toLowerCase()))
  const toggleComplete = (text) => {
    if(completed.includes(text)){
      setCompleted(completed.filter(item => item !== text)); //remove from completed
    }
    else {
      setCompleted([...completed, text])
    }
  }
  return (
    <div  style={{ maxWidth: '600px', margin: '2rem auto', padding: '0 1rem', fontFamily: "'Poppins', sans-serif", color: '#222' }}>
      <h1 style={{ marginBottom: '1.5rem', color: '#0077b6'}}>TO-DO </h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TodoForm task={task} setTask={setTask} handleAddTask={handleAddTask} />
      <TodoList tasks={filteredTasks} completed={completed} toggleComplete={toggleComplete} handleEdit={handleEdit} handleDelete={handleDelete} editMode={editMode} editTask={editTask} setEditTask={setEditTask} setEditMode={setEditMode} handleSaveEdit={handleSaveEdit} />
      <ToastContainer position="top-center" />
    </div>
  )
}

export default Todo