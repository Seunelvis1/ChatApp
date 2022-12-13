import React from 'react'
import seun from "../img/experiment.png"

const Login = () => {
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
    <span className='logo'>Elvis Chat</span>
    <span className='title'>Register</span>
        <form> 
        <input type="email" placeholder="email"/>
        <input type='password' placeholder="password"/>
      
        <button>Sign in</button>
        </form>
        <p>You do have an account? Register</p>
    </div>
    </div>
  )
}

export default Login