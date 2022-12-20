import React, { useState } from 'react'
import seun from "../img/experiment.png"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {

  const [err, setErr] = useState(false); 

  const navigate = useNavigate();
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
  
   
    try{
      await signInWithEmailAndPassword(auth, email, password);
          navigate('/');
     } catch(err){
       setErr(true);
     }
  
  
  };

  return (
    <div className='formContainer'>
    <div className='formWrapper'>
    <span className='logo'>Elvis Chat</span>
    <span className='title'>Register</span>
        <form onSubmit={handleSubmit}> 
        <input type="email" placeholder="email"/>
        <input type='password' placeholder="password"/>
      
        <button>Sign in</button>
        </form>
        {err && <span>{err}</span>}
        <p>You do have an account? <Link to='/register'>Register</Link></p>
    </div>
    </div>
  )
}

export default Login