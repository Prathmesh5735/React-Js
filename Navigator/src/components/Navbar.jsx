import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink style={({isActive})=>{
            return {
                color: isActive?"red":"white",
                textDecoration:'none'
            }
        }} to={"/"}>Home</NavLink>
            <NavLink style={({isActive})=>{
                return {
                    color: isActive?"red":"white",
                    textDecoration:'none'
                }
            }} to={"/about"}>About</NavLink>
        <NavLink style={({isActive})=>{
            return {
                color: isActive?"red":"white",
                textDecoration:'none'
            }
        }} to={"/product"}>Product</NavLink>
        <NavLink style={({isActive})=>{
            return {
                color: isActive?"red":"white",
                textDecoration:'none'
            }
        }} to={"/login"}>Login</NavLink>
    </div>
  )
}

export default Navbar