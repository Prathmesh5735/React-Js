import React from 'react'
import Post from './components/Post'
import { useState } from 'react'

const App = () => {
  const [toggle,setToggle]=useState(false)
  return (
    <div>
      <button style={{display:toggle ? 'none':"block", margin:"auto"}} onClick={()=>setToggle(!toggle)}>{toggle ? "" :"Click here"}</button>
      {toggle && <Post/>}
    </div>
  )
}

export default App