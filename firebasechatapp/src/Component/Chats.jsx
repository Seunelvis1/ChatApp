import React from 'react'
import seun from "../img/experiment.png"

const Chats = () => {
  return (
    <div className='chats'>
        <div className='userChat'>
    <img src={seun} alt=""/>
    <div className='userChatInfo'>
        <span>Jane</span>
        <p>Hello</p>
    </div>
</div>
 <div className='userChat'>
    <img src={seun} alt=""/>
    <div className='userChatInfo'>
        <span>Jane</span>
        <p>Hello</p>
    </div>
</div>
 <div className='userChat'>
    <img src={seun} alt=""/>
    <div className='userChatInfo'>
        <span>Jane</span>
        <p>Hello</p>
    </div>
</div>
 <div className='userChat'>
    <img src={seun} alt=""/>
    <div className='userChatInfo'>
        <span>Jane</span>
        <p>Hello</p>
    </div>
</div>
    </div>
  )
}

export default Chats