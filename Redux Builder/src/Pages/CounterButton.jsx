import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD, REDUCE } from '../Redux/actionType'
const CounterButton = () => {
    const dispatch= useDispatch()
  return (
    <>
        <button onClick={()=>dispatch({type:REDUCE,payload:1})}>REDUCE</button>
        <button onClick={()=>dispatch({type:ADD,payload:1})}>ADD</button>
        
    </>
  )
}

export default CounterButton