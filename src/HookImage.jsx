import React from 'react'
import { useState } from 'react'

const HookImage = () => {
    let[image,setImage]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMvy99DZOyJFUs6HNAxwmzaHTlprcI031UQ&usqp=CAU")
    
    let handleChangeImage = ()=>{
        setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2ba8RTmg0fPtV6Rb5WunmiC_7R0vvA1xBA&usqp=CAU")
    }

  return (
    <div>
       <img src={image} alt="" />
       <button onClick={handleChangeImage}>Change Image</button>
    </div>
  )
}

export default HookImage