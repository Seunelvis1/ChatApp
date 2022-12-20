import { signOut } from 'firebase/auth'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { auth } from '../firebase'
import seun from "../img/experiment.png"
const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
    <span className='logo'>Elvis Chat</span>
    <div className='user'>
        <img src={currentUser.photoURL} alt=""/>
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
    </div>
    </div>
  )
}

export default Navbar