import React from 'react'
import seun from "../img/experiment.png";

const Search = () => {
  return (
    <div className='search'>
    <div className='searchForm'>
        <input type="text" placeholder='Find a user' />
    </div>
<div className='userChat'>
    <img className='imageT' src={seun} alt=""/>
    <div className='userChatInfo'>
        <span>Jane</span>
    </div>
</div>

    </div>
  )
}

export default Search