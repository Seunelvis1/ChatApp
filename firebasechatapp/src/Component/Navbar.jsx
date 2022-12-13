import React from 'react'
import seun from "../img/experiment.png"
const Navbar = () => {
  return (
    <div className='navbar'>
    <span className='logo'>Elvis Chat</span>
    <div className='user'>
        <img src={seun} alt=""/>
        <span>John</span>
        <button>logout</button>
    </div>
    </div>
  )
}

export default Navbar