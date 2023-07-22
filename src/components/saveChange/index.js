import React from 'react'
import "./saveChange.css" 

function SaveChange() {
  return (
    <form className='SaveChange__form'>
        <div><input type="text" placeholder='JANE' /></div>
        <div><input type="text" placeholder='CURTIS' /></div>
        <div><input type="text" placeholder='youremailhere@gmail.com' /></div>
        <div><input type="password" placeholder='JANE' /></div>
        <div className='saveChangeButton'><button>SAVE CHANGES</button></div>
      
    </form>
  )
}

export default SaveChange
