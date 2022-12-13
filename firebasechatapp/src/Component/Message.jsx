import React from 'react'
import seun from '../img/experiment.png'

const Message = () => {
  return (
    <div className='message owner'>
    <div className='messageInfo'>
        <img src={seun} alt=''/>
        <span>just now</span>
    </div>
    <div className='messageContent'>
        <p>hello</p>
        <img src={seun} alt=''/>
    </div>
    </div>
  )
}

export default Message