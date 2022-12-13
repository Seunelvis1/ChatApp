 import React from 'react'
 import seun from "../img/experiment.png"
import Input from './Input'
import Messages from './Messages'
 
 const Chat = () => {
   return (
     <div className='chat'>
     <div className='chatInfo'>
        <span>Jane</span>
        <div className='chatIcons'>
            <img src='' alt=''/>
            <img src='' alt=''/>
            <img src='' alt=''/>
        </div>
     </div>
     <Messages/>
     <Input/>

     </div>
   )
 }
 
 export default Chat