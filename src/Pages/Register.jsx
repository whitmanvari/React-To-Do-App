import React from 'react'
import {useState} from 'react'

function Register() {
  const[formData, setformData]=useState({
    name:'',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setformData({
      ...formData, [e.target.name]: e.target.value
    })
  }
  const handleSumbit = (e) => {
    e.preventDefault()
    console.log('Kayıt Verileri: ', formData)
    //API 
    alert('Kayıt Başarılı!');
  }
  return (
    <div>
      <form>
        <h2>Register</h2>

        <label>Name: </label>
        <input type='text' name='name' value={formData.name} onChange={{handleChange}}/>
        <label>E-Mail: </label>
        <input type='email' name='email' value={formData.email} onChange={handleChange}/>
        <label>Password: </label>
        <input type='password' name='password' value={formData.password} onChange={{handleChange}}/>
        <button type='sumbit'>Register!</button>
      </form>
    </div>
  )
}

export default Register