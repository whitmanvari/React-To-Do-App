import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Styles/app.scss';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Todo from './Pages/Todo.jsx';
import Mood from './Pages/Mood.jsx';
import Navbar from './Components/Navbar.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Store} from './Store/index.jsx'

function App() {
  return (
    <>
      <div className="app">
        <Provider store = {store}>
        <Navbar />
        <Routes>
          <Route path="/" element= {<Register/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/mood" element={<Mood />} />
        </Routes>
        <ToastContainer/>
        </Provider>
      </div>
    </>
  )
}

export default App
